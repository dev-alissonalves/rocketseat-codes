import './styles.css'

export function App() {
  return (
    <>
      <div className="page">

        <header>
          <p>RECENTES</p>
          <h1>Trabalhos</h1>
        </header>

        <main>

          <div className="cards">
            <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <h2><span>Design</span> Aplicativos</h2>
          </div>

          <div className="cards">
            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80" alt="" />
            <h2><span>Virtual reality</span> Multiverso</h2>
          </div>

          <div className="cards">
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <h2><span>IA</span> Robótica</h2>
          </div>

          <div className="cards">
            <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <h2><span>Programação</span> Tecnologia</h2>
          </div>

        </main>
      </div>
    </>
  )
}