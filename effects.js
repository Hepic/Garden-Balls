$(document).ready(function()
{
    $('#start_game').click(function()
    {
	    render();
	    $('#menuContainer').hide();
    });
});


function audio()
{
    var snd = new Audio("blip.wav");
    snd.play();
}
