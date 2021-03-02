require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");

const { router } = require("./routes/routes");
const { options } = require("./utils/swagger");
const swaggerSpecs = swaggerJsdoc(options);
const app = express();

let obj = {}
obj[process.env.USER_KEY] = process.env.PASS_KEY;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(basicAuth({
    users: obj, 
    unauthorizedResponse: getUnauthorizedResponse
}))
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("It's Work");
});

function getUnauthorizedResponse(req) {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}

app.listen(3002, () => console.log(`Server is running on port 3002`));