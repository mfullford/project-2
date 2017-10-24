# Project-2

My project idea was a web app to share and connect with the hiking community. You can create your own hikes and post it to the country-wide map so that other people can join.

Here is my [trello check list](https://trello.com/b/zr8nIbNN/hike-social-app). I originally estimated that this would take about 52-63 hours, I hit just about 50.

Here are my wireframes for this project.

![project-2](https://user-images.githubusercontent.com/31824846/31954200-299be9c6-b8a2-11e7-93ac-093e6a77308d.png)

![screen shot 2017-10-24 at 10 01 33 am](https://user-images.githubusercontent.com/31824846/31954275-68f39c4a-b8a2-11e7-98cc-fb036764037c.png)

![screen shot 2017-10-24 at 10 02 51 am](https://user-images.githubusercontent.com/31824846/31954331-8b282fe2-b8a2-11e7-9fd0-56fa7cbb4662.png)

![screen shot 2017-10-24 at 10 01 46 am](https://user-images.githubusercontent.com/31824846/31954293-73de86ec-b8a2-11e7-809c-f09610168db5.png)



There was originally a simple login page, a discover page which everyone would see, and a form page. On the form, you would submit your hike, and then the hike would populate on the map.

How did I try to do this initially? With hard coded geo.json data. Something that looked like:
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

But, I quickly found out it was harder than I thought to route the form submissions to the geo.json data and then route that all the way back to the map. My stretch goals would be to get this working, but in the mean time I used html forms and modals to create group hikes that the user can see and edit.


