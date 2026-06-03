#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Prepare a batch of gallery images for the public website.

Usage:
  scripts/prepare-gallery-images.sh SOURCE_DIR DEST_SUBFOLDER [name-prefix]

Examples:
  scripts/prepare-gallery-images.sh local-originals/gallery-inbox/2026-06-02-bowls bowls large_blue_bowl
  scripts/prepare-gallery-images.sh ~/Desktop/pottery-export tableware crackle_jug

Output:
  images/DEST_SUBFOLDER/name-prefix_1.jpeg
  images/DEST_SUBFOLDER/name-prefix_2.jpeg

The script uses macOS sips, resizes the longest edge to 1800px, and writes JPEG
files suitable for the gallery.
USAGE
}

if [[ $# -lt 2 || $# -gt 3 ]]; then
  usage
  exit 1
fi

source_dir="${1%/}"
dest_subfolder="${2%/}"
name_prefix="${3:-gallery_image}"
site_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dest_dir="$site_root/images/$dest_subfolder"

if [[ ! -d "$source_dir" ]]; then
  echo "Source folder not found: $source_dir" >&2
  exit 1
fi

mkdir -p "$dest_dir"

shopt -s nullglob nocaseglob
inputs=(
  "$source_dir"/*.jpg
  "$source_dir"/*.jpeg
  "$source_dir"/*.png
  "$source_dir"/*.tif
  "$source_dir"/*.tiff
)
shopt -u nocaseglob

if [[ ${#inputs[@]} -eq 0 ]]; then
  echo "No JPEG, PNG, or TIFF images found in: $source_dir" >&2
  exit 1
fi

counter=1
for input in "${inputs[@]}"; do
  output="$dest_dir/${name_prefix}_${counter}.jpeg"
  while [[ -e "$output" ]]; do
    counter=$((counter + 1))
    output="$dest_dir/${name_prefix}_${counter}.jpeg"
  done

  sips --resampleHeightWidthMax 1800 --setProperty format jpeg "$input" --out "$output" >/dev/null
  echo "Prepared ${output#$site_root/}"
  counter=$((counter + 1))
done
