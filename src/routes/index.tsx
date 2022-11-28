import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function Routes(): React.ReactElement{
    return (
            <ReactRoutes>
                <Route path="/" element={< Home/>} />
            </ReactRoutes>
    )
}