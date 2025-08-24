import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import { ROUTES } from "./configs/routes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.DEMO} element={<Demo />} />
            </Routes>
        </Router>
    );
}

export default App;
