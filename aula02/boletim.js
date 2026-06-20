const aluno = {
    nome: "Yure",
    curso: "Fullstack",
    idade: 33,
    cidade: "João Pessoa",
    notas: [8, 9, 10]
};

const calcularMedia = (notas) => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    }
    let media = soma / notas.length;
    return media
};

const aprovacao = (media) => {
    if (media >= 7) {
        return `Media: ${media}, Aprovado! 🎉`;
    } else {
        return `Media: ${media}, Recuperação! 🎉`;
    }
};

const boletim = (aluno) => {
    console.log(`Aluno: ${aluno.nome}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Média: ${aprovacao(calcularMedia(aluno.notas))}`);
};

boletim(aluno)