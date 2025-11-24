import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerPrincipal}>
            
            <div className={styles.footerContent}>                
               
                <div className="footer-col-info">
                    {/* Aqui vai o Logo e o texto descritivo */}
                    {/* Ícones de redes sociais */}
                </div>

                
                <div className="footer-col-links">
                    <h3>Links Rápidos</h3>
                    {/* Lista de links */}
                </div>

                
                <div className="footer-col-categorias">
                    <h3>Categorias</h3>
                    {/* Lista de categorias */}
                </div>

                
                <div className="footer-col-contato">
                    <h3>Contato</h3>
                    {/* Newsletter e informações de telefone */}
                </div>

            </div>
            
            
            <div className="footer-copy">
                <p>&copy; 2025 Caruaru Têxtil Hub.</p>
            </div>
        </footer>
    );
}