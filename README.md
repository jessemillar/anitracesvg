AniTraceSVG
===========

A while back, video game blog Polygon posted review of the PS4 and Xbox One using animated headers for the top of the articles.  These animations, which cleanly animated a traced outline of the devices being reviewed, gained a lot of attention.  I wanted to have a similar effect on my website, so I made this library.  It's pretty simple, but gets the job done.

For fun, here's a link to Polygon's post about the creation of the effect: http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit

###Generating SVG Code

My prevered vector illustration program is Adobe Illustrator CS6.  In Illustrator, to obtain raw SVG code (to paste into a div in your HTML file so the script can animate it), draw the shape you like, make sure to outline it with a border (don't use fills, the script won't account for them), File > Save As, choose SVG from the filtype dropdown, hit "Save", and click "SVG Code..." in the new window.  This should bring up a text editor with the code which you can then insert in your HTML file.

###Syntax

    var tracer = new AniTrace()

    tracer.trace('animation', 0, 2000, 'easeInOutQuad')
> 'animation' represents the div containing the SVG paths we wish to animate
***
> 0 is the delay in milliseconds before starting the animation
***
> 2000 is the duration in milliseconds of the animation
***
> 'easeInOutQuad' is the easing style chosen from the options listed at http://gsgd.co.uk/sandbox/jquery/easing/