import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import ReadNews from "./pages/ReadNews";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<Navigate replace to={"/home"} />}
                />

                <Route path="/home" exact element={<Home />} />
                <Route path="/prediction" exact element={<Prediction />} />
                <Route path="/read-news" exact element={<ReadNews />} />
            </Routes>
        </>
    );
}

export default App;
