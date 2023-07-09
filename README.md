# Creating a Mutation in GraphQL

### Introduction

This React application makes a mutaion to data coming from a GraphQL api using the useMutation hook.
To run use the api, cd into the server directory at the root of this repository and run the command `npm run dev`. If you see phrase, "SERVER LISTENING AT: http://localhost:4000/... :)", in your console, you are good to go.

### Create a User

To make a mutation to create a new user, you first need these two imports from Apollo Client, useMutation hook and gql. To do that, you need to run the following command (assumming you have apollo client installed as a dependency in your application):

        import { useMutation, gql } from "@apollo/client"

The mutation you write in the gql helper function depends on the resolver that handles the creation of the new user.

        const CREATE_NEW_USER = gql`
        mutation Mutation($input: createUserInput!) {
            createUser(input: $input) {
                name
                username
                age
                nationality
            }
        }`

In our api, a user is create by passing a custom input `createUserInput` which has all the properties to create a new user like name, username, age .. etc. To create a new user, we first need to pass the query above as an argument of the useQuery hook, which will in turn return an array with which contains a function we can use to create a user.

        const [ createNewUser ] = useMutation(CREATE_NEW_USER)

Then, we can pass an object which the properties needed to create a new user as a variable:

        const newUser = {
            name: "Brian",
            username: "Kush",
            age: 18,
            nationality: "USA"
        }

        createNewUser({variables: {
            input: newUser
        }})
