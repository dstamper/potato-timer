var PotatoApp = PotatoApp || {};
PotatoApp.timer = (function(timerSelector) {
    var hand = $(timerSelector + ' ' + '.hand').get(0);

    function mapSecondsToDegrees(totalSeconds) {
        return function(seconds) {
            var percentComplete = seconds / totalSeconds;
            return ((percentComplete * 180) + 180) % 360;
        }
    }
    var map25MinutesToDegrees = mapSecondsToDegrees(60 * 25);
    var i = 0;

    function tick() {
        hand.style.transform = 'rotate(' + map25MinutesToDegrees(i++) * 2 + 'deg)';
    }

    function reset() {
        i = 0;
        tick();
        i = 0;
    }
    return {
        tick: tick,
        reset: reset
    };
}('.timer'));