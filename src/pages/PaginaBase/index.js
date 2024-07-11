import Header from "components/Header/Header"
import ContainerGeneral from "components/container.general"
import Footer from "components/footer/Footer"
import { Outlet } from "react-router-dom"
function PaginaBase (){

    return(

        <main>
<Header/>
<ContainerGeneral>
    <Outlet/>
</ContainerGeneral>
<Footer />

        </main>
    )
}

export default PaginaBase