AniTraceSVG
===========

A while back, the video game blog Polygon posted [a review](http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit) of the PS4 and Xbox One using animated headers at the top of the articles. These animations, which cleanly animated a traced outline of the devices being reviewed, gained a lot of attention. I wanted to have a similar effect on my website, so I made this library.

###Generating SVG Code

In Adobe Illustrator, draw the shape you want to animate outlining. Make sure to outline it with a border (don't use fills, the script won't account for them). Click File > Save As, choose SVG from the filetype dropdown, hit "Save", and click "SVG Code..." in the new window. This should bring up a text editor with the code which you can then insert in your HTML file inside a div. We reference this div later for AniTrace to, well, trace, so make sure to give it an id.

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
