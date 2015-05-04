var AniTrace = function() {
    this.trace = function(div, delay, duration, easing) {
        document.getElementById(div).style.visibility = 'visible'; // Fix a Safari bug (I hate that browser)

        var paths = document.getElementById(div).getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path'); // Gather all the paths

        for (var i = 0; i < paths.length; i++) // Play with the paths so they draw
        {
            var path = paths[i];
            var length = path.getTotalLength();

            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;

            this.draw(path, delay, duration, easing);
        }
    };

    this.draw = function(path, delay, duration, easing) { // Needed closure
        setTimeout(function() {
            $(path).animate({
                strokeDashoffset: 0
            }, duration, easing);
        }, delay);
    };
};
