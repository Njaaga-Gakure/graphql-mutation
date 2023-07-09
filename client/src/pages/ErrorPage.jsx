import { styled } from "styled-components"
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
       <Wrapper className="full-page place-items-center">
          <div className="center-container">
            <h4 className="error">Error 404: Page not found :(</h4>
            <Link to="/" className="btn">back home</Link>
          </div>
       </Wrapper>
  )
}
const Wrapper = styled.main`
  .center-container {
    .error {
      color: var(--gray-500);
    }
    text-align: center;
  }
`
export default ErrorPage