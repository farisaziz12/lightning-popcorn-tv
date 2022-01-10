const { ApolloServer } = require('apollo-server-express');
const responseCachePlugin = require('apollo-server-plugin-response-cache');
const dotenv = require('dotenv');
const express = require('express');
const { typeDefs } = require('./graphql');
const resolvers = require('./resolvers');

dotenv.config();

const startServer = async () => {
    const graphQLServer = new ApolloServer({
    playground: true,
    typeDefs,
    resolvers,
    plugins: [responseCachePlugin],
    });

    await graphQLServer.start();

    const app = express();

    graphQLServer.applyMiddleware({ app });

    app.use('/files', express.static('/tmp/webtorrent/'))


    if (process.env.IP_ADDRESS){
       app.listen(4000, process.env.IP_ADDRESS, () =>{
            console.log(`🚀 Server ready at http://${process.env.IP_ADDRESS}:4000${graphQLServer.graphqlPath}`)
        }
        );
    } else {
        app.listen(4000, () =>{
            console.log(`🚀 Server ready at http://localhost:4000${graphQLServer.graphqlPath}`)
        }
        );
    }

}

startServer();
