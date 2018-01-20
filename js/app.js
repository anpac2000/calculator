//Declaracion de variables globales
var i = 0;
var botones = document.getElementsByClassName('tecla');
var componentes=[18];
  componentes[0]= "limpia";
  componentes[1]= "signo";
  componentes[2]= "E";
  componentes[3]= "division";
  componentes[4]= "7";
  componentes[5]= "8";
  componentes[6]= "9";
  componentes[7]= "por";
  componentes[8]= "4";
  componentes[9]= "5";
  componentes[10]= "6";
  componentes[11]= "resta";
  componentes[12]= "1";
  componentes[13]= "2";
  componentes[14]= "3";
  componentes[15]= "0";
  componentes[16]= ".";
  componentes[17]= "igual";
  componentes[18]= "suma";

var numero = "0";
var contador = 0;
var operador1 = "0";
var operador2 = "0";
var operando = "";
var punto = 1;


//Declaracion de variables globales

var calculadora = {

  limpia: function (){
    numero = "0";
    contador = 0;
    document.getElementById("display").textContent ="0";
  },

  click_i1: function (i){
    botones[i].style.transform = 'scale(.90)';
  },

  click_i2: function click_i2(i){
    botones[i].style.transform = 'scale(1)';
    if ((contador < 8) || (componentes[i] ==="limpia") || (componentes[i] ==="signo")
      || (componentes[i] ==="division")  || (componentes[i] ==="resta")
       || (componentes[i] ==="suma") || (componentes[i] ==="por") || (componentes[i] ==="igual")) {
    switch (componentes[i]) {
      case "limpia":
        numero = "0";
        contador = 0;
        punto = 1;
        document.getElementById("display").textContent = numero;
        break;
      case "0":
        if (contador > 0){
          numero  = numero + componentes[i];
          contador = contador + 1;
          document.getElementById("display").textContent = numero;
        }
        break;
      case ".":
        if (((punto === 1) && (contador >=  1)) || (numero === "0")){
          contador = contador + 1;
          numero  = numero + componentes[i];
          document.getElementById("display").textContent = numero;
          punto = 0;
        }
        break;
      case "signo":{
        calculadora.signo();
        document.getElementById("display").textContent = numero;
        break;
      }
      case "suma":{
        operador1 = numero;
        operando = "+";
        numero = "0";
        contador = 0;
        punto = 1;
        document.getElementById("display").textContent = numero;
        break;
      }
      case "resta":{
        operador1 = numero;
        operando = "-";
        numero = "0";
        contador = 0;
        punto = 1;
        document.getElementById("display").textContent = numero;
        break;
      }
      case "por":{
        operador1 = numero;
        operando = "*";
        numero = "0";
        contador = 0;
        punto = 1;
        document.getElementById("display").textContent = numero;
        break;
      }

      case "division":{
        operador1 = numero;
        operando = "/";
        numero = "0";
        contador = 0;
        punto = 1;
        document.getElementById("display").textContent = numero;
        break;
      }
      case "igual":{
        operador2 = numero;
        if (operando === "+") {
            numero ="";
            calculadora.suma();
            document.getElementById("display").textContent =numero;
        }
        if (operando === "-") {
            numero ="";
            calculadora.resta();
            document.getElementById("display").textContent =numero;
        }
        if (operando === "*") {
            numero ="";
            calculadora.multiplica();
            numero = numero.substr(0,8);
            document.getElementById("display").textContent =numero;
        }
        if (operando === "/") {
            numero ="";
            calculadora.dividir();
            numero = numero.substr(0,8);
            document.getElementById("display").textContent =numero;
        }
        break;
      }

      default:{
        contador = contador + 1;
        if (contador > 1){
          numero = numero + componentes[i];
          document.getElementById("display").textContent = numero;
        }
        else{
          numero = componentes[i];
          document.getElementById("display").textContent = numero;
        }
        break;
        }
      }
    }
  },

  resta: function (){
    var resultado = 0;
    var oper_1 = parseFloat(operador1);
    var oper_2 = parseFloat(operador2);
    resultado = oper_1 - oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },

  suma: function (){

    var resultado = 0;
    var oper_1 = parseFloat(operador1);
    var oper_2 = parseFloat(operador2);
    resultado = oper_1 + oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
   },

  dividir: function (){
    var resultado = 0;
    var oper_1 = parseFloat(operador1);
    var oper_2 = parseFloat(operador2);
    resultado = oper_1 / oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },

  multiplica: function (){
    var resultado = 0;
    var oper_1 = parseFloat(operador1);
    var oper_2 = parseFloat(operador2);
    resultado = oper_1 * oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },
  signo: function(){
    var resultado = 0;
    var oper_1 = parseFloat(numero);
    resultado = oper_1 * -1;
    numero = resultado.toString();
  },
}

document.getElementById("on").onmousedown = function() {calculadora.click_i1(0)};
document.getElementById("on").onmouseup = function() {calculadora.click_i2(0)};


document.getElementById("sign").onmousedown = function() {calculadora.click_i1(1)};
document.getElementById("sign").onmouseup = function() {calculadora.click_i2(1)};

document.getElementById("raiz").onmousedown = function() {calculadora.click_i1(2)};
document.getElementById("raiz").onmouseup = function() {calculadora.click_i2(2)};

document.getElementById("dividido").onmousedown = function() {calculadora.click_i1(3)};
document.getElementById("dividido").onmouseup = function() {calculadora.click_i2(3)};

document.getElementById("7").onmousedown = function() {calculadora.click_i1(4)};
document.getElementById("7").onmouseup = function() {calculadora.click_i2(4)};

document.getElementById("8").onmousedown = function() {calculadora.click_i1(5)};
document.getElementById("8").onmouseup = function() {calculadora.click_i2(5)};

document.getElementById("9").onmousedown = function() {calculadora.click_i1(6)};
document.getElementById("9").onmouseup = function() {calculadora.click_i2(6)};

document.getElementById("por").onmousedown = function() {calculadora.click_i1(7)};
document.getElementById("por").onmouseup = function() {calculadora.click_i2(7)};

document.getElementById("4").onmousedown = function() {calculadora.click_i1(8)};
document.getElementById("4").onmouseup = function() {calculadora.click_i2(8)};

document.getElementById("5").onmousedown = function() {calculadora.click_i1(9)};
document.getElementById("5").onmouseup = function() {calculadora.click_i2(9)};

document.getElementById("6").onmousedown = function() {calculadora.click_i1(10)};
document.getElementById("6").onmouseup = function() {calculadora.click_i2(10)};

document.getElementById("menos").onmousedown = function() {calculadora.click_i1(11)};
document.getElementById("menos").onmouseup = function() {calculadora.click_i2(11)};

document.getElementById("1").onmousedown = function() {calculadora.click_i1(12)};
document.getElementById("1").onmouseup = function() {calculadora.click_i2(12)};

document.getElementById("2").onmousedown = function() {calculadora.click_i1(13)};
document.getElementById("2").onmouseup = function() {calculadora.click_i2(13)};

document.getElementById("3").onmousedown = function() {calculadora.click_i1(14)};
document.getElementById("3").onmouseup = function() {calculadora.click_i2(14)};

document.getElementById("0").onmousedown = function() {calculadora.click_i1(15)};
document.getElementById("0").onmouseup = function() {calculadora.click_i2(15)};

document.getElementById("punto").onmousedown = function() {calculadora.click_i1(16)};
document.getElementById("punto").onmouseup = function() {calculadora.click_i2(16)};

document.getElementById("igual").onmousedown = function() {calculadora.click_i1(17)};
document.getElementById("igual").onmouseup = function() {calculadora.click_i2(17)};

document.getElementById("mas").onmousedown = function() {calculadora.click_i1(18)};
document.getElementById("mas").onmouseup = function() {calculadora.click_i2(18)};
