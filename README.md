Frontdoor Technical Challenge

This is a web application that allows you to summarize web pages and store the highlights and summaries in a MongoDB database. It also includes a Chrome extension that allows you to quickly highlight text on web pages and summarize them.

Installation
Clone the repository:
git clone https://github.com/YOUR_USERNAME/highlight-summarizer.git
Install dependencies in the root directory:

cd highlight-summarizer
npm install

Install dependencies in the frontend and backend directories:

cd frontend
npm install
cd ../backend
npm install

Create a .env file in the backend directory with the following information:

MONGODB_URI=YOUR_MONGODB_URI
DB_USERNAME=YOUR_MONGODB_USERNAME
DB_PASSWORD=YOUR_MONGODB_PASSWORD
DB_NAME=test
OPENAI_API_KEY=YOUR_OPENAI_API_KEY

Replace YOUR_MONGODB_URI, YOUR_MONGODB_USERNAME, and YOUR_MONGODB_PASSWORD with your MongoDB connection string, username, and password respectively. Replace YOUR_OPENAI_API_KEY with your OpenAI API key.

Build the application:

cd ../
npm run build

Start the application:

npm start

The application will run on localhost:3000.

Usage

Chrome Extension
The Chrome extension allows you to quickly highlight text on web pages and summarize them. However, the React content for the popout is not loading at the moment, likely due to a Webpack issue.

Frontend
To see the frontend content, open localhost:3000 in your browser. The application shows a list of stored highlights, and you can delete them. Click on the highlights to see the stored summary data.

Backend
To test the backend for summary retrieval from the OpenAI API, use Postman to make a POST request to http://localhost:3000/api/summary with a JSON object containing two properties: a url (string) and a highlightedText (string) property. You will receive a JSON object containing the saved data. To GET all highlights and summaries, make a GET request to http://localhost:3001/api/highlights. You will see all stored highlights and their corresponding summaries.

License
This project is licensed under the MIT License.