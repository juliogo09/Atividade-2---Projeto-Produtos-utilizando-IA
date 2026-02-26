const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

/* ROTA 1 - LISTAR PRODUTOS */
app.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos_seunome";

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

/* ROTA 2 - CADASTRAR PRODUTO */
app.post('/produtos', (req, res) => {
    const { nome, categoria, preco } = req.body;

    const sql = "INSERT INTO produtos_seunome (nome, categoria, preco) VALUES (?, ?, ?)";

    db.query(sql, [nome, categoria, preco], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: "Produto cadastrado com sucesso!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

const sql = "SELECT * FROM produtos_julio";
sql = "INSERT INTO produtos_julio (nome, categoria, preco) VALUES (?, ?, ?)";