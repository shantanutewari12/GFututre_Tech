# Full Stack Project

A full stack application built using React for the frontend and Node.js, Express, and MongoDB for the backend.

## Frontend Setup

To set up the frontend, install the following dependencies using Vite:

## Frontend Components

In the src/components directory, the following components were created:

User.js: Displays user data.
CreateUser.js: Handles user creation.
UpdateUser.js: Manages updating user data.

These components are connected via React Router DOM for navigation.

## Backend Components

```javascript
npm init -y
npm install express nodemon mongoose cors
```

Backend API Setup
Create an index.js file for setting up the server and APIs.

Example API Endpoints
POST API: To create new data on the server.
GET API: To retrieve data from the server.
PUT API: To update data.

## Database

Connect the backend to MongoDB Compass using the connection string provided in MongoDB. Create a models folder to define schemas for storing project details.

Running the Application
Frontend
```javascript
npm run dev
```
Frontend
```javascript
nodemon index.js
```


```bash
npm create vite@latest frontend
cd frontend
npm install bootstrap axios react-router-dom
