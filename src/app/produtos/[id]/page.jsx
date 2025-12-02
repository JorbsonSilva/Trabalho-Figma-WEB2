"use client";
import { useEffect, useState } from "react";

export default function ProdutoPage({ params }) {
const { id } = params;
const [produto, setProduto] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function fetchProduto() {
try {
// EXEMPLO: ajuste para sua API
const res = await fetch(`/api/produtos/${id}`);
const data = await res.json();
setProduto(data);
} catch (error) {
console.error("Erro ao carregar produto:", error);
} finally {
setLoading(false);
}
}
fetchProduto();
}, [id]);

if (loading) return <p>Carregando...</p>;
if (!produto) return <p>Produto não encontrado.</p>;

return (
<main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
<div style={{ display: "flex", gap: "2rem" }}>
<img
src={produto.image}
alt={produto.nome}
style={{ width: "350px", borderRadius: "8px" }}
/>

```
    <div>
      <h1>{produto.nome}</h1>
      <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
        {produto.descricao}
      </p>
      <strong style={{ fontSize: "1.8rem" }}>
        R$ {produto.preco}
      </strong>

      <button 
        style={{
          marginTop: "1.5rem",
          padding: "1rem 2rem",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Comprar
      </button>
    </div>
  </div>
</main>

);
}
