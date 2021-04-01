/*=======================================
    OPERADORES DE COMPARAÇÃO 

    >       MAIOR
    <       MENOR
    >=      MAIOR IGUAL A
    <=      MENOR IGUAL A
    ==      IGUAL A
    ===     IGUAL E DO MESMO TIPO
    !=      DIFERENTE DE
    !==     DIFERENTE, INCLUSIVE DO MESMO TIPO

=========================================*/


// DESAFIO 1 
//const idade = 17
// VERIFICAR SE A PESSOA É MAIOR QUE 18 ANOS
// se sim, deixar entrar, se não blouquear a entrada
//if(idade >= 18){
//    console.log('Deixar entrar')
//}else{
//    console.log('Bloquear a entrada')
//}
//Se a pessoa tiver 17 anos
//avisar pra voltar quando tiver 18 anos
//if(idade === 17){
//    console.log('Volte quando tiver 18')
//}


/*=======================================
    OPERAADORES DE LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira.
        para que a condição final seja verdadeira.
    !   "NÃO" Nega a condição

=========================================*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 > 6)) // true
