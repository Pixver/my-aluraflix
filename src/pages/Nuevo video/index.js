import style from "./container.modulado.css"
import CampoTexto from "./Campotexto/CampoTexto"
const NuevoVideo = () => {

    const manejarSuvida = (evento) => {
        evento.preventDefault()
        console.log("manejar subida", evento)
    }
    return <section className={style.nuevovideo}>
        <form onSubmit={manejarSuvida}>
            <h1>Nuevo Video</h1>
            <p> Complete el formulario para crear una nueva tarjeta de video </p>
            <CampoTexto titulo="Titulo" placeholder="Ingresa el titulo" />
           
            <CampoTexto titulo="Imange" placeholder="El enlace es obligatorio" />
            <CampoTexto titulo="video" placeholder="Ingrese enlace del video" />
           
        </form>


    </section>

}


export default NuevoVideo