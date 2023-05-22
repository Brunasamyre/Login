import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login } from "../pages/Login/Index"
import { Register } from "../pages/Login/Register/Index"






export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register/>} />
                <Route path="/welcome" exact element={<Welcome/>} />
            </Routes>
        </Router>
    )
}