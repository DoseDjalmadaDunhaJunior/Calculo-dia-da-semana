

//Verifica se o ano é bisexto
function bisexto(a) {
    if (a % 4 == 0) {
        return true;
    }
    return false;
}

function diaDaSemana(a) {
    var ano = parseInt(a.substr(6, 4), 10);
    var mes = parseInt(a.substr(3, 2), 10);
    var dia = parseInt(a.substr(0, 2), 10);

    var div1 = Math.trunc((3 * (mes + 1)) / 5);
    var div2 = Math.trunc(ano / 4);
    var div3 = Math.trunc(ano / 100);
    var div4 = Math.trunc(ano / 400);

    var k = dia + (2 * mes) + div1 + ano + div2 - div3 + div4 + 2;
    var resp = k % 7;

    if (bisexto(ano)) {
        //Se entrar aqui o ano é bisexto
        resp++;
    }

    if (resp == 0) {
        console.log("Sabado");
    }
    else if (resp == 1) {
        console.log("Domingo");
    }
    else if (resp == 2) {
        console.log("Segunda");
    }
    else if (resp == 3) {
        console.log("Terça");
    }
    else if (resp == 4) {
        console.log("Quarta");
    }
    else if (resp == 5) {
        console.log("Quinta");
    }
    else if (resp == 6) {
        console.log("Sexta");
    }
    else {
        console.log("Ocorreu algum problema");
    }
    return resp;
}

diaDaSemana("23/05/2022");