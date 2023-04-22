const alunos = [
    { nome: 'Maria', nota: 8.5 },
    { nome: 'João', nota: 7.0 },
    { nome: 'Pedro', nota: 9.0 },
    { nome: 'Ana', nota: 6.5 },
    { nome: 'Lucas', nota: 5.5 },
    { nome: 'Bianca', nota: 4.5 },
    { nome: 'Fernanda', nota: 10 },
    { nome: 'Gustavo', nota: 8.0 },
    { nome: 'Henrique', nota: 6.0 },
    { nome: 'Rafaela', nota: 3.5 }
];

const alunosAcimaDaMedia = alunos.filter((notaItem) => {
    return notaItem.nota >= 6;
})

console.log(alunosAcimaDaMedia);