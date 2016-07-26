$(document).ready(function()
{
    $('#ball_list #tennis_ball').add('#level_list #level_1').addClass('whiteColor');

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


    $('#menuOptions ul#level_list li').click(function()
    {
        $('#menuOptions ul#level_list li').each(function()
        {
            $(this).removeClass('whiteColor');
        });

        $(this).addClass('whiteColor');
    });


    $('#menuOptions ul#ball_list li').click(function()
    {
        $('#menuOptions ul#ball_list li').each(function()
        {
            $(this).removeClass('whiteColor');
        });

        $(this).addClass('whiteColor');
        ball.type = $(this).attr('id');
    });
});


function audio()
{
    var snd = new Audio("blip.wav");
    snd.play();
}
