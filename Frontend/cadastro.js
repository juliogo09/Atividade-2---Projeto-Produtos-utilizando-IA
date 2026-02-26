document.getElementById('formProduto').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, categoria, preco })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = "index.html";
    });
});