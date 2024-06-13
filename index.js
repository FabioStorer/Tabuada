let numero = 0
let resultado = 0

console.log('Digite qual tabuada deseja ver.');

process.stdin.on('data', function (data) {
    numero = Number(data.toString().trim());
    console.log('Essa é a tabuada do ', numero, '.');

    for (let i = 0; i <= 10; i++) {
        resultado = numero * i;
        console.log(numero, ' * ', i, '= ', resultado);
    }
    process.exit();
})