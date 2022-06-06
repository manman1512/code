import {Signin, Signup} from "./components"; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Todo } from "./components/Todolist";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/todo" element={<Todo />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
