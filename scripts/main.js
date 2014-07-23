var drawDelay = 75
var drawLife = 800

var fadePause = 2000 // The amount of time to wait before starting the fade in of the "game_developer" text
var fadeDelay = 45
var fadeLife = 800

var startTime = 0 // Set the initial start time for the tiptap disabler so the function doesn't wig out the first time

function tiptap(event) // No tiptapping allowed on the controller!
{
	var now = +(new Date())
	if (startTime + 500 > now)
	{
		event.preventDefault()
	}
	startTime = now
}

function loaded()
{
   	document.getElementById('animation').style.visibility = 'visible' // Fix a Safari bug (I hate that browser)

	var paths = document.getElementById('animation').getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path') // Gather all the paths

	for (var i = 0; i < paths.length; i++) // Play with the paths so they draw
    {
        var path = paths[i]
        var length = path.getTotalLength()
        path.style.strokeDasharray = length + ' ' + length
        path.style.strokeDashoffset = length

        draw(path, drawDelay * i) // Use an external function to allow for delays
    }

    setTimeout(function() {
    	var paths = document.getElementById('fader').getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path') // Gather different paths

	    for (var i = 0; i < paths.length; i++) // Play with the other paths so they fade in
	    {
	        fade(paths[i], fadeDelay * i) // Use an external function to allow for delays
	    }
    }, fadePause) // Pause a bit before starting to fade in the "game_developer" text
}

function draw(path, delay)
{
	setTimeout(function() {
		$(path).animate({strokeDashoffset: 0}, drawLife, 'easeInOutQuad')
	}, delay)
}

function fade(path, delay)
{
	setTimeout(function() {
		$(path).animate({opacity: 1}, fadeLife, 'easeInOutQuad')
	}, delay)
}

function press(button)
{
	if (button == 'd_up' || button == 'd_down' || button == 'd_left' || button == 'd_right')
	{
		document.getElementById(button).setAttribute('stroke-width', '4')
	}
	else
	{
		if (parseFloat(document.getElementById(button).style.strokeDashoffset) == 0) // If the drawing animation has completed on the button in question
		{
			document.getElementById(button).setAttribute('fill', '#FFFFFF')
		}
	}
}

function releaseAll()
{
	release('d_up')
	release('d_down')
	release('d_left')
	release('d_right')
	release('button_a')
	release('button_b')
	release('button_start')
	release('button_select')
}

function release(button)
{
	if (button == 'd_up' || button == 'd_down' || button == 'd_left' || button == 'd_right')
	{
    	document.getElementById(button).setAttribute('stroke-width', '2')
    }
    else
    {
    	document.getElementById(button).setAttribute('fill', 'none')
    }
}

function keyDown(event)
{
	if (event.keyCode == 38) // Up arrow
	{
		event.preventDefault()
		press('d_up')
	}

	if (event.keyCode == 40) // Down arrow
	{
		event.preventDefault()
		press('d_down')
	}

	if (event.keyCode == 37) // Left arrow
	{
		event.preventDefault()
		press('d_left')
	}

	if (event.keyCode == 39) // Right arrow
	{
		event.preventDefault()
		press('d_right')
	}

	if (event.keyCode == 65) // A (A)
	{
		event.preventDefault()
		press('button_a')
	}

	if (event.keyCode == 83) // S (B)
	{
		event.preventDefault()
		press('button_b')
	}

	if (event.keyCode == 13) // Enter (Start)
	{
		event.preventDefault()
		press('button_start')
	}

	if (event.keyCode == 16) // Shift (Select)
	{
		event.preventDefault()
		press('button_select')
	}
}

function keyUp(event)
{
	if (event.keyCode == 38) // Up arrow
	{
		event.preventDefault()
		release('d_up')
	}

	if (event.keyCode == 40) // Down arrow
	{
		event.preventDefault()
		release('d_down')
	}

	if (event.keyCode == 37) // Left arrow
	{
		event.preventDefault()
		release('d_left')
	}

	if (event.keyCode == 39) // Right arrow
	{
		event.preventDefault()
		release('d_right')
	}

	if (event.keyCode == 65) // A (A)
	{
		event.preventDefault()
		release('button_a')
	}

	if (event.keyCode == 83) // S (B)
	{
		event.preventDefault()
		release('button_b')
	}

	if (event.keyCode == 13) // Enter (Start)
	{
		event.preventDefault()
		release('button_start')
	}

	if (event.keyCode == 16) // Shift (Select)
	{
		event.preventDefault()
		release('button_select')
	}
}