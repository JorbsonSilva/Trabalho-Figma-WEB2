import React from 'react';
import styles from "./styles.module.css";

function RegisterScreen({ onSwitchToLogin }) {
  return (
    // <--- 1. MOLDURA MÁGICA DE CENTRALIZAÇÃO AQUI (Linha 5)
    <div className={styles.fullScreenCenter}>
      
      {/* 2. O CARD PRINCIPAL FICA DENTRO DA MOLDURA MÁGICA */}
      <div className={styles.cardPrincipal}>
        
        <header className={styles.cardHeader}>
          <div className={styles.logoContainer}>
            <span className={styles.logoC}>C</span>
            <span className={styles.nomeHub}>Caruaru Têxtil Hub</span>
          </div>
          <h2 className={styles.titleRegister}>Cadastre-se</h2>
        </header>
        
        <form className={styles.formContent}>
          <input type="text" placeholder="Nome Completo" className={styles.inputPadrao} />
          <input type="email" placeholder="E-mail" className={styles.inputPadrao} />
          <input type="password" placeholder="Senha" className={styles.inputPadrao} />
          <input type="password" placeholder="Confirmar Senha" className={styles.inputPadrao} />
          
          <button type="submit" className={styles.botaoEntrar} style={{marginTop: '10px'}}>
            Cadastrar
          </button>
        </form>
        
        <button onClick={onSwitchToLogin} className={styles.linkJaRegistrado}>
          Já é registrado? Entrar
        </button>
        
      </div> 
      
    </div>
    // <--- 3. FECHAMENTO DA MOLDURA MÁGICA AQUI (Linha 26)
  );
}

export default RegisterScreen;
