// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
// import LoginForm from "./components/loginForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/:id" element={<MovieForm />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rentals" element={<Rentals />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
