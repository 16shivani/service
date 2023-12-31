const axios = require("axios");

exports.handler = async (event) => {
  try {
    const response = await axios.get("YOUR_API_URL");
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
