#!/usr/bin/env bash
# Regenerate existing lightbox motion clips at 60fps with smoother pans.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT/public/systems"
OUT_DIR="$SRC_DIR/motion"

encode() {
  local src="$1"
  local out="$2"
  ffmpeg -y -hide_banner -loglevel error -loop 1 -i "$src" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,crop=1280:720:x='(iw-ow)/2':y='(ih-oh)*min(t/6\\,1)'" \
    -t 6 -r 60 \
    -c:v libx264 -pix_fmt yuv420p -profile:v high -level 4.1 \
    -tune stillimage -crf 17 -preset medium -bf 0 -g 60 \
    -movflags +faststart -an \
    "$out"
  echo "ok $(basename "$out") ($(ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "$out"))"
}

shopt -s nullglob
for out in "$OUT_DIR"/*.mp4; do
  stem="$(basename "${out%.mp4}")"
  src=""
  for ext in png jpg jpeg webp; do
    if [[ -f "$SRC_DIR/${stem}.${ext}" ]]; then
      src="$SRC_DIR/${stem}.${ext}"
      break
    fi
  done
  if [[ -z "$src" ]]; then
    echo "skip missing source for $(basename "$out")"
    continue
  fi
  encode "$src" "$out"
done

echo "done"
