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
adicionaritem(item);
console.log(item);//["item 1","item 2","novo item"]


function saudacao(nome=visitante){
    console.log (olá,$[nome]);
    } 
         saudacao();//olá , visitante!
         saudacao("rodrigo");//olá, rodrigo!
    
