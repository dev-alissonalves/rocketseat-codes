import logo from '../assets/logo-page.svg';
import milk1 from '../assets/sorvete1.svg';
import milk2 from '../assets/sorvete2.svg';
import milk3 from '../assets/sorvete3.svg';
import milk4 from '../assets/sorvete4.svg';
import './styles.css';
export function App() {

  return (
    <>
      <div className='page-mobile'>
        
        <header>

          <img src={logo} alt="Logo da página" />
          <h1>Space cream</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem. 
          </p>

        </header>

        <main>
          <div className="card-group">

            <div className="card">
              <img src={milk1} alt="" />
              <h2>PALETAS</h2>
            </div>

            <div className="card">
              <img src={milk2} alt="" />
              <h2>SHAKES</h2>
            </div>

            <div className="card">
              <img src={milk3} alt="" />
              <h2>MASSAS</h2>
            </div>

            <div className="card">
              <img src={milk4} alt="" />
              <h2>PICOLÉS</h2>
            </div>
          
            <div className="card">
              <img src={milk1} alt="" />
              <h2>PALETAS</h2>
            </div>

            <div className="card">
              <img src={milk4} alt="" />
              <h2>PICOLÉS</h2>
            </div>

          </div>
          <footer>
            <p>fale concosco no instagram <a href="#"><strong>@space_cream</strong></a></p>
          </footer>
        </main>
      </div>
      
    </>
  )
}
