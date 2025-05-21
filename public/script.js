async function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  const data = await res.json();

  if (res.ok) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('consulta').style.display = 'block';
  } else {
    document.getElementById('mensagem').innerText = data.erro || 'Login falhou';
  }
}

async function buscarProjetos() {
  const termo = document.getElementById('busca').value;
  const res = await fetch(`/api/projetos?q=${encodeURIComponent(termo)}`);
  const dados = await res.json();

  const container = document.getElementById('resultados');
  container.innerHTML = '';

  if (dados.length === 0) {
    container.innerHTML = '<p>Nenhum projeto encontrado.</p>';
    return;
  }

  dados.forEach(p => {
    const div = document.createElement('div');
    div.className = 'resultado';
    div.innerHTML = `<strong>${p.nome}</strong><br>ID: ${p.id_projeto}<br>${p.descricao}`;
    container.appendChild(div);
  });
}