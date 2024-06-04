import { Route, Routes } from "react-router-dom";
import Entradas from "../Components/Entradas/Entradas";
import Formulario from "../Components/Formulario/Formulario";
import Individual from "../Components/Entradas/Individual";

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/entradas" element={<Entradas/>}/>
                <Route path="/formulario" element={<Formulario/>}/>
                <Route path="/entrada/:id" element={<Individual/>}/>
            </Routes>
        </div>
     
    )
}

export default Router