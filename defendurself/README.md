# defendurself-project4

# Project Overview

## Project Schedule


|  Day | Deliverable | 
|---|---|
|Day 1: Thu 5/24 | Wireframes, Priority Matrix, Schedule, Time Estimates |
|Day 2: Fri 5/25 | Approval\Pseudocode\Actual code\|
|Day 3: Sat 5/26 | out of town  |
|Day 4: Sun 5/27 | out of town during the day. Work on project at night |
|Day 5: Mon 5/28 | Work on project - build components |
|Day 6: Tues 5/29 | Work on project - build database |
|Day 7: Wed 5/30 | Work on project - build routes/controller   |
|Day 8: Thurs 5/31  | Work on project - build models  |
|Day 9: Fri 6/1 | Working Prototype with full commit to master |
|Day 10: Sat 6/2 | Deployment |
|Day 11: Sun 6/3 | Final edits...branching first |
|Day 12: Mon 6/4 | Project Presentations |


## Project Description

Title: Defend Urself

Defend Urself is workout related app specializing in gyms in the NYC area that teach self defense. There will be two tables, Boxing style and Grappling style. Both of them will display a list of gyms that pertain to that style, that will be filtered using the google places API. If that API doesn't work out, then the tables will be built from scratch. You can comment on a gym, add a gym and delete what you see fit. Each gym should come with the location and what they specialize in. 
 


## Wireframe

http://res.cloudinary.com/dc6dj6gen/image/upload/v1527263331/IMG_4298.jpg                      

## Priority Matrix

http://res.cloudinary.com/dc6dj6gen/image/upload/a_0/v1527179801/IMG_4291.jpg

## Routing Chart

http://res.cloudinary.com/dc6dj6gen/image/upload/v1527263331/IMG_4297.jpg

## ERD
http://res.cloudinary.com/dc6dj6gen/image/upload/v1527263331/IMG_4301.jpg


## MVP 
- Full CRUD
- Google Places API
- At least 2 tables
- Styled
- Node/Express Backend

## POST MVP
- User Auth
- Individual Gym Pages

## Components

| Components | Description|
|---|---|
| App | The main base for the components |
| Boxing | Displays the local boxing gyms where you can see the location and add, comment, and delete a gym if you choose |
| Grappling | Displays local Jiu-Jitsu gyms and others of that sort. You can add a gym, comment on one and delete something |
| Sign in | For user auth, IF IMPLIMENTED |

## User Story
This app is made for people who are considering self defense classes, but don't know what the right gym or style for them is. By looking over Defend Urself, they will get a comprehensive understanding of what style would fit them best, a convenient location and if it's rated well.  

## Code Snippet
Snippet of how my gyms are displayed in my boxing component. This ended up being a LOT harder to do than I expected. 
http://res.cloudinary.com/dc6dj6gen/image/upload/v1528122642/Screen_Shot_2018-06-04_at_10.29.52_AM.png


## Change Log
Had to scale back a lot due to big issues. Only one of the two tables works properly. 

## Issues and Resolutions
Full CRUD has been tough. The add function still doesn't work as well as I want to and I'm not sure. React and Express don't work well with each other. I couldn't get anything to render on either component so Joe, the TA, helped me map through each value in both tables. Took a very, very long time.

 
#### SAMPLE.....
**ERROR**: I'm actually dealing with an error now that says my .question is not defined in my checkAnswer function. Not sure why this is happening, it was working all day.                             
**RESOLUTION**: In the middle of trying to solve it now. 
