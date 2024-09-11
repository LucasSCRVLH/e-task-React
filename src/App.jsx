import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles['form-container']}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
         
          <button type="button">
            Cadastrar
          </button>
        </section>
      

        <section className={styles['section-task-list']}>
          <header className={styles['section-task-header']}>
            <div className={styles.info}>
              <strong>Tarefas criadas</strong>
              <span className={styles['count-tasks']}>0</span>
            </div>
            <div className={styles.info}>
              <strong>Concluídas</strong>
              <span className={styles['count-finisheds']}>0</span>
            </div>
          </header>

          <div className={styles['empty-state']}></div>

          <ul className={styles['task-list']}></ul>
        </section>
      
      </main>

      
    </>
  );
}

export default App;