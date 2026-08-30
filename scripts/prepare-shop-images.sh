#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Prepare consistently named shop images from SKU-based source photographs.

Usage:
  scripts/prepare-shop-images.sh SOURCE_DIR DEST_DIR

Expected source names:
  HB26-001a.jpeg  front view
  HB26-001b.jpeg  inside view
  HB26-001c.jpeg  base view

Output names:
  hb26-001-front.jpeg
  hb26-001-inside.jpeg
  hb26-001-base.jpeg

Images are resized to a maximum 1800px edge, written as high-quality JPEGs,
and stripped of camera metadata with jpegtran when it is available.
USAGE
}

if [[ $# -ne 2 ]]; then
  usage
  exit 1
fi

source_dir="${1%/}"
dest_dir="${2%/}"

if [[ ! -d "$source_dir" ]]; then
  echo "Source folder not found: $source_dir" >&2
  exit 1
fi

mkdir -p "$dest_dir"

for source in "$source_dir"/HB26-[0-9][0-9][0-9][abc].jpeg; do
  if [[ ! -f "$source" ]]; then
    continue
  fi

  filename="$(basename "$source" .jpeg)"
  sku="${filename%?}"
  view_code="${filename: -1}"

  case "$view_code" in
    a) view_name="front" ;;
    b) view_name="inside" ;;
    c) view_name="base" ;;
    *)
      echo "Unexpected image suffix: $source" >&2
      exit 1
      ;;
  esac

  lowercase_sku="$(printf '%s' "$sku" | tr '[:upper:]' '[:lower:]')"
  output="$dest_dir/${lowercase_sku}-${view_name}.jpeg"

  sips \
    --resampleHeightWidthMax 1800 \
    --setProperty format jpeg \
    --setProperty formatOptions 82 \
    "$source" \
    --out "$output" >/dev/null

  if command -v jpegtran >/dev/null 2>&1; then
    optimized="${output}.optimized"
    jpegtran -copy none -optimize -progressive "$output" > "$optimized"
    mv "$optimized" "$output"
  fi

  echo "Prepared $output"
done
