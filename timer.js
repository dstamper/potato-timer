$(function() {
    var token;
    var time = 60 * 25;
    $('.start').click(function() {
        if (!token)
            token = StartTimer();
    })
    $('.stop').click(function() {
        clearInterval(token);
        PotatoApp.timer.reset();
        time = 60 * 25;
        $('.timerbody').text(convertSeconds(time));
        token = null;
    })

    function StartTimer() {
        return setInterval(Tick, 10);
    }

    function convertSeconds(s) {
        return Math.floor(s / 60) + ':' + ('00' + (s % 60)).slice(-2);
    }

    function Tick() {
        PotatoApp.timer.tick();
        if (time <= 0) {
            //some stuff and stop
            alert("BEEP");
            $('.stop').click();
        }

        $('.timerbody').text(convertSeconds(time));
        --time;
    }
});



//testTimer();