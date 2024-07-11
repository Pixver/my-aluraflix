
import Inicio from "pages/inicio"
import Container from "pages/Nuevo video";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="container" element={<Container />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="#" element={<NotFound />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>

    )
}

export default AppRoutes;