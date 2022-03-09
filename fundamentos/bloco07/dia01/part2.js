// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (n) => {
    let fatorial = n
    for (let index = n-1; index > 0; index -= 1) {
        fatorial *= index;
    }
    console.log(fatorial);
}
fatorial(6);

//Bônus:

const fatorial = (n) => n > 0 ? 1 : n *= --n