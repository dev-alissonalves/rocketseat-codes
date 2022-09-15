import logo from '../../assets/logo.svg';
import whats from '../../assets/whats.svg';
import fitness from '../../assets/fitness-jump.svg';
import balls from '../../assets/balls.svg';
import './styles.css';

export function Home() {

  return (
    <div>
      <div id="page">

        <header>
          <img id='logo' src={logo} alt="Logo do site Treine em Casa" />
          
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Treinar</a></li>
            </ul>
          </nav>
        
        </header>

        <main>
          <section>
            <h1>Treinos <span>exclusivos</span> <br /> para você!</h1>
            <p>
                Nós criamos treinos <strong>exclusivos e únicos para você</strong>. <br />
                Invista no seu corpo e <strong>tenha muito mais performance</strong> e <br /> qualidade de vida.
            </p>
            <button>
              <img src={whats} alt="Imagem que representa a logo do whatsapp." />
              Comece já!
            </button>
          </section>
          
          <img src={fitness} alt="Imagem de uma pessoa do sexo feminino pulando corda em um ambiente esportivo." />
        </main>

        <footer>
          fale conosco no instagram <strong> <a href="#">@treine.me</a></strong>
        </footer>

      </div>
      <img id='balls' src={balls} alt="" />
    </div>
  )
}

