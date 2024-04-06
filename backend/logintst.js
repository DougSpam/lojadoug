const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Dougzin080',
    database: 'login'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

// Middleware para interpretar o corpo das requisições como JSON
app.use(bodyParser.json());

app.post('../loginn', (req, res) => {
    const { nome, senha } = req.body;

    const sql = 'SELECT * FROM loja_bel WHERE nome = ? AND senha = ?';

    connection.query(sql, [nome, senha], (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err);
            return res.status(500).send('Erro interno do servidor');
        }

        if (results.length > 0) {
            res.redirect('/dashboard.html');
        } else {
            res.status(401).send('Usuário ou senha incorretos');
        }
    });
});

app.listen(5500, () => {
    console.log('Servidor rodando na porta 5500');
});
