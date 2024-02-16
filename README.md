# Booma Enterprises Web Application

Welcome to the Booma Enterprises assessment task. This web application is designed to showcase my technical capabilities in front-end and back-end web development using React, Vite, and Firebase services. The primary functionalities include authentication, authorization, navigation, and a "Forgot Password" feature.

## Technologies Used

- Front-end: React + Vite
- Backend services: Firebase

## Functionality Requirements

### Authentication

#### Login and Sign Up

- Implemented a Login and Sign Up screen.
- Utilized Firebase Authentication for user authentication.
- Included a "Forgot Password" feature to allow users to reset their passwords.

### Authorization

- Created three registered users: user-1, user-2, and user-3.
- Implemented role-based access control:
  - user-1: Complete access to all screens.
  - user-2: Access to two specific screens.
  - user-3: Access to two different specific screens.
- Only registered users can access the application.

### Navigation

- Designed a sample Side Menu Bar with proper navigation links.
- Implemented routing to navigate between different screens.

### Private Screens

- Created five different sample screens.
- Restricted access to these screens based on the user's role:
  - user-1 can access all five screens.
  - user-2 can access two specific screens assigned by the super user.
  - user-3 can access two different specific screens assigned by the super user.

## Getting Started

To run the Booma Enterprises web application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Afaq0/react-firebase.git`
2. Navigate to the project folder: `cd booma-enterprises`
3. Install dependencies: `npm install`
4. Set up Firebase configuration with your credentials.
5. Run the application: `npm start`

## Additional Notes

- Make sure to replace placeholder text and configurations with your actual project details.
- Ensure that Firebase services are properly configured for authentication and database functionalities.

Feel free to reach out if you have any questions or need further assistance.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
