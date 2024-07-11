import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"

function Card({ id, capa, titulo, onDelete, onEdit }) {
    return (
        <div className={styles.container}>
           <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <div className={styles.contenedorIconos}> 
                <img 
                    src={borrar} 
                    alt="borrar" 
                    onClick={() => onDelete(id)} 
                    className={styles.icono} 
                />
                <img 
                    src={editar} 
                    alt="editar" 
                    onClick={() => onEdit(id)} 
                    className={styles.icono} 
                />   
            </div>
        </div>
    )
}

export default Card
