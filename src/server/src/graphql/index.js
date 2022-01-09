const { importSchema } = require("graphql-import");

const typeDefs = importSchema("./src/graphql/schema/schema.graphql");

module.
exports = {
    typeDefs,
}