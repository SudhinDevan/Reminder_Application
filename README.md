# Reminder Application with React.js and Node.js
This is a reminder application built with React.js for the front end and Node.js for the back end. It allows users to set reminders by specifying a date and time, along with their email address and a custom message. The reminder will be sent via email at the specified date and time.

## Features
- **Responsive UI:** The application provides a user-friendly interface that adapts to different screen sizes.
- **Date and Time Selection:** Users can select the date and time for their reminders using intuitive date and time pickers.
- **Email Reminder:** Reminders are sent to the user's email address at the specified date and time.
- **Confirmation Dialog:** Before setting the reminder, users are presented with a confirmation dialog to ensure they want to proceed.
- **Error Handling:** The application handles errors gracefully and provides appropriate feedback to the user.

## Technologies Used

 **Frontend - React.js**:

- Material-UI for UI components
- Axios for making HTTP requests
- Day.js for date manipulation
- SweetAlert2 for confirmation dialogs

**Backend:**

- Node.js
- Express.js for the web server
- Cors for enabling cross-origin resource sharing
- Node Schedule for scheduling reminders
- dotenv for environment variable management

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the frontend directory and run npm install to install dependencies.
4. Navigate to the backend directory and run npm install to install dependencies.
5. Set up environment variables:
- Create a '.env' file in the backend directory.
- Define the following variables in the '.env' file:

```bash
  VITE_API_URL=http://localhost:3000/message
```
5. Start the backend server:
```bash
cd backend
npm start
```
6. Start the frontend development server:
```bash
cd frontend
npm start
```
7. Access the application in your web browser at http://localhost:3000.

## Usage
1. Enter your email address, select a date and time, and write your reminder message in the respective fields.
2. Click the "Submit" button to set the reminder. A confirmation dialog will appear.
3. Confirm the reminder setting.
4. The reminder will be sent to your email address at the specified date and time.

## Contributing
Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or create a pull request.

For any queries do feel free to contact at sudhindevan@gmail.com
