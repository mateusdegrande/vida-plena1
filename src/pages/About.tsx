import React from 'react';

export function About() {
  return (
    // Adicionamos pt-24 para compensar a altura do cabeçalho fixo
    <div className="max-w-2xl mx-auto p-6 pt-24">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
        Sobre Nós
      </h1>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        Este site é fictício e foi elaborado como exercício acadêmico para a disciplina Projeto Integrador do Senac.
      </p>
    </div>
  );
}