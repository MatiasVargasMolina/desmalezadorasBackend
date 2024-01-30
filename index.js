const express = require("express");
const bodyParser = require("body-parser");
const FlowApi = require("./es/index");
const config = require("./config.json");
const productoRouter = require('./routes/productRouter');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(productoRouter)
// Conectar a la base de datos
app.post("/apiFlow/create_order", async (req, res) => {
    const optional = {
      rut: "9999999-9",
      otroDato: "otroDato"
    };
    // Prepara el arreglo de datos
    const params = {
      commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
      subject: "Pago de prueba",
      currency: "CLP",
      amount: 5000,
      email: "efuentealba@json.cl",
      paymentMethod: 9,
      urlConfirmation: config.baseURL + "/payment_confirm",
      urlReturn: config.baseURL + "/result",
      ...optional
    };
    // Define el metodo a usar
    const serviceName = "payment/create";

    // Instancia la clase FlowApi
    const flowApi = new FlowApi( {
      apiKey: "61513BFE-55D0-4296-A933-52513LA74209",
      secretKey: "e59c37e95d6aa79ff4e58718c585be38fa24f350",
      apiURL: "https://www.flow.cl/api",
      baseURL: "http://localhost:3000"
    });
    // Ejecuta el servicio
    console.log(flowApi.apiKey)

    let response = await flowApi.send(serviceName, params, "POST");

    //Prepara url para redireccionar el browser del pagador
    redirect = response.url + "?token=" + response.token;
    res.json({
      redirect
    });
});

app.post("/apiFlow/payment_confirm", async (req, res) => {
  try {
    let params = {
      token: req.body.token
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(config);
    let response = await flowApi.send(serviceName, params, "GET");
    //Actualiza los datos en su sistema
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

app.post("/apiFlow/result", async (req, res) => {
  try {
    let params = {
      token: req.body.token
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(config);
    let response = await flowApi.send(serviceName, params, "GET");
    //Actualiza los datos en su sistema
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

app.post("/apiFlow/create_email", async (req, res) => {
  //Prepara los parámetros
  const params = {
    commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
    subject: "pago prueba cobro Email",
    currency: "CLP",
    amount: 2000,
    email: "efuentealba@json.cl",
    paymentMethod: 9,
    urlConfirmation: config.baseURL + "/payment_confirm",
    urlReturn: config.baseURL + "/result",
    forward_days_after: 1,
    forward_times: 2
  };
  const serviceName = "payment/createEmail";
  try {
    const flowApi = new FlowApi(config);

    let response = await flowApi.send(serviceName, params, "POST");

    res.json({
      response
    });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});