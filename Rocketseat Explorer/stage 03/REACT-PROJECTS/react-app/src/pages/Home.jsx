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
          <form action="">
            <div id='fieldset-separator'>

              <fieldset>
                <div className="fieldset-wrapper">
                  <legend>Informações do Evento</legend>

                  <div className="input-wrapper">
                    <label htmlFor="title-event">Título do evento <span>(mínimo 8 caracteres)</span></label>
                    <input type={"text"} id="title-event"/>
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor="link-event">Link do evento <span>(comece com https://)</span></label>
                    <input type={"email"} id="link-event"/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="contact">Whatsapp para contato <span>(somente números)</span></label>
                    <input type={"number"} id="contact"/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="comments">Informações  extras</label>
                    <textarea id="comments"></textarea>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="event-category">Categoria</label>
                    <select id="event-category">
                      <option value="default">Selecione uma opção</option>
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
                </div>
              </fieldset>

              <fieldset>
                <div className="fieldset-wrapper">
                    <legend>Dia e hora</legend>
                </div>
              </fieldset>

            </div>

          </form>
        </main>
      </div>
    </>
    )
}
