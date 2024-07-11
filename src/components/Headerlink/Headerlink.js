import { Link } from "react-router-dom"
import styles from "../Headerlink/Headerlink.module.css"

function Headerlink({url,children}) {
    return(
        <Link to={url} className={styles.link}>
            {children}
        
        </Link>
    )
}

export default Headerlink