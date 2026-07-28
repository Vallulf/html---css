require("dotenv").config();
const axios = require("axios");

async function listarClientes() {
    try {
        const response = await axios.get(
            "https://api-sandbox.asaas.com/v3/customers",
            {
                headers: {
                    access_token: process.env.ASAAS_API_KEY
                }
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

listarClientes();