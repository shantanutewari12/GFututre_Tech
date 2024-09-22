# Full Stack Project Management Project

Welcome to the Full Stack Project! This application allows users to perform CRUD operations (Create, Read, Update, Delete) on project data using a React frontend and an Express backend with MongoDB.

## Features

- Create, read, update, and delete project details.
- Dynamic data fetching from the server.
- Responsive user interface.
- Integrated frontend and backend using Axios for API communication.

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for navigation between components.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap**: CSS framework for styling the frontend.

### Backend:
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Framework for building the backend APIs.
- **MongoDB**: NoSQL database for storing project data.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **Nodemon**: Tool for automatically restarting the server during development.
- **CORS**: Middleware to enable cross-origin requests.

# Approach that i have used to made this project
To begin, I organized the project by creating two separate folders: one for the frontend and another for the backend. For the frontend, I used Vite to set up React, and installed the necessary libraries, including Bootstrap, Axios, and React Router DOM. I then created a "components" folder containing three files: User, CreateUser, and UpdateUser, where I implemented the logic for displaying the creation, update, and deletion of projects. These components were connected using React Router DOM’s Link feature for navigation.

Next, I moved to the backend (server-side), where I installed Express, Nodemon, Mongoose, and CORS. I created an index.js file to define the APIs and assigned a port for the server. I also established a connection to the MongoDB Compass database using the connection string provided by MongoDB Compass. In the models folder, I defined the schema to store project details.

In the index.js file, I first wrote a POST API to push data to the server. I then created a GET API to retrieve data from the server. Finally, I integrated these APIs into the frontend, allowing dynamic data interaction, and also wrote the API to update existing records.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your local machine.
- **MongoDB** installed and running locally or a cloud instance (e.g., MongoDB Atlas).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shantanutewari12/GFututre_Tech.git
   cd full-stack-project
