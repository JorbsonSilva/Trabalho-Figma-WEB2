import React from 'react';
import styles from "./styles.module.css";

function LoginScreen({ onSwitchToRegister }) {
  return (
    
    <div className={styles.fullScreenCenter}>
      
      <div className={styles.cardPrincipal}>
        
        <header className={styles.cardHeader}> 
          
          <div className={styles.logoContainer}> 
            <span className={styles.logoC}>C</span> 
            <span className={styles.nomeHub}>Caruaru Têxtil Hub</span> 
          </div>
        </header>
        
       
        <form className={styles.formContent}>          
          <input type="email" placeholder="E-mail" className={styles.inputPadrao} />          
          <input type="password" placeholder="senha" className={styles.inputPadrao} />          
          
          <button type="submit" className={styles.botaoEntrar}> 
            Entrar
          </button>
        </form>
        
        <button onClick={onSwitchToRegister} className={styles.linkCriarConta}> 
          Criar conta
        </button>
      </div>       
    
    </div>
  );
}
export default LoginScreen;
