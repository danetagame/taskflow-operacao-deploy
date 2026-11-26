// Regras de negócio do Gestor de Tarefas (funções puras, fáceis de testar)

export function adicionarTarefa(lista, titulo) {
  const texto = (titulo || '').trim();
  if (texto.length === 0) {
    throw new Error('O título da tarefa não pode ser vazio.');
  }
  if (texto.length > 100) {
    throw new Error('O título deve ter no máximo 100 caracteres.');
  }
  const id = lista.length === 0 ? 1 : Math.max(...lista.map(t => t.id)) + 1;
  return [...lista, { id, titulo: texto, concluida: false }];
}

export function concluirTarefa(lista, id) {
  if (!lista.some(t => t.id === id)) {
    throw new Error('Tarefa não encontrada.');
  }
  return lista.map(t => (t.id === id ? { ...t, concluida: true } : t));
}

export function calcularProgresso(lista) {
  if (lista.length === 0) return 0;
  const concluidas = lista.filter(t => t.concluida).length;
  return Math.ceil((concluidas / lista.length) * 100);
}
