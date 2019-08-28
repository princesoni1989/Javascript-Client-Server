import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import {buildSchema} from 'graphql'
import apiRoutes from './admin'
import apiClientRoutes from './client'
import models from './connections/mysql'

const app = express()
app.use(bodyParser.json())
app.use(cors())


//database connections
require('./connections/mongodb')

//Elastic search connection
//require('./connections/elasticSearch')

app.use('/api/admin/', apiRoutes)
app.use('/api/client', apiClientRoutes)

models.sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log("Server running on port 4000")
    })
})


export default app