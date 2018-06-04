# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project: Fullstack Java Web Application 
## Overview

A client has outlined a need for a new full-stack dashboard app
You will design, develop, and architect a full-stack app with Spring Boot and Spring Framework. This application uses a front-end dashboard built in `React`.

## Client Proposal
- Problem statement from the client
- What business problem are you trying to solve with technology?
- Technical requirements of solving the business problem
    - construct database structure to represent data client wants to save
    - construct API out of database with endpoints to allow for client interaction
    - construct simple user interface with ability to manipulate data
    - deployment of server with database and front end touching api
- External case study that demonstrates a similar problem/solution


## Technologies
- Spring Boot, Docker, React, Recharts

## Running Instructions
1. Turn on Docker application
2. Navigate to project repository in Command Line Interface
3. Execute 'docker-compose up' from spring api directory
4. Execute 'npm start' from client
5. Switch users with select option to view different data subsets
6. Create, Update, or Delete a user's data to see visual change
7. To turn off, "ctrl + c" to exit react app, "ctrl + c" and "docker-compose down" to turn off server

## Application Design
- Main dashboard view to see what types of activites people are doing
    - Top Header "Path to Mastery", "logging activities, revealing your behavioral patterns, progressing towards your goals"
        - option to select a user (would be login)
    - displays a graph showing maybe a pie chart of time spent doing different activities
    - displays a log on the right showing recent activities
- User clicks their username...
    - top header shows their username and tagline
        - is there an edit profile?
        - maybe on highlight, a pencil icon appears and user can edit that box
            - if user clicks pencil, a save and a cancel button appears
    - main graph displays their activities over past few months
    - pie graph of all time activity times
- can select a month to view a list of activities
    - can create a new activity for that month
    - can edit any activity, delete or create new one (same click pencil idea as header)

## Models
- user table with user_name, tagline
- ~~meditation~~ activities table with date, user_id, minutes, (string) type, (string) notes
    - mvp: use String month, not date
    - change table name to reflect an activity log tracker allowing for a person to log their minutes for any type of activity

## To-do features
1. Google Map API feature
    1. ~~Create client visual for map~~
        1. ~~stub map component~~
        2. ~~create visual wrapper component to tab between graph and map~~
        3. ~~create dummy data for map and test map rendering~~
        4. ~~add form input for location~~
        5. ~~touch google api to autofill location~~
        6. ~~stub a location field or latitude, longitude in sending post/put~~
    2. Update activities model to account for lat and long
    3. hook together sending post/put to lat and long
2. Re-organize model structure
    1. using category table rather than "name" of activity
        - does this keep track of user_id and use a hook to update sum of minutes?
        - keeping track of sum allows for pie chart visual... (would this be landing page?), if we know num of entries or provide an endpoint for this, we can calculate the avg so the user can see their stats for an activity with the graph for it
        - OR having an endpoint to depict growth over time?
            - or just get all activities by category id and client can have functionality to switch graph between each data point or summing for gradual growth
        - allow for graph component to have a dropdown to select activity?
    2. (out of order) change "month" column to a date type
        1. THIS BREAKS THE GRAPH AND FORM BIG TIME
        2. add date handling on front end to convert to inputs to correct type for db
        3. how do we handle the no user landing page graph? (get activites between certain dates?)

## Possible Future Features and Improvements
- use actual date for month column of activities
- protect individual activity data, user auth
    - landing page is modeled after Facebook with create user on right, demo graph on left, login at top
    - allows for routing as well with edit user, user stats, and user category, maybe a user daily
- potential to reorganize database for putting entries into table for daily activities
    - this would use the date type in db
    - still keep month views or maybe it depends on the span of time of recent entries
- categorizing activities? maybe creating a new activity is a dropdown for users
    - this might suggest that activities table keep total time, with name of activity
    - entries are referencing a certain activity
    - hooks will update total minutes for activity, check if an activity exists (if creating a new one) before making it
    - still have activity name but also have a category, group by category so another table of categories where adding an activity has choice of category
- web app vs mobile?
    - mobile might give possible reminder each day to log your activities for the day?
    - could use as much as user wants but it might be a full day log
    - landing page gives some stats? or progress page to check on goals?
- Adding goals for users
    - number of minutes over certain time frame in certain category
- User Interface for web app ideas
    - tabs left of graph allow for switching between graph and map
    - sub menu (nav bar below header) middle is recent months, left is all time, right is today or week?
        - this or allowing for just a time frame above graph which means getting all of users data and filtering by date
    - implement app using redux
    - re-design using Google's Material UI