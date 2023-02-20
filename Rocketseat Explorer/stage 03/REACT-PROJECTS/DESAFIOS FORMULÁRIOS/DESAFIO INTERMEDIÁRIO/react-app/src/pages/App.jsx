import './styles.css'

export function App() {
  return (
    <>
      <div className="page">
        
        <header>
          <h1>MENTORIA</h1>
          <p>Preencha o formulário abaixo para agendar a sua mentoria</p>
        </header>

        <main>
          <form id="my-form">
            
            <fieldset>
              <div className="fieldset-wrapper">
                <legend>INFORMAÇÕES PESSOAIS</legend>
                
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

                <div className="input-wrapper">
                  <label htmlFor="info-password">Senha <span>(mínimo de 6 caracteres)</span></label>
                  <input type="password" id='info-password' required minLength={"6"}/>
                </div>
              </div>

            </fieldset>

            <fieldset>
              <div className="fieldset-wrapper">
                <legend>INFORMAÇÕES DO SEU MENTOR</legend>

                <div className="input-wrapper">
                  <label htmlFor="name-mentor">Nome do seu mentor <span>(só o primeiro nome)</span></label>
                  <input type="text" id='name-mentor' required/>
                </div>

              </div>
            </fieldset>
            
            <fieldset>
              <div className="fieldset-wrapper">
                <legend>SEUS HORÁRIOS DISPONÍVEIS</legend>
                <p>PRIMEIRA MENTORIA</p>

                <div className="col-3">
                  <div className="input-wrapper">
                    <label htmlFor="date-event">Data <span>(DD/MM/AAAA)</span></label>
                    <input type="date" id="date-event" required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="time-begin">Das</label>
                    <input type="time" id="time-begin" required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="time-end">Até</label>
                    <input type="time" id="time-end" required/>
                  </div>

                </div>

                <p>SEGUNDA MENTORIA</p>
                <div className="col-3">
                  <div className="input-wrapper">
                    <label htmlFor="second-date-event">Data <span>(DD/MM/AAAA)</span></label>
                    <input type="date" id="second-date-event" required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="second-time-begin">Das</label>
                    <input type="time" id="second-time-begin" required/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="second-time-end">Até</label>
                    <input type="time" id="second-time-end" required/>
                  </div>

                </div>
              </div>
            </fieldset>
          </form>
        </main>

        <footer>
          <input 
            class="button"
            type="submit" 
            value="SALVAR"
            form='my-form'
          />
        </footer>
      </div>
    </>
  )
}
