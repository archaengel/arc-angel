pkill nginx

err_log=/home/runner/$REPL_SLUG/logs/error.log
conf=/home/runner/$REPL_SLUG/nginx.conf
flags="-e $err_log -c $conf"

nginx $flags || nginx -s reload $flags