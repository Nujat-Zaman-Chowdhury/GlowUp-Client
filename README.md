# GlowUp

- [Live Link (Firebase)](https://glowup-3efba.web.app)

## Overview
This project is a single-page application (SPA) built using React.js. It features a product catalog with functionalities for pagination, searching, filtering, and sorting of products. The application also includes user authentication via Firebase.

## Features
- **Pagination**: Navigate through pages of products with navigation buttons.
- **Search**: Search for products by name.
- **Categorization**: Filter products by brand, category, and price range.
- **Sorting**: Sort products by price (low to high, high to low) and date added (newest first).
- **Authentication**: Google and email/password authentication using Firebase.

## Tech Stack
- React.js
- Axios for HTTP requests
- Firebase for authentication
- Tailwind CSS for styling (optional)

## Setup Instructions

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone <frontend-repo-url>
   cd frontend
2. Install dependencies:

    ```bash
    Copy code
    npm install
3. Configure Firebase:
    Create a Firebase project and obtain configuration details.
    Create a .env file in the root directory and add your Firebase configuration:
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id

5. Start the development server:

    ```bash
    Copy code
    npm start
    The application will be available at http://localhost:3000.

## Deployment
    Deploy the application using Vercel, Netlify, or another hosting provider.
    Update environment variables in your deployment settings as needed.
