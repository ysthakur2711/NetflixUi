import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        {/* Conditional Routing for Home */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />

        {/* Register Route */}
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        {/* Protected Routes */}
        {user && (
          <>
            <Route
              path="/movies"
              element={<Home type="movie" />}
            />
            <Route
              path="/series"
              element={<Home type="series" />}
            />
            <Route
              path="/watch"
              element={<Watch />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
