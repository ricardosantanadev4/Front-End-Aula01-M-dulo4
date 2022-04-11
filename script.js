// innerHTML insere o HTML dentro desse id
// se aparecer  TEst na pagina entao ok
// document.getElementById('age').innerHTML = "TEst";

// testa se o java script eta fucionando
//  se exibir no console do navegador e porque o js esta fucionando 
// console.log('TESTE1')

function age() {
    // document.getById() pega pelo id
    // 'date' e o atributo do id que esta no input date
    // value e o valor digitado pelo usuario 
    debugger;
    // pega o valor digitado pelo usuario no input
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('mes').value;
    var y1 = document.getElementById('ano').value;

    // exibe no console os valores digitados nos inputs
    // console.log(d1)
    // console.log(m1)
    // console.log(y1)

    // Date e uma classe padrao do js
    // inicialisando um objeto dessa classe e possivel pegar a data atual
    var date = new Date();
    // Pega o dia atual
    var d2 = date.getDate();
    // o mes atual vai aparecer com um mes a menos, porque o computador conta os indices do array a partir do 0
    // agente conta os meses apartir do 1 por isso achamos que esta errado, mais nao esta. 
    var m2 = date.getMonth();
    // pega o ano atual
    var y2 = date.getFullYear();
    // array quantidade dias de cada mes
    // vai ser usado na base de calculos
    var month = [31,28,31,30,31,30,31,31,30,31,30,31]
    
    // debugger poto de parada para o debugger 
    debugger;

    //  se a data de nascimento for maior que a atual entra nessa condicao
    if(d1 > d2){         
        // soma o total de dias do mes anterior + a quantidade de dias de hoje
        //  usa o resul mais na fre para achar a quantidade de dias 
        d2 = d2 + month[m2 - 1];
        //  tem que retirar menos novamente porque o computador conta a partir do 0
        //  ex se for 3 meses para o computador e 2 meses que vai de 0 1 2
        m2 = m2 - 1;
    }

    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    debugger;
    // encontra a quantidade de dias
    // formula: total de dias do mes anterior + o dia atual - dia de nascimento
    var d = d2 - d1;
    // encontra a quantidade de meses
    //  para o usuario vai aparecer um mes a mesnos porque o computador conta os meses apartir do 0
    var m = m2 - m1;
    // encontra a idade
    var y = y2 - y1;
    
    console.log(d)
    console.log(m)
    console.log(y)

    // innerHTML insere no HTML nesse caso esta inserido a string no HTML
    // pega o valor insere na div do html que contem o id = a age
    document.getElementById('age').innerHTML = "sua idade e: " + y + " anos " + m +"meses e " + d + " dias";
}

function ageChange(){
    var d1 = document.getElementById('date').value;
    console.log(d1)
}