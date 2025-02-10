# Coffee App - Front-end

This repository contains the front-end code for a coffee ordering application.  It's built with ReactJs, Vite, Redux Toolkit, React Query, React Hook Form,  Tailwind css and Typescript. It interacts with a back-end API written in spring and kotlin to display the menu, handle user authentication, and process orders.

## Key Features

* **Menu Display:** Fetches and displays the coffee menu from a RESTful API.
* **User Authentication:** Implements secure user login using JWT (JSON Web Tokens).  Handles token storage and refresh for persistent sessions.  Includes registration and logout functionality.

## Technologies Used

* **Typecript and ReactJs: **  Core language/framework for building the user interface.
* **HTML/CSS:**  using Tailwind css Structure and styling of the application.
* **API Integration (Axios):**  For making HTTP requests to the back-end API.
* **JWT (JSON Web Tokens):**  For secure user authentication.

## Installation

1. Clone the repository: `git clone https://github.com/loayelzobeidy/coffee-react.git`
2. Navigate to the project directory: `cd coffee-react`
3. Install dependencies: `npm install` 
4. Configure API URL:  Update the API base URL in the application configuration file (e.g., `config.js` or `.env` file).  This should point to your back-end API endpoint.
5. Run the development server: `npm start` (or `yarn start`)

## API Endpoints

The front-end application interacts with the following API endpoints:
## Project Structure
