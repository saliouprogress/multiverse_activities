# BiteSized-Buddy
An application that allows a user to log meal information to their account and view visualizations to track their food intake.

### Team Roles & Responsibilities
- _**[Denille Carrington](https://github.com/CDenille)**_
- _**[Lucas Freitas](https://github.com/LuFrei)**_
- _**[Mamadou Diallo](https://github.com/saliouprogress)**_
- _**[Jorge Flores](https://github.com/floresjmjr)**_

## Setup

##### Installation
`npm install`

##### Usage
`npm run seed`
you can use `npm run dev` with nodemon to start the server
or `npm run start`

##### Run tests
`npm run test`

##### Run test coverage
`npm run test:report`

## Technologies
**Front-End**
- Chart.js
- HTML
- CSS
- Bootstrap
- JavaScript

**Back-End**
- Node/Express.js
- Handlebars.js

**Database**
- Sequelize
- Squelite



## Features
- **Sign-up**
  - A user can login with a username and password that has client and server-side validation
- **Login**
  - A user can login with a username and password that has client and server-side validation
- **Log Meals**
  - A user can add a meal, its total caloric intake, by the type (breakfast, lunch, dinner, snack) and when it was consumed.
- **Edit/Delete Meals**
  - A user can edit and delete any meal logged in their account, which includes client and server-side validation.
- **Summary Overview**
  - A user can view the meals consumed and the total caloric intake for the day.
  - A user can view the total caloric intake for each day of the last 7 days via a bar chart.
- **View History**
  - A user can view the entire history of the meals logged. 
  - The history can filtered by food type and total calories.

## Unit Test Coverage Report
![Unit Test Coverage Report](/readme/testReport.png)

## Design Documents

#### [UI Wireframes](https://design.penpot.app/#/workspace/12a325b0-5c25-11ec-826f-e949c75b760d/1488ae90-5c25-11ec-826f-e949c75b760d?page-id=1488ae91-5c25-11ec-826f-e949c75b760d)

#### [UML Class Diagram](https://app.diagrams.net/#G1IbcxbS5HBjVYbm9HuwcMpRT4Q-CE66ES)
![Class Diagram](/readme/classDiagram.png)

#### [UML Flowchart](https://app.diagrams.net/#G1JlcdiBRdiZ4tg-2dSr0Ew6u8jW0MqRvY)
![Flowchart](/readme/flowchart.png)

#### [API Flowchart](https://app.diagrams.net/#G1rnC2NA6poK__Ayz0hICIcVOqvlQbEIPc)
![API Diagram](/readme/apiDiagram.png)