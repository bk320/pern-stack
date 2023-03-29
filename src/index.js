
const express = require('express');
const morgan = require('morgan'); 
const cors = require('cors');       //para enlasar con los de FRONT

const taskRoutes = require('./route/tasks.routes')

const app = express();

app.use(cors());            //Para comunicar ambos servidores 
app.use(morgan('dev'));         //npm run dev
app.use(express.json());        //para que el servidor express reconosca las peticiones 

app.use(taskRoutes)

app.use((err, req, res, next) => {
    return res,json({
        message: err.message
    })
})

app.listen(3000)
console.log('server on port 3000')