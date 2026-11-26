# TaskFlow – Operação Deploy

Aplicação web simples para organizar tarefas, feita para o projeto prático "Operação Deploy" da disciplina ES46B – Gerência de Configuração e Manutenção de Software (UTFPR).

Aluno: Daniel Yuiti Tagame – RA 2211084

## Funcionalidades
1. Adicionar tarefa (com validação do título).
2. 2. Concluir tarefa.
   3. 3. Ver o progresso da lista (% de tarefas concluídas).
     
      4. ## Como executar
      5. - Abrir index.html no navegador.
         - - Testes: npm test (Node 18+).
           - - Build: npm run build (gera a pasta dist/).
             - - Pipeline: .github/workflows/ci.yml (testes -> build -> deploy no GitHub Pages).
              
               - ## Histórico
               - O histórico completo de commits, branches e merges do desenvolvimento está no arquivo gestor-tarefas.zip entregue no Moodle (pasta .git) e na pasta evidencias/.
