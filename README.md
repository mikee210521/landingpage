# Dragon Ball Z Landing Page

## Project Description
This landing page is designed to showcase information from the Dragon Ball Z universe. It leverages Tailwind CSS for styling, HTML for structure, and JavaScript for asynchronous communication with the Dragon Ball Z API.

## Features
- Visually appealing landing page with Tailwind CSS styling.
- Asynchronous fetching of data from the Dragon Ball Z API.
- Dynamic display of character information on the page.

## Technologies Used
- Tailwind CSS
- HTML
- JavaScript

## Setup
1. Clone the repository: `git clone [repository URL]`
2. Open the `index.html` file in your preferred web browser.

## Asynchronous API Integration
The project utilizes asynchronous JavaScript to interact with the Dragon Ball Z API. The relevant code can be found in the `script.js` file.

```javascript
// Example asynchronous API request using fetch
const fetchData = async () => {
    try {
        const response = await fetch('https://dragonball-api.com/api/character/vegeta');
        const data = await response.json();
        // Handle and display data on the page
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to fetch data
fetchData();
