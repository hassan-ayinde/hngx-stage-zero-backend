# Dynamic Profile Endpoint

This project is built with Node.js and Express.js. It provides a dynamic API endpoint that returns your developer profile along with a random cat fact from an external API, [randomcatfact](https://catfact.ninja/fact).

It demonstrates concepts like environment variables, external API consumption, error handling, and API response formatting.

## Features

* Dynamic developer profile JSON response
* Fetch random cat fact from external API
* Handles network errors and timeouts gracefully
* Environment variable configuration using .env
* Ready for deployment on Railway, Render, or Heroku

## Setup Instructions

1.Clone the repository

```bash
git clone https://github.com/hassan-ayinde/hngx-stage-zero-backend.git
cd hngx-stage-zero-backend
```

2.Install dependencies

```bash
npm install
```

3.Create .env file

```ini
PORT=3000
```

4.Run the Server

```bash
npm start
```

## Dependencies

* Express — web framework for building the API
* Axios — for making HTTP requests to the external API
* dotenv — for managing environment variables
* CORS — to enable cross-origin access (optional but useful)

## Testing the API

* You can test using:
* Browser
* cURL
* Postman

### Example

```bash
GET http://localhost:3000/me
```

### Expected Output

```json
{
  "status": "success",
  "user": {
    "email": "hassan.toheeb.ayinde@gmail.com",
    "name": "hassan toheeb",
    "stack": "Node.js/Express"
  },
  "timeStamp": "2025-10-16T19:20:36.332Z",
  "randomCatFact": "Cats sleep 70% of their lives"
}
```
