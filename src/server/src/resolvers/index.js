const moviesResolvers = require('./movies');

module.exports = {
    Query: {
        ...moviesResolvers.queries
    },
}