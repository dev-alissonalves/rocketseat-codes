import './styles.css';
import logo from '../assets/logo.png'

export function Home() {
  return (
    <>
      <div className="page">

        <header id="header">
            <h1>Crie e compartilhe seu evento.</h1>
            <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
        </header>

        <main>
          <form id='my-form'>
            <div id='fieldset-separator'>

              <fieldset>
                <div className="fieldset-wrapper">
                  <legend>Informações do Evento</legend>

                  <div className="input-wrapper">
                    <label htmlFor="title-event">Título do evento <span>(mínimo 8 caracteres)</span></label>
                    <input type={"text"} id="title-event" required minLength={"8"}/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="link-event">Link do evento <span>(comece com https://)</span></label>
                    <input type={"email"} id="link-event" required/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="contact">Whatsapp para contato <span>(somente números)</span></label>
                    <input type={"number"} id="contact" required/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="comments">Informações  extras</label>
                    <textarea id="comments"></textarea>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="event-category">Categoria</label>
                    <select id="event-category"> 
                      <option value="live">Ao vivo</option>
                      <option value="podcast">Podcast</option>
                      <option value="mentosrhip">Mentoria</option>
                    </select>
                  </div>
                  
                </div>

              </fieldset>

              <fieldset>
                <div className="fieldset-wrapper">
                    <legend>Privacidade</legend>

                    <div className="input-wrapper">
                      <label htmlFor="info-email">E-mail do administrador
                      <span>(digite um email válido)</span></label>
                      <input type={'email'} id="info-email" required/>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="password">Senha de acesso para os participantes
                      <span>(mínimo 8 caracteres)</span></label>
                      <input type={'password'} id="password" required minLength={"8"}/>
                    </div>

                    <div className="checkbox-wrapper">
                      <input type="checkbox" id="event-private" />
                      <label htmlFor="event-private">Evento Privado</label>
                    </div>

                </div>
              </fieldset>

              <fieldset>
                <div className="fieldset-wrapper">
                    <legend>Dia e hora</legend>

                    <div className="col-3">
                      <div className="input-wrapper">
                        <label htmlFor="info-date">Data</label>
                        <input type="date" id="info-date" required/>
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


                </div>
              </fieldset>

            </div>

          </form>
        </main>

        <footer>
          <input 
            class="button" 
            type="submit"
            form='my-form'
            value={"Salvar evento"}  
          />
        </footer>

      </div>
    </>
    )
}
