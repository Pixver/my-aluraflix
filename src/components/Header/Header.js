import { Link } from "react-router-dom"
import Styles from "./Header.css"
import Logo from "./Logo.png"
import Headerlink from "../Headerlink/Headerlink.js"
function Header() {

    return (

        <header className={Styles.header}>
            <Link to="/">
                <section className={Styles.logoContainer}>
                    <img src={Logo} alt="logo aluraflix" />
                </section>
            </Link>
            <nav>
                <Headerlink url="./">
                    Home
                </Headerlink>
                <Headerlink url="./">
                    Nuevo video
                </Headerlink>

            </nav>
        </header>

    )

}

export default Header 
