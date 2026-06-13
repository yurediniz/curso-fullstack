const calcularMedia = (n1, n2) => {
    const media = (n1 + n2) / 2;
    if (media >= 7) {
        return `Média ${media}: Aprovado! 🎉`;
    } else {
        return `Média ${media}: Recuperação! 😬`;
    };
}

console.log(calcularMedia(8,9));
console.log(calcularMedia(6,5));