const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const app = express();

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())


app.use('/api', router);

const PORT = 8080;
app.listen(PORT, () => console.log(`Visit at http://localhost:${PORT}`))