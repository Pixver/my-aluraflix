import style from "./container.modulado.css"

function ContainerGeneral ({children}) {
return (

    <section className={style.containerGeneral}>

        {children}
    </section>
)
}


export default ContainerGeneral