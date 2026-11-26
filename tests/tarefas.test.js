import { test } from 'node:test';
import assert from 'node:assert/strict';
import { adicionarTarefa, concluirTarefa, calcularProgresso } from '../src/tarefas.js';

test('adiciona uma tarefa com id sequencial e não concluída', () => {
  let lista = adicionarTarefa([], 'Estudar GCS');
  lista = adicionarTarefa(lista, 'Fazer pipeline');
  assert.equal(lista.length, 2);
  assert.equal(lista[1].id, 2);
  assert.equal(lista[1].concluida, false);
});

test('não aceita tarefa com título vazio', () => {
  assert.throws(() => adicionarTarefa([], '   '), /não pode ser vazio/);
});

test('conclui somente a tarefa escolhida', () => {
  let lista = adicionarTarefa([], 'A');
  lista = adicionarTarefa(lista, 'B');
  lista = concluirTarefa(lista, 2);
  assert.equal(lista[0].concluida, false);
  assert.equal(lista[1].concluida, true);
});

test('calcula o progresso em porcentagem', () => {
  let lista = adicionarTarefa([], 'A');
  lista = adicionarTarefa(lista, 'B');
  lista = adicionarTarefa(lista, 'C');
  lista = concluirTarefa(lista, 1);
  assert.equal(calcularProgresso(lista), 33);
  assert.equal(calcularProgresso([]), 0);
});
