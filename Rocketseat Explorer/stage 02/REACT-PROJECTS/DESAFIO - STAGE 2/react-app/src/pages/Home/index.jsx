import logo from '../../assets/logo.svg';
import imgPage from '../../assets/img-page.svg'; 
import padlock from '../../assets/padlock.svg';

import './styles.css';

export function Home() {

  return (
    <>

      <div id="page">
        <header>
         
          <img src={logo} alt="Logo do site Data Protected." />
          
          <nav>

            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>

          </nav>

        </header>

        <main>

          <img src={imgPage} alt="Imagem de uma mulher ao lado de um notebook." />
          
          <section>
            <h1>Seus dados estão <span>protegidos</span>?</h1>
            <br />
            <p>
              A informação é fundamental e de <strong>extrema importância</strong> para qualquer <br />
              empresa.

              <br />
              <br />
              <br />

              Aqui vai um <strong>texto</strong> como se fosse uma empresa de <span>segurança da informação</span> <br /> apresentando o seu produto e com o texto todo estilizado.
            </p>
          </section>

        </main>

        <footer>

          <div id='line'></div>
          <p>para mais informações nos siga no instagram <strong><a href="#">@rocketsect</a></strong></p>

        </footer>

        <img id='balls' src={padlock} alt="Imagem de um cadeado no canto inferior esquerdo da tela." />

      </div>

    </>
  )
}
