const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const mongodb = "mongodb+srv://licalcarazaballay2022:AatqcrJyKGiwAKUg@puma.yhexui6.mongodb.net/Puma?retryWrites=true&w=majority";
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const productRoutes = require("./routes/product.routes")
const catalogRoutes = require("./routes/catalog.routes")
const authRoutes = require("./routes/auth.routes")

app.use('/api', productRoutes)
app.use('/api', catalogRoutes)
app.use('/auth', authRoutes)

swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "API de la tienda en linea Curso Full Stack juniors. PUMA SPORT",
            version: "0.1.0",
            description:
                "Tienda de indumentaria Puma",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Julieta Alcaraz",
                url: "https://innovare.com.ar",
                email: "lic.alcarazaballay2022@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


