import './style/style.css'
import imagePrincipal from '.././assets/img1.svg'
import balls from '.././assets/img2.svg'

export function Home() {

  return (
    <div className="container">

      <img src= {imagePrincipal}/>

      <h1>Ambientes <span>únicos</span> para você!</h1>

      <p>Nós criamos ambientes <strong>exclusívos e únicos</strong> , com muito bom gosto e profissionalismo, investimos tempo e <span>dedicação no seu projeto.</span>
      </p>
     
      <p>Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância e finesse</strong> para todo aquele que estiver ali.
      </p>

      <footer>
          <a href="#"><span>Instagram</span></a>
          <a href="#"><span>Fale Conosco</span></a>
      </footer>

      <img className='balls' src={balls} alt="" />
    </div>
  )
}
