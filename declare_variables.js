var canvas = document.getElementById('cnv');
var ctx = canvas.getContext('2d');
var W1 = 200, W = canvas.width - 200, H = canvas.height;
var time_sec = 0, score = 0, isPaused = false, first_time = true;
var background_image = new Image();

background_image.src = 'background.png';
