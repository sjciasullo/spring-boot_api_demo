# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project: Fullstack Java Web Application 
## Overview

A client has outlined a need for a new full-stack dashboard app
You will design, develop, and architect a full-stack app with Spring Boot and Spring Framework. This application uses a front-end dashboard built in `React`.

## Models

- user table with user_name, tagline
- ~~meditation~~ activities table with date, user_id, minutes, (string) type, (string) notes
    - mvp: use String month, not date
    - change table name to reflect an activity log tracker allowing for a person to log their minutes for any type of activity

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

## Possible Features and Improvements
- use actual date for month column of activities
- protect individual activity data, user auth
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

## Running Instructions
1. Turn on Docker application
2. Navigate to project repository in Command Line Interface
3. Execute 'docker-compose up' from spring api directory
4. Execute 'npm start' from client
5. Switch users with select option to view different data subsets