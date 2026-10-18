#!/bin/bash
# Copies photos into the site, resized and compressed. Any NEW photo in the folder
# is added to the Life ring automatically.
SRC="${1:-$HOME/Desktop/shazan-career}"
DEST="public/images"
mkdir -p "$DEST/me" "$DEST/research" "$DEST/life"
rm -f "$DEST"/life/*.jpg

add() {
  if [ -f "$SRC/$1" ]; then
    sips -s format jpeg -s formatOptions 82 -Z 2000 "$SRC/$1" --out "$DEST/$2" >/dev/null 2>&1 && echo "  ✓ $1 → $2"
  fi
}

echo "Adding photos from $SRC"
add conference-icai-2026.jpeg   research/icai.jpg
add ranlp-2025.jpeg             research/ranlp.jpg
add mentoring.jpeg              me/mentoring.jpg
add banner.jpeg                 banner.jpg
add ppt.jpg                     life/01-presenting.jpg
add tennis.JPG                  life/02-tennis.jpg
add hike.JPG                    life/03-hiking.jpg
add california.jpg              life/04-california.jpg
add sunset.JPG                  life/05-sunset.jpg
add book.jpeg                   life/06-reading.jpg
add hike2.jpeg                  life/07-on-the-trail.jpg
add pool.JPG                    life/08-pool.jpg
add college.JPG                 life/09-campus.jpg
add leadership-panel-project.png me/leadership.jpg
add portrait.JPG                life/11-me.jpg

# J.UCS paper photo: any file with "jucs" in its name
for f in "$SRC"/*; do
  name=$(basename "$f"); low=$(echo "$name" | tr "[:upper:]" "[:lower:]")
  case "$low" in *jucs*|*j.ucs*|*j.uls*|*juls*|*j-ucs*|*j_ucs*) add "$name" research/jucs.jpg; JUCS="$name" ;; esac
done

KNOWN=" $JUCS conference-icai-2026.jpeg ranlp-2025.jpeg mentoring.jpeg banner.jpeg ppt.jpg tennis.JPG tennis2.JPG hike.JPG california.jpg sunset.JPG book.jpeg hike2.jpeg pool.JPG college.JPG leadership-panel-project.png portrait.JPG "
n=12
for f in "$SRC"/*; do
  name=$(basename "$f")
  case "$name" in *.jpg|*.JPG|*.jpeg|*.JPEG|*.png|*.PNG|*.heic|*.HEIC|*.webp) ;; *) continue ;; esac
  case "$KNOWN" in *" $name "*) continue ;; esac
  slug=$(echo "${name%.*}" | tr '[:upper:]' '[:lower:]' | tr ' _' '--' | tr -cd 'a-z0-9-')
  add "$name" "life/$(printf '%02d' $n)-$slug.jpg"
  n=$((n+1))
done
echo "Done."
