import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import {buildSchema} from 'graphql'
import userRoute from './api/index'

const app = express()
app.use(bodyParser.json())


//database connections
require('./connections/mongodb')
require('./connections/mysql')
require('./connections/elasticSearch')
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
app.use('/user', userRoute)

app.listen(4000)

export default app