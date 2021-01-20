import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        getUser: [User]
    }

    type Mutation {
        newUser(
            name: String
            type: String
        ): User!
        updateUserById(id: ID!, name: String, type: String): Boolean
        deleteUserById(id: ID!): Boolean
    }

    type User {
        id: ID!
        name: String!
        type: String!
        createdAt: String
        updatedAt: String
    }
`;