import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { User } from "../components"
import { useEffect } from "react"

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
  `
  
  const UsersPage = () => {
    const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS)
    useEffect(()=>{
     refetch()
    }, [data])
  if(loading) {
    return (
      <main className="full-page place-items-center">
        <h1 className="loading">loading...</h1>
     </main>
    )
   }
  if(error) {
    return (
      <main className="full-page place-items-center">
       <div style={{ textAlign: "center"}}>
        <h5 className="error">something went wrong, try again later :(</h5>
        <Link to="/" className="btn">back home</Link>
       </div>
     </main>
    )
   }
  return (
    <Wrapper>
      <section className="center-container">
        <div className="btn-container">
          <Link to="/" className="btn">back home</Link> 
        </div>
        <div className="user-list">
         {data && data.users.map(user => {
          return <User key={user.id} {...user} />
         })}
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  padding: 5rem 0; 
  .btn-container {
    text-align: center;
  }
  .user-list {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`
export default UsersPage