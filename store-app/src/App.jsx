import Home from "./components/routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/routes/signin/signin.component";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop Component</h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
