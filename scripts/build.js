// Build: copia os arquivos da aplicação para a pasta dist/
import { cpSync, mkdirSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/src', { recursive: true });
cpSync('index.html', 'dist/index.html');
cpSync('app.js', 'dist/app.js');
cpSync('src', 'dist/src', { recursive: true });
console.log('Build concluído: dist/ gerada.');
