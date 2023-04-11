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

Build the application in the root directory:

```bash
cd ../
npm run build
```

Start the application:
```bash
npm start
```
## Usage

### Chrome Extension
The Chrome extension allows you to highlight text on web pages and summarize them via a tooltip. However, the React content for the popout and the tooltip are not loading at the moment, likely due to a Webpack issue.

### Frontend
To see the frontend content, open localhost:3000 in your browser. The application shows a list of stored highlights, and you can delete them. Click on the highlights to see the stored summary data displayed alongside the url of the page it was taken from.

### Backend
To test the backend for summary retrieval from the OpenAI API, use Postman to make a POST request to: 'http://localhost:3000/api/summary' with a JSON object containing two properties: a url (string) and a highlightedText (string) property. You will receive a JSON object containing the saved data. 

To GET all highlights and summaries, make a GET request to: 'http://localhost:3000/api/highlights'. You will see all stored highlights and their corresponding summaries from the OpenAI API.

To delete a highlight object, make a DELETE request to 'http://localhost:3000/highlight/:_id' with the params containing the id string stored by mongoDB. 

Note: if you ran npm start in the backend directory, you may need to make these requests to localhost:3001.

## License

[MIT](https://choosealicense.com/licenses/mit/)
