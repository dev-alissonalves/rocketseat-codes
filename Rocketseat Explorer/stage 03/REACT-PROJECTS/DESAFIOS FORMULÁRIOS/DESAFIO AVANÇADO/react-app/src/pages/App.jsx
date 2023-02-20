import './styles.css'
import logo from '../assets/header-img.svg'
export function App() {
  return (
    <>
      <div id="page">

        <header>

          <h1>avalie a sua mentoria</h1>
          <p>Chegou a hora de avaliar o seu mentor. Bora lá?</p>
          <img src={logo} alt="Imagem da logo no cabeçalho da página." />

        </header>

        <main>
          <div id='header-form'>
            <p>Informações pessoais</p>
          </div>

          <form id='my-form'>

            <fieldset>
              <div className="col-2">

              <div className="input-wrapper">
                <label htmlFor="info-name">Nome</label>
                <input type="text" id='info-name' required/>
              </div>

              <div className="input-wrapper">
                <label htmlFor="info-lastName">Sobrenome</label>
                <input type="text" id='info-lastName' required/>
              </div>

              </div>

              <div className="input-wrapper">
              <label htmlFor="info-email">Email <span>(digite um email válido)</span></label>
              <input type="email" id='info-email' required/>
              </div>
            </fieldset>

            <fieldset>

              <div className="fieldset-wrapper">
                <legend>INFORMAÇÕES DO MENTOR</legend>

                <div id="div-name-mentor" className="input-wrapper">
                  <label htmlFor="name-mentor">Indique quem foi o seu mentor</label>
                  <input type="text" id='name-mentor' required/>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="comment-mentor">Feedback sobre o mentor</label>
                  <textarea id="comment-mentor"></textarea>
                </div>
                
                <div className="checkbox-wrapper">
                  <input type="checkbox"id="info-checkbox" />
                  <label htmlFor="info-checkbox">Todas as minhas dúvidas foram esclarecidas durante a mentoria.</label>
                </div>

              </div>

            </fieldset>

            <fieldset>
              <div className="fieldset-wrapper">
                <legend>AGENDANDO A PRÓXIMA MENTORIA</legend>

                <div className="col-3">

                  <div className="input-wrapper">
                    <label htmlFor="date-event">Data <span>(DD/MM/AAAA)</span></label>
                    <input type="date" id='date-event' required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="time-begin">Das </label>
                    <input type="time" id='time-begin' required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="time-end">Até</label>
                    <input type="time" id='time-end' required/>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </main>

        <footer>
          <input 
          type="submit" 
          value="SALVAR" 
          form='my-form'
          />
        </footer>
      </div>
    </>
  )
}
