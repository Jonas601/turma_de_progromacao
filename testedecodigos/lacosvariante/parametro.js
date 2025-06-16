function dobrar(num){
    valor = num * 2;
    return valor;
}
let valor = 20;
console.log(dobrar(valor));
//console.log(valor);

function adicionaritem(lista){
    lista.push("novo item");
}
let itens =["item 1","item 2" ];
adicionaritem(itens);
console.log(itens);

function saudacao(nome=visitante){
    console.log (`olá,${nome}`);
    } 
         saudacao();
         saudacao("rodrigo");

function soma(a,b){
    return a + b;
} 
let resultado = soma(5,3);
console.log(resultado);