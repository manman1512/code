import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage(){
  return(
    <div>
        <h1>Xin chao</h1>
    </div>
  )
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
