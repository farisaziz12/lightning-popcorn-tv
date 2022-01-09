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

    const ip = '192.168.1.172'
    app.listen(4000, ip, () =>{
        console.log(`🚀 Server ready at http://localhost:4000${graphQLServer.graphqlPath}`)
    }
    );
}

startServer();
