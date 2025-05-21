const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

// Conexão com PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Endpoint de busca
app.get('/api/projetos', async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const termo = req.query.q?.toLowerCase() || '';

  try {
    const { rows } = await pool.query(
      `SELECT * FROM projetos 
       WHERE LOWER(nome) LIKE $1 OR LOWER(descricao) LIKE $1 OR CAST(id_projeto AS TEXT) LIKE $1`,
      [`%${termo}%`]
    );
    res.json(rows);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ erro: 'Erro ao buscar projetos' });
  }
});

// Endpoint de login simples
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const { rows } = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, senha]
    );

    if (rows.length === 1) {
      res.json({ sucesso: true });
    } else {
      res.status(401).json({ erro: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
