# Frontdoor Technical Challenge

This is a web application that allows you to summarize web pages and store the highlights and summaries in a MongoDB database. It also includes a Chrome extension that allows you to quickly highlight text on web pages and summarize them.


## Installation

Clone the repository:

```bash
git clone https://github.com/chdavis0917/frontdoor-technical-challenge.git
```

Install dependencies in the root directory:

```bash
cd project
npm install
```
Install dependencies in the frontend and backend directories:

```bash
cd frontend
npm install
cd ../backend
npm install
```

Create a .env file in the backend directory with the following information:

```bash
MONGODB_URI=YOUR_MONGODB_URI
DB_USERNAME=YOUR_MONGODB_USERNAME
DB_PASSWORD=YOUR_MONGODB_PASSWORD
DB_NAME=test
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

Replace YOUR_MONGODB_URI, YOUR_MONGODB_USERNAME, and YOUR_MONGODB_PASSWORD with your MongoDB connection string, username, and password respectively. Replace YOUR_OPENAI_API_KEY with your OpenAI API key.

## Usage

### Chrome Extension
The Chrome extension allows you to highlight text on web pages and create a summary of that highlighted text from the OpenAI API. You can view your saved highlights and associated summary data in a Chrome extension popup window.

### Frontend
To see the frontend content open Google Chrome's extension page and enable developer mode.
Click on "Load Unpacked". Navigate to the "frontend" directory. Look for the "dist" folder and click on it. Select "Open". The Google Chrome extension should now be available for use on the extensions page.

### Backend
To fire up the backend, navigate into the "backend" directory via the terminal and run "npm start". The server is now running on localhost:3001. The NestJS server must be running for the Google Chrome extension to perform its necessary functionality.

To test the backend for summary retrieval from the OpenAI API, use Postman to make a POST request to: 'http://localhost:3000/api/summary' with a JSON object containing two properties: a url (string) and a highlightedText (string) property. You will receive a JSON object containing the saved data. 

To GET all highlights and summaries, make a GET request to: 'http://localhost:3001/api/highlights'. You will see all stored highlights and their corresponding summaries from the OpenAI API.

To delete a highlight object, make a DELETE request to 'http://localhost:3001/highlight/:_id' with the params containing the id string stored by mongoDB. 

### Demo
To make use of this Chrome extension, make sure it is properly installed on Chrome and the server is running. Now, simply navigate to any webpage and highlight text of any length. Highlighting 4-10 paragraphs of text will achieve the most desirable effect. Wait a moment for the OpenAI API to return a summary. Now open the Chrome extension popup window. You will see the highlighted text displayed on the Highlights page. Click on the desired highlight to see the summary created by OpenAI API. Hit the back button to return to your list of highlights. Delete any unwanted highlights with the Delete button.


## License

[MIT](https://choosealicense.com/licenses/mit/)
