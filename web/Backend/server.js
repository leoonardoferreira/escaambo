const express = require('express')
const app = express()
const cors = require ('cors')
const path = require ('path')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

const usuariosRoutes = require('./routes/usuariosRoutes')
app.use('/api/usuarios', usuariosRoutes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')))

app.use( (error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json( {
            status: "error",
            message: error.message
        });
    }
    
    console.error(error)

    return response.status(500).json( {
        status: "error",
        message: "Internal server errror"
    })
});

const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Server Running on port ${port}`)
})