require("dotenv").config();
const cors = require("cors");
const express = require('express')
const db = require('./db/index')
const morgan = require('morgan')
const employeeRoutes = require('./routes/employee.routes')
const theaterRoutes = require('./routes/theater.routes')
const movieRoutes = require('./routes/movie.routes')
const ticketRoutes = require('./routes/ticket.routes')
const showRoutes = require('./routes/show.routes')
const hallRoutes = require('./routes/hall.routes')
const sellRoutes = require('./routes/sell.routes')
const decideRoutes = require('./routes/decide.routes')

const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cors());

app.use('/employees', employeeRoutes);
app.use('/theater', theaterRoutes);
app.use('/movie', movieRoutes);
app.use('/ticket', ticketRoutes);
app.use('/show', showRoutes);
app.use('/hall', hallRoutes);
app.use('/sell', sellRoutes);
app.use('/decide', decideRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on http://localhost:${port}`);
});