let contador = 0

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        contador += 1;
    }
}
console.log(`A quantidade de números divisíveis por 3 entre 1 e 50 é ${contador}.`)