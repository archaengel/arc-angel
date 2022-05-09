# Issues
I had trouble getting nginx to work initially, even though it was working in the nix-template project with flask.

I tried using `serve -l 8080`, which worked. After noticing that `nginx` runs in the background by default, unlike yarn, setting `daemon off;` in `nginx.conf` worked.