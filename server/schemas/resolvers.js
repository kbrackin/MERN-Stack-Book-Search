const { User } = require("../models")

const resolvers = {
    Query: {
        me: async () => {
            return User.find({}).select("-password")
        }
    },
    Mutation: {
        login: async () => {

        },
        addUser: async () => {

        },
        saveBook: async () => {

        },
        removeBook: async () => {

        }
    },
    User: {
        _id: async () => {

        },
        username: async () => {

        },
        email: {},
        bookCount: {},
        savedBooks: {},
    },
    Book: {
        bookId: {},
        authors: {},
        description: {},
        title: {},
        image: {},
        link: {},
    },
    Auth: {
        token: {},
        user: {},
    }
}