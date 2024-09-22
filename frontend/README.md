# Project Management

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


To begin, I organized the project by creating two separate folders: one for the frontend and another for the backend. For the frontend, I used Vite to set up React, and installed the necessary libraries, including Bootstrap, Axios, and React Router DOM. I then created a "components" folder containing three files: User, CreateUser, and UpdateUser, where I implemented the logic for displaying the creation, update, and deletion of projects. These components were connected using React Router DOM’s Link feature for navigation.

Next, I moved to the backend (server-side), where I installed Express, Nodemon, Mongoose, and CORS. I created an index.js file to define the APIs and assigned a port for the server. I also established a connection to the MongoDB Compass database using the connection string provided by MongoDB Compass. In the models folder, I defined the schema to store project details.

In the index.js file, I first wrote a POST API to push data to the server. I then created a GET API to retrieve data from the server. Finally, I integrated these APIs into the frontend, allowing dynamic data interaction, and also wrote the API to update existing records.