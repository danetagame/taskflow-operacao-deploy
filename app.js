import { adicionarTarefa, concluirTarefa, calcularProgresso } from './src/tarefas.js';

let lista = [];
const $ = id => document.getElementById(id);

function render() {
  $('lista').innerHTML = '';
  lista.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.titulo + ' ';
    if (t.concluida) li.className = 'feita';
    else {
      const b = document.createElement('button');
      b.textContent = 'Concluir';
      b.onclick = () => { lista = concluirTarefa(lista, t.id); render(); };
      li.appendChild(b);
    }
    $('lista').appendChild(li);
  });
  $('progresso').textContent = 'Progresso: ' + calcularProgresso(lista) + '%';
}

$('form').onsubmit = e => {
  e.preventDefault();
  try {
    lista = adicionarTarefa(lista, $('titulo').value);
    $('titulo').value = '';
    $('erro').textContent = '';
    render();
  } catch (err) {
    $('erro').textContent = err.message;
  }
};
