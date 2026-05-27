#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
ENV_FILE="$ROOT_DIR/deploy/fasthosts.env"

if [ ! -f "$ENV_FILE" ]; then
  echo "Missing deploy/fasthosts.env"
  echo "Copy deploy/fasthosts.env.example to deploy/fasthosts.env and fill in the Fasthosts details."
  exit 1
fi

# shellcheck disable=SC1090
. "$ENV_FILE"

: "${FASTHOSTS_HOST:?Set FASTHOSTS_HOST in deploy/fasthosts.env}"
: "${FASTHOSTS_USER:?Set FASTHOSTS_USER in deploy/fasthosts.env}"
: "${FASTHOSTS_PORT:?Set FASTHOSTS_PORT in deploy/fasthosts.env}"
: "${FASTHOSTS_REMOTE_PATH:?Set FASTHOSTS_REMOTE_PATH in deploy/fasthosts.env}"

cd "$ROOT_DIR"

rsync -avz -e "ssh -p $FASTHOSTS_PORT" \
  contact.php \
  pages/contact.html \
  css/contact.css \
  "$FASTHOSTS_USER@$FASTHOSTS_HOST:$FASTHOSTS_REMOTE_PATH"
