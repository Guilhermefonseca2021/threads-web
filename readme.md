<h3> Node init and dependencies </h3>

- npm init -y
- npm install express nodemon mongoose

<h3> Insights </h3>

<h5> Antes de existir Router usavamos como chamada localhost </h5>

app.use(
    express.urlencoded({
        extended: true
    }),
)

<h5> Com a atualizacao ficou: como chamada </h5>

const express = require('express');
const app = express();
