$(document).ready(function()
{
    $('#start_game').click(function()
    {
        render_window();
	    $('#menuContainer').hide();
    });


    $('#menuContainer #options').click(function()
    {
        $('#menuContainer').hide();
        $('#menuOptions').show();
    });


    $('#menuOptions #menu').click(function()
    {
        $('#menuOptions').hide();
        $('#menuContainer').show();
    });


    $('#menuOptions #ball_type #tennis_ball').click(function()
    {
        ball.type = 'tennis_ball';
    });


    $('#menuOptions #ball_type #basket_ball').click(function()
    {
        ball.type = 'basket_ball';
    });


    $('#menuOptions #ball_type #soccer_ball').click(function()
    {
        ball.type = 'soccer_ball';
    });
});


function audio()
{
    var snd = new Audio("blip.wav");
    snd.play();
}
