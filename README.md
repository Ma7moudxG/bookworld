Overview

This is a React-based frontend application for managing bookstores, books, and authors. The application provides a user-friendly interface for an admin to manage multiple stores, list books, and perform CRUD operations on books, authors, and store inventories.

Features

Shop Page: Displays a list of books with their cover, title, author, and availability in stores. Allows marking a book as sold.

Authors Page: Displays a list of authors with options to edit or delete an author, and a modal to add a new author.

Books Page: Displays a list of books with the number of pages and author details. Provides in-line editing for book titles.

Stores Page: Lists stores with each row acting as a link to the store inventory page.


Prerequisites

Before running the application, ensure you have the following installed:

Node.js (v16 or later)

npm (v8 or later) or yarn (v1.22 or later)

Installation

Clone the repository:

git clone git@github.com:Ma7moudxG/bookworld.git

Navigate to the project directory:

cd bookstore-frontend

Install dependencies:

npm install

or, if you use yarn:

yarn install

Running the Application

Start the development server:

npm start

or, if you use yarn:

yarn start

Open your browser and navigate to:

http://localhost:3000

Project Structure

src/components: Contains reusable React components.

src/pages: Contains page-specific components and layouts.

src/assets: Includes static assets like images.

src/api: Includes stub JSON files that act as API endpoints for the app.

JSON API Stubs

The app uses sample JSON files to simulate API endpoints. These files can be found in the src/api directory. They include data for books, authors, and stores.

Scripts

npm start or yarn start: Start the development server.

npm run build or yarn build: Build the app for production.

npm test or yarn test: Run the test suite.

Limitations

This application is not containerized.

Docker and Docker Compose support are not included in this version.