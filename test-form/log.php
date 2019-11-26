<?php
/* Logging POST data */

// set timestamp
$datetime = date("Ymd-Gis");

/* create data to log */

// show date time
$log_data = $datetime . PHP_EOL;
$log_data .= 'POST values:' . PHP_EOL;
// export data from POST - https://stackoverflow.com/a/139553/263877
$post_vars = var_export($_POST, TRUE);
// add the post vars (as actual PHP array)
$log_data .= $post_vars;

/* log POST data to file */

// see https://stackoverflow.com/a/19898993/263877
$filename = './.post_data.' . $datetime . '.log';
// result is # of bytes if success - https://www.php.net/manual/en/function.file-put-contents.php
$result = file_put_contents($filename, $log_data, FILE_APPEND);

// handle errors - note that Elementor can't handle HTTP response codes other than 200 - sees as errors
if($result === FALSE) {
  // No content - file not created (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  // https://stackoverflow.com/a/12018482/263877
  http_response_code(200);
}
else if($result != FALSE) {
  // Log file created - doesn't check if it has a body
  http_response_code(200);
}
