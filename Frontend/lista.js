fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById('tabela-produtos');

        data.forEach(produto => {
            tabela.innerHTML += `
                <tr>
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.categoria}</td>
                    <td>R$ ${produto.preco}</td>
                </tr>
            `;
        });
    });