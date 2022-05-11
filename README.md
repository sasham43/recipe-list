# Sasha's Recipe List

## Project
I found this project pretty straightforward, I've built many SPAs for previous companies with exactly this sort of functionality.  Working with JSON-Server was a first for me, but it seems like a really great prototyping tool.  I would say the main difficulty I had was working with sample data.  I grabbed the first set of sample JSON recipes so I could put data on the page, but if I did it over I would probably start with the Create screen then use that to build up a dataset of recipes.  I also would have liked to include more color, but the UI library I chose (while otherwise a pleasure to work with) had accessibility contrast issues with the button colors I tried, so I elected to keep it simple.  In the future, I would choose a different UI library that has a better focus on accessibility to avoid those issues from cropping up at all.  The other third party libraries I used were React Router and Dayjs.  I considered just building a simple hide/show system for the different screens, but in the interest in extensibility added the router.  I add Dayjs (or equivalent date parsing library) to any project where any date manipulation is necessary because I strongly dislike the built-in tools for Javascript Date parsing.  It seems they are working on an improvement (Temporal) but I'll wait until its production ready to start using it.  

## Notes
Even though I completed this project in plenty of time, I felt very rushed while doing it.  This led to me missing a few things, most notably that the Favorites weren't supposed to be stored in local storage.  I just read the database part.  It was already working by the time I realized that, if I had to do it again I would probably store it in a cookie but functionality-wise it's on par with local storage.  I also missed the fact that I was supposed to have a full page for the favorites.  I would use my same list component, but when I pull in the list of recipes, check which ones are favorited and run a simple Array.filter to only show the favorited recipes.