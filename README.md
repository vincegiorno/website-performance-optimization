The running optimized site is at http://vincegiorno.github.io/

This repository is a copy of the files there, with the production index.html in the root and other filed relative to it. The source files are in the src directory. gulpfile.js and its allied files and modules are also in the root. The files before optimization are in the frontend-nanodegree-mobile-portfolio repository.

Optimization was achieved in several ways. To speed the initial loading time, I
<ul><li>used a @media attribute on the print.css link</li>
<li>replaced the webfonts call with @font-face CSS rules</li>
<li>made the analytics script async</li>
<li>resized pizzeria.jpg to 100px wide for the small front-page image (all annotated in src/index.html)</li>
<li>compressed all files, including image files, using Gulp plugins.</li></ul>


The optimizations for the pizzeria page, documented in the main.js file in the src/views/js directory, were
<ul><li>main pizzeria.jpg image resized to 360px wide (affects load time)</li>
<li>number of sliding pizzas reduced from 200 to 48 (8 rows x 6 columns) which is enough to keep the visible functionality on widescreen and mobile portrait displays (affects load time and scrolling fps)</li>
<li><em>getElementById</em> and <em>getElementsByClassName</em> were used in place of <em>querySelector</em> and <em>querySelectorAll</em>, respectively (affects load time, time to change pizza sizes and scrolling fps</li>
<li>calculations and assignments that only needed to be done once were moved outside of loops where they were being re-evaluated on each iteration. These include:
<ul><li><em>dx</em> and <em>newwidth</em> calculations in the <b>changePizzaSizes</b> function, where the value of <em>document.getElementsByClassName("randomPizzaContainer")</em> is also stored as a variable rather than re-evaluated for each step (affects time to change pizza sizes)</li>
<li><em>document.getElementById("randomPizzas")</em> is also evaluated and stored in a variable outside of the <em>for</em> loop that appends the random pizzas when the page loads (affects load time)</li>
<li>(<em>document.body.scrollTop</em> / 125) calculation moved outside the <em>for</em> loop in the <b>updatePositions</b> function (affects scrolling fps)</li>
<li><em>document.getElementsByClassName("mover")</em> is evaluated in the DOMContentLoaded function right after the sliding pizzas are created, and stored in a variable (items) scoped to the whole main.js for use in <b>updatePositions</b> instead of being evaluated each time scrolling triggers a call</ul></ul>

P.S. I decided not to use the paint optimization hacks, since the potential cost on mobile performance I think outweighs the potential gain, given that the fps is already high outside of a few spikes for fast scrolling or changing scrolling direction and a mobile user would have to do a lot more scrolling with fewer pizzas appearing across the screen.
