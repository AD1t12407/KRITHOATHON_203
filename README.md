# Historic Site Scraper

## Overview
The Historic Site Scraper is a MERN stack application designed to scrape and display historical data about places. Users can enter the name of a place, and the application will fetch and display historical information about that place from various sources on the web.

## Features
- **Place Search**: Users can search for any place to find its historical data.
- **Data Display**: The application displays the historical information directly on the webpage after fetching it through web scraping techniques.

## Technologies Used
- **MongoDB**: A NoSQL database used to store place names and their corresponding historical data.
- **Express.js**: A web application framework for Node.js, used to build the backend.
- **React**: A JavaScript library for building user interfaces, used for the frontend.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for the backend.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Cheerio**: A fast, flexible, and lean implementation of core jQuery designed specifically for the server to parse markup and extract data.
- **Cors**: A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Installation
To set up the project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open another terminal and navigate to the `src` directory to start the React application:
   ```bash
   npm start
   ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter a place name in the input field and click the "Get History" button.
3. View the historical data displayed on the page.

## Deployment
For production, the application can be deployed on cloud platforms like Heroku or AWS. Ensure that you set up the MongoDB environment variables and configure the ports correctly according to your deployment settings.

## Contributing
Contributions are welcome. Please fork the repository and submit a pull request with your features or fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.