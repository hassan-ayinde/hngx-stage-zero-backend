const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const port = process.env.PORT || 3000;
app.use(cors());
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to My Dynamic Profile Endpoint</h1>`);
});

app.get("/me", async (req, res) => {
  try {
    const catApiResponse = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    if (!catApiResponse.data || !catApiResponse.data.fact) {
      throw new Error("something went wrong");
    }
    const randomCatFact = catApiResponse.data.fact;

    const profile = {
      status: "success",
      user: {
        email: "hassan.toheeb.ayinde@gmail.com",
        name: "hassan toheeb",
        stack: "Node.js/Express",
      },
      timeStamp: new Date().toISOString(),
      randomCatFact: randomCatFact,
    };
    res.status(200).json(profile);
  } catch (error) {
    console.log(`Error fetching cat fact: ${error.message}`);
    let statusCode, message;

    if (error.code === "ECONNABORTED") {
      statusCode = 504;
      message = "Cat Facts API request timed out. Please try again later.";
    } else if (error.response) {
      statusCode = error.response.status || 502;
      message = `Cat Facts API returned an error: ${error.response.statusText}`;
    } else if (error.code === "ENOTFOUND") {
      statusCode = 502;
      message = "Unable to reach Cat Facts API. Please try again later.";
    } else {
      statusCode = 500;
      message = "Failed to fetch cat fact";
    }

    res.status(statusCode).json({
      status: "error",
      message,
    });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
