import { styled } from "styled-components"

const User = ({ name, username, nationality, age }) => {
  return (
    <Wrapper>
       <h4 className="user-name">{name}</h4>
       <hr />
       <div className="info">
        <p><span>username : </span>{username}</p>
        <p><span>nationality : </span>{nationality}</p>
        <p><span>age : </span>{age} years</p>
       </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
    background: var(--gray-50);
    padding: 0 2rem;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-1);
    transition: var(--transition);
    &:hover {
      transform: scale(1.05);
    } 
    .user-name {
      text-align: center;
    }
`
export default User