import React from 'react';
import styles from "./styles.module.css";

function LoginScreen({ onSwitchToRegister }) {
  return (
    // ✨ LINHA 6: Adicionamos a Moldura Mágica de Centralização (fullScreenCenter)
    <div className={styles.fullScreenCenter}>
      
      {/* CORREÇÃO AQUI: Agora usamos styles.cardPrincipal para a classe vir do CSS Module */}
      <div className={styles.cardPrincipal}>
        
        {/* CORREÇÃO AQUI: Usando styles.cardHeader */}
        <header className={styles.cardHeader}> 
          
          {/* CORREÇÃO AQUI: Usando styles.logoContainer */}
          <div className={styles.logoContainer}> 
            <span className={styles.logoC}>C</span> {/* CORREÇÃO AQUI: Usando styles.logoC */}
            <span className={styles.nomeHub}>Caruaru Têxtil Hub</span> {/* CORREÇÃO AQUI: Usando styles.nomeHub */}
          </div>
        </header>
        
        {/* CORREÇÃO AQUI: Usando styles.formContent. Esta classe será usada para organizar os campos em coluna no CSS. */}
        <form className={styles.formContent}> 
          {/* CORREÇÃO AQUI: Usando styles.inputPadrao */}
          <input type="email" placeholder="E-mail" className={styles.inputPadrao} /> 
          {/* CORREÇÃO AQUI: Usando styles.inputPadrao */}
          <input type="password" placeholder="senha" className={styles.inputPadrao} /> 
          
          {/* CORREÇÃO AQUI: Usando styles.botaoEntrar */}
          <button type="submit" className={styles.botaoEntrar}> 
            Entrar
          </button>
        </form>
        
        {/* CORREÇÃO AQUI: Usando styles.linkCriarConta */}
        <button onClick={onSwitchToRegister} className={styles.linkCriarConta}> 
          Criar conta
        </button>
      </div> 
      
    {/* ✨ LINHA 26: Fechamento da Moldura Mágica! */}
    </div>
  );
}
export default LoginScreen;
