require('dotenv').config();
const app = require('./app');
require('express-async-errors');
const routes = require('./routes');
const error = require('./middlewares/error.middleware');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', routes.authRoute);
app.use('/user', routes.userRoute);
app.use(error);

app.listen(port, () => console.log('ouvindo porta', port));
