# Project-2

My project idea was a web app to share and connect with the hiking community. You can create your own hikes and post it to the country-wide map so that other people can join.

### Basics

Here is my [trello check list](https://trello.com/b/zr8nIbNN/hike-social-app). I originally estimated that this would take about 52-63 hours, I hit just about 50.


### Wireframes

Here are my wireframes for this project:

![project-2](https://user-images.githubusercontent.com/31824846/31954200-299be9c6-b8a2-11e7-93ac-093e6a77308d.png)

![screen shot 2017-10-24 at 10 01 33 am](https://user-images.githubusercontent.com/31824846/31954275-68f39c4a-b8a2-11e7-98cc-fb036764037c.png)

![screen shot 2017-10-24 at 10 02 51 am](https://user-images.githubusercontent.com/31824846/31954331-8b282fe2-b8a2-11e7-9fd0-56fa7cbb4662.png)

![screen shot 2017-10-24 at 10 01 46 am](https://user-images.githubusercontent.com/31824846/31954293-73de86ec-b8a2-11e7-809c-f09610168db5.png)

### Breakdown

There was originally a simple login page, a discover page which everyone would see, and a form page. On the form, you would submit your hike, and then the hike would populate on the map. I wanted to use mapping API to be able to display a nice looking map on my page. I was actually able to do this with Google maps and using their documentation, I was able to actually style my map so it looked a little bit like my cover photo.

How did I try to do this initially? With hard coded geo.json data. First I had to learn what that was and how to use it. Geo.json data is GeoJSON is a format used to code geographic data structures. You can use it to make points or geometric shapes. My data looked something looked like:


eqfeed_callback (
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Hike Name": "Dream Lake",
        "State": "Colorado",
        "Date": "October 22",
        "Time": 8,
        "Who": "All welcome!",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.64581,
          40.31196
        ]
      },
    },
    {
      "type": "Feature",
      "properties": {
        "Hike Name": "Cibecue Falls",
        "State": "Arizona",
        "Date": "October 26",
        "Time": 10,
        "Who": "All welcome!",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.5562496,
          33.8384782
        ]
      },
    },
        {
      "type": "Feature",
      "properties": {
        "Hike Name": "Old Rag Shenendoah",
        "State": "Virginia",
        "Date": "October 29",
        "Time": 8,
        "Who": "All welcome!",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.3158,
          38.5517
        ]
      },
    },
  ]
}
);

### Challenges and Stretch Goals

I quickly found out it was harder than I thought to route the form submissions to the geo.json data and then route that all the way back to the map. My stretch goals would be to get this working, but in the mean time I used html forms and modals to create group hikes that the user can see and edit. I used passport for the login - using authentication the user cna login to my app and see the hikes. My routes were pretty tricky, but I exported my models without any difficulty. A user can get the hike with the hikeID, create a new hike, edit a hike, and delete a hike.

I played with Sass for my styling. I used chai to test my API (**shocking Google Maps worked**).

My project is deployed on [heroku](https://fierce-fjord-94955.herokuapp.com/discover-hikes). 

Shout out to my lessons in cartography for helping me along with this project. 

![buster-bluepart](https://user-images.githubusercontent.com/31824846/31956373-8096fcd8-b8a8-11e7-9b18-f5e94dd86084.gif)




