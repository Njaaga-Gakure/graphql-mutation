import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateUser, Users, Error } from "./pages";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
