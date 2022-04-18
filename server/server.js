require("dotenv").config();
const express = require('express')
const db = require('./db/index')
const morgan = require('morgan')
const employeeRoutes = require('./routes/employee.routes')
const theaterRoutes = require('./routes/theater.routes')
const movieRoutes = require('./routes/movie.routes')
const ticketRoutes = require('./routes/ticket.routes')

const app = express();

app.use(express.json())
app.use(morgan("dev"))

app.use('/employees', employeeRoutes);
app.use('/theater', theaterRoutes);
app.use('/movie', movieRoutes);
app.use('/ticket', ticketRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on http://localhost:${port}`);
});