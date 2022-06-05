import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
}

export default App;
