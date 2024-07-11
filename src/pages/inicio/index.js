import Card from "components/Cards";

import Titulo from "components/Titulos";
import Banner from "components/banner";

import videos from "data/db.json"
import styles from "./index.modules.css"
function Inicio() {
   return (
      <>
       

         <Banner img="home" color="#154580" />
         <Titulo>
            <h1>
               Challenge React
            </h1>

            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
         </Titulo>
         <section className={styles.container}>
            {videos.map((video) => {
               return <Card {...video} key={video.id} />

            })}

         </section>


      

      </>

   );


}

export default Inicio;