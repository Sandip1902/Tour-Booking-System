# Travel Agency Application

## Project Description

The Travel Agency Application is a web-based platform designed to streamline travel bookings and management. It offers users the ability to explore various tour packages, make bookings, and view invoices, while providing an admin panel for package management and booking oversight.

## Live Demo:-
### https://tour-booking-system-l4b4.onrender.com

```
https://tour-booking-system-l4b4.onrender.com
```

## Key Features:

### User Dashboard:

- Browse and book tour packages.

- View and manage your bookings.

- Receive detailed invoices for completed bookings.

### Admin Panel:

- Add, edit, and delete tour packages.

- View and manage all user bookings.

## Tech Stack:

- Frontend: React/Next.js, TailwindCSS

- Backend: Node.js, Express.js

- Database: MongoDB

## Architecture Overview

This application follows a typical MERN (MongoDB, Express, React, Node.js) architecture.

### Frontend:

- Built with React for a dynamic, responsive, and interactive UI.
- Styled using TailwindCSS for utility-first styling.

### Backend:

- Built with Node.js and Express to create the RESTful API for handling operations (CRUD).
- MongoDB (using Mongoose ORM) for storing user and booking data.

### Database:

- MongoDB stores tour package, booking, and user data.
- The backend is connected to the database using Mongoose.

## Setup Instructions

### Follow these steps to set up and run the application locally:

### Prerequisites:

#### Ensure you have the following installed:

- Node.js (v14 or higher)

- MongoDB (local or cloud instance)

- npm or yarn

### Steps

#### 1. Clone the Repository:
``` bash
git clone https://github.com/Sandip1902/Tour-Booking-System.git
cd travel-agency-app
```

### 2. Install Dependencies:
Navigate to the respective directories and install dependencies:

#### Backend:
``` bash
cd backend
npm install
```
#### Frontend:
```bash
cd ../frontend
npm install
```
### 3.Set Up Environment Variables:

#### Create a .env file in the backend directory with the following:
``` bash
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```
### 4. Create a .env.local file in the frontend directory for custom configurations if needed.

### 5. Run the Application:

#### Start the backend server:
```bash
cd backend
npm start
```
#### Start the frontend development server:
```bash
cd ../frontend
npm start
```
### 6. Access the Application:

#### Frontend: Visit http://localhost:3000 in your browser.

#### Backend API: Access endpoints at http://localhost:5000/api.

## Implemented Features

### User Features:

- Tour Package Display:

- View a variety of curated tour packages.

- See package details including description, price, available dates, and images.

### Booking System:

- Book packages by selecting a preferred date.

- Receive a confirmation and view all bookings.

- Invoice Generation:

- Automatically generate an invoice for each booking.

### Admin Features:

- Package Management:

- Add new tour packages with essential details.

- Update or delete existing packages.

- Booking Oversight:

- View and manage all user bookings from a centralized dashboard.

## API Endpoints

### Public Routes:

- GET /api/packages: Retrieve all tour packages.

- GET /api/packages/:id: Retrieve details of a specific package.

- POST /api/bookings: Create a new booking.

- GET /api/bookings/:id: Retrieve details of a specific booking.

### Admin Routes:

- POST /api/packages: Add a new tour package.

- PUT /api/packages/:id: Update an existing tour package.

- DELETE /api/packages/:id: Delete a tour package.

- GET /api/bookings: Retrieve all bookings.

- DELETE /api/bookings/:id: Delete a specific booking.

- POST /admin: Login to the admin panel (hardcoded credentials: username = admin, password = admin123).

- POST /admin/dashboard: Manage packages and bookings (add or delete packages, view bookings).


## For any query reach out : 
- sandipsannake@gmail.com
- https://github.com/Sandip1902
