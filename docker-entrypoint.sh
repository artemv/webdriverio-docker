rm /tmp/.X99-lock
Xvfb :99 -screen 0 1286x1005x24 &
tail -f /dev/null
