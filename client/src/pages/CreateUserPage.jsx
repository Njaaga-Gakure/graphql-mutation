import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components"
// imports
import { useMutation, gql } from "@apollo/client";


// write query 
const CREATE_NEW_USER = gql`
  mutation Mutation($input: createUserInput!) {
    createUser(input: $input) {
      name
    }
}`
const CreateUserPage = () => {

  // pass your query as an argument
  // useMutation return an array which
  // the first element is a function 
  const [ createNewUser ] = useMutation(CREATE_NEW_USER)
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    age: 18,
    nationality: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(name, value)
    setNewUser(prevState => {
      return { ...prevState, [name]: name === "nationality" ?
               value.toUpperCase() : name === "age" ? 
               Number(value) : value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // the function takes an object as an argument 
    // with a variables property
    createNewUser({ variables: { input: newUser }})
    setNewUser({
      name: "",
      username: "",
      age: 18,
      nationality: ""
    })
  }
  return (
    <Wrapper className="full-page"> 
      <div className="center-container">
        <h2 className="title">GraphQL (Mutation)</h2>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-control">
              <label className="text_small" htmlFor="name">name</label>
              <input type="text" name="name" value={newUser.name} onChange={handleChange} id="name"  />
            </div>
            <div className="form-control">
              <label className="text_small" htmlFor="username">username</label>
              <input type="text" name="username"value={newUser.username} onChange={handleChange}  id="username" />
            </div>
            <div className="form-control">
              <label className="text_small" htmlFor="age">age</label>
              <input type="number" min="0" name="age" value={newUser.age} onChange={handleChange} id="age" />
            </div>
            <div className="form-control">
              <label className="text_small" htmlFor="nationality">nationality</label>
              <input type="text" name="nationality" value={newUser.nationality} onChange={handleChange} id="nationality" />
            </div>
            <button className="btn btn-block">create user</button>
        </form>
        <div className="btn-container">
          <Link to="/users" className="btn">
            view users
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  background-color: var(--gray-500);
  background-image: url("/bg3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem 0;
  .title {
    text-align: center;
    color: var(--gray-50);
    letter-spacing: var(--letter-spacing);
  }
  .form {
    max-width: 500px;
    margin: 2rem auto;
    background: rgba(25, 19, 8, 0.5);
    padding: 2rem;
    border-radius: var(--border-radius-2);
  }
  .form-control {
    margin-bottom: .5rem;
    label {
      color: var(--gray-50);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
    }
    input {
      display: block;
      width: 100%;
      background: rgba(25, 19, 8, 0.7);
      border-color: transparent;
      border-radius: var(--border-radius-1);
      padding: 0.5rem 1rem;
      color: white;
      transition: var(--transition);
      &:hover {
        transform: scale(1.02);
      }
    }
  }
  .btn {
    margin-top: 2rem;
  }
  .btn-container {
    text-align: center;
    .btn {
      background: #ffffff;
      color: var(--primary-100);
      &:hover {
        background: var(--gray-200);
      }
    }
  }
`
export default CreateUserPage