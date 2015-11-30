$(document).ready(function()
{
    $('#start_game').click(function()
    {
	    start_render();
	    $('#menuContainer').hide();
    });
});

function audio()
{
    var snd = new Audio("blip.wav");
    snd.play();
}
