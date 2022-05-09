{ pkgs }: 
  let
    nginxModified = pkgs.nginx.overrideAttrs (oldAttrs: rec {
        configureFlags = oldAttrs.configureFlags ++ [
            "--http-client-body-temp-path=/home/runner/arc-angel/cache/client_body"
            "--http-proxy-temp-path=/home/runner/arc-angel/cache/proxy"
            "--http-fastcgi-temp-path=/home/runner/arc-angel/cache/fastcgi"
            "--http-uwsgi-temp-path=/home/runner/arc-angel/cache/uwsgi"
            "--http-scgi-temp-path=/home/runner/arc-angel/cache/scgi"
         ];
    });
  in
  {
    deps = [
      pkgs.nodejs-16_x
      pkgs.nodePackages.typescript-language-server
      pkgs.nodePackages.yarn
      pkgs.nodePackages.serve
      nginxModified
      pkgs.tmux
    ];
}