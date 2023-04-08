# Frontdoor FS Technical Challenge - Frontend

This is the frontend portion of the Frontdoor FS Technical Challenge. It is a React-based Chrome extension that uses the OpenAI API to generate summaries of highlighted text on web pages.

## Setup

To get started, clone this repository and navigate to the frontend folder:

git clone https://github.com/chdavis0917/frontdoor-technical-challenge.git
cd frontdoor-technical-challenge/frontend


Next, install the dependencies:

npm install

To run the development server, use:

npm run start

css
Copy code

To build the production version of the app, use:

npm run build

## Features

- Enable/disable highlight and summary generation feature via a Chrome extension popup
- Generate summaries of highlighted text using the OpenAI API
- Display generated summaries in a tooltip when hovering over the highlighted text
- Reusable React components for the popup, highlights list, and the summary tooltip
- State management using React hooks and context API

## Technologies Used

- React
- TypeScript
- Chrome API
- OpenAI API

## Contributors

- Christopher Davis (chdavis0917 on Github)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.