
import imageHome from '../../assets/bg-page.svg'
import balls from '../../assets/balls.svg'
import './styles.css';

export function Home() {
  return (
    <div>
      <div id='hero'>
      <header>
        <img id='imageHome' src={imageHome} alt="Home" />

        <h1 id='title'>Ambientes <span>únicos</span> para  <br /> você!</h1>
        <p id='paragraph'>
          Nós criamos ambientes  <strong>exclusivos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo, <br /> investimos tempo e <span>dedicação no seu projeto</span>. 
          
          <br/>
          <br/>

          Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância e finesse</strong> para todo <br /> aquele que estiver ali.
        </p>
      </header>
    </div>

    <footer>
        <div id='line'></div>
        <a href="#"> <span>Instagram</span></a>
        <a href="#"> <span>Fale conosco</span></a>
    </footer>

    <img id="img-balls" src={balls} alt="imagem de bolas coloridas" />
    </div>
  )
}
