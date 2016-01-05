The running optimized site is at http://vincegiorno.github.io/

This repository is a copy of the files there, with the production *index.html* in the root and other files relative to it. The source files are in the *src* directory. *gulpfile.js* and its allied files and modules are also in the root. The files before optimization are in the frontend-nanodegree-mobile-portfolio repository.

Optimization was achieved in several ways. To speed the initial loading time, I
+ used a `@media` attribute on the `print.css` link
+ replaced the webfonts call with `@font-face` CSS rules
+ made the analytics script async
+ resized *pizzeria.jpg* to 100px wide for the small front-page image (all annotated in *src/index.html*)
+ compressed all files, including image files, using Gulp plugins.


The optimizations for the pizzeria page, documented in the *main.js* file in the *src/views/js* directory, were
+ *main pizzeria.jpg* image resized to 360px wide (affects load time)
+ number of sliding pizzas reduced from 200 to 48 (8 rows x 6 columns) which is enough to keep the visible functionality on widescreen and mobile portrait displays (affects load time and scrolling fps)
+ `getElementById` and `getElementsByClassName` were used in place of `querySelector` and `querySelectorAll`, respectively (affects load time, time to change pizza sizes and scrolling fps
+ calculations and assignments that only needed to be done once were moved outside of loops where they were being re-evaluated on each iteration. These include:
  + `dx` and `newwidth` calculations in `changePizzaSizes()`, where the value of `document.getElementsByClassName("randomPizzaContainer")` is also stored as a variable rather than re-evaluated for each step (affects time to change pizza sizes)
  + `document.getElementById("randomPizzas")` is also evaluated and stored in a variable outside of the `for` loop that appends the random pizzas when the page loads (affects load time)
  + `document.body.scrollTop / 125` calculation moved outside the `for` loop in `updatePositions()` (affects scrolling fps)
  + `document.getElementsByClassName("mover")` is evaluated in the `DOMContentLoaded` function right after the sliding pizzas are created, and stored in a variable (`items`) scoped to the whole *main.js* for use in `updatePositions()` instead of being evaluated each time scrolling triggers a call</ul></ul>

P.S. I decided not to use the paint optimization hacks, since the potential cost on mobile performance I think outweighs the potential gain, given that the fps is already high outside of a few spikes for fast scrolling or changing scrolling direction.
