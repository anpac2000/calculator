//Declaracion de variables globales
var i = 0;
var botones = document.getElementsByClassName('tecla');
var componentes=[18];
  componentes[0]= "00";
  componentes[1]= "-";
  componentes[2]= "raiz";
  componentes[3]= "division";
  componentes[4]= "7";
  componentes[5]= "8";
  componentes[6]= "9";
  componentes[7]= "por";
  componentes[8]= "4";
  componentes[9]= "5";
  componentes[10]= "6";
  componentes[11]= "menos";
  componentes[12]= "1";
  componentes[13]= "2";
  componentes[14]= "3";
  componentes[15]= "0";
  componentes[16]= ".";
  componentes[17]= "=";
  componentes[18]= "mas";

var numero = "0";
var contador = 0;
var operador1 = "0";
var operador2 = "0";
var operando = "";


//Declaracion de variables globales

var calculadora = {

  limpia: function (){
    numero = "0";
    contador = 0;
    document.getElementById("display").textContent ="0";
  },

  cambio: function (i){
    botones[i].style.transform = 'scale(.96)';
  },

  cambio2: function cambio2(i){
    botones[i].style.transform = 'scale(1)';
    if ( (componentes[i] !== "0") || (contador > 0) ) {
      contador = contador + 1;
    }else{
      numero = "0";
      contador = 0;
    }

    if (contador == 1){
        numero = componentes[i];
    }
    else
      {
      if ( (contador <= 8) && (contador !== 0) )
        {
          if (i !== 1)
          {
            switch (componentes[i]) {
              case "menos":
                operando = "-";
                break;
              case "mas":
                operando = "+";
                break;
              case "division":
                  operando = "/";
                  break;
              case "por":
                 operando = "*";
                 break;
              case "=":
                break;
              default:
                numero = numero + componentes[i];
            }
          }
          else
          {
            if (contador !== 0)
            {
              switch (componentes[i]) {
                case "menos":
                  operando = "-";
                  break;
                  case "mas":
                  operando = "+";
                  break;
                case "division":
                    operando = "/";
                    break;
                case "por":
                   operando = "*";
                   break;
                case "=":
                  break;
                default:
                  numero = componentes[i] + numero;
              }
            }
          }
        }
      }

    switch (componentes[i]) {
      case "mas":
        operador1 = numero;
        numero = "";
        contador = 0;
        document.getElementById("display").textContent = "0";
      break;
      case "menos":
        operador1 = numero;
        numero = "";
        contador = 0;
        document.getElementById("display").textContent = "0";
        break;
      case "division":
        operador1 = numero;
        numero = "";
        contador = 0;
        document.getElementById("display").textContent = "0";
        break;
      case "por":
        operador1 = numero;
        numero = "";
        contador = 0;
        document.getElementById("display").textContent = "0";
        break;
      case "00":
        calculadora.limpia();
        break;
      default:
        document.getElementById("display").textContent =numero;
    }
    switch (componentes[i]) {
      case "=":
        operador2 = numero;
        if (operando == "-"){
          calculadora.resta();
          document.getElementById("display").textContent =numero;
        }

        if (operando == "+"){
          calculadora.suma();
          document.getElementById("display").textContent =numero;
        }

        if (operando == "/"){
          calculadora.dividir();
          document.getElementById("display").textContent =numero;
        }

        if (operando == "*"){
          calculadora.multiplica();
          document.getElementById("display").textContent =numero;
        }
        break;

      default:

    }
  },

  resta: function (){
    var resultado = 0;
    var oper_1 = parseInt(operador1);
    var oper_2 = parseInt(operador2);
    resultado = oper_1 - oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },

  suma: function (){
    var resultado = 0;
    var oper_1 = parseInt(operador1);
    var oper_2 = parseInt(operador2);
    resultado = oper_1 + oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },

  dividir: function (){
    var resultado = 0;
    var oper_1 = parseInt(operador1);
    var oper_2 = parseInt(operador2);
    resultado = oper_1 / oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },

  multiplica: function (){
    var resultado = 0;
    var oper_1 = parseInt(operador1);
    var oper_2 = parseInt(operador2);
    resultado = oper_1 * oper_2;
    operador1 = "0";
    operador2 = "0";
    numero = resultado.toString();
  },
}

document.getElementById("on").onmousedown = function() {calculadora.cambio(0)};
document.getElementById("on").onmouseup = function() {calculadora.cambio2(0)};


document.getElementById("sign").onmousedown = function() {calculadora.cambio(1)};
document.getElementById("sign").onmouseup = function() {calculadora.cambio2(1)};

document.getElementById("raiz").onmousedown = function() {calculadora.cambio(2)};
document.getElementById("raiz").onmouseup = function() {calculadora.cambio2(2)};

document.getElementById("dividido").onmousedown = function() {calculadora.cambio(3)};
document.getElementById("dividido").onmouseup = function() {calculadora.cambio2(3)};

document.getElementById("7").onmousedown = function() {calculadora.cambio(4)};
document.getElementById("7").onmouseup = function() {calculadora.cambio2(4)};

document.getElementById("8").onmousedown = function() {calculadora.cambio(5)};
document.getElementById("8").onmouseup = function() {calculadora.cambio2(5)};

document.getElementById("9").onmousedown = function() {calculadora.cambio(6)};
document.getElementById("9").onmouseup = function() {calculadora.cambio2(6)};

document.getElementById("por").onmousedown = function() {calculadora.cambio(7)};
document.getElementById("por").onmouseup = function() {calculadora.cambio2(7)};

document.getElementById("4").onmousedown = function() {calculadora.cambio(8)};
document.getElementById("4").onmouseup = function() {calculadora.cambio2(8)};

document.getElementById("5").onmousedown = function() {calculadora.cambio(9)};
document.getElementById("5").onmouseup = function() {calculadora.cambio2(9)};

document.getElementById("6").onmousedown = function() {calculadora.cambio(10)};
document.getElementById("6").onmouseup = function() {calculadora.cambio2(10)};

document.getElementById("menos").onmousedown = function() {calculadora.cambio(11)};
document.getElementById("menos").onmouseup = function() {calculadora.cambio2(11)};

document.getElementById("1").onmousedown = function() {calculadora.cambio(12)};
document.getElementById("1").onmouseup = function() {calculadora.cambio2(12)};

document.getElementById("2").onmousedown = function() {calculadora.cambio(13)};
document.getElementById("2").onmouseup = function() {calculadora.cambio2(13)};

document.getElementById("3").onmousedown = function() {calculadora.cambio(14)};
document.getElementById("3").onmouseup = function() {calculadora.cambio2(14)};

document.getElementById("0").onmousedown = function() {calculadora.cambio(15)};
document.getElementById("0").onmouseup = function() {calculadora.cambio2(15)};

document.getElementById("punto").onmousedown = function() {calculadora.cambio(16)};
document.getElementById("punto").onmouseup = function() {calculadora.cambio2(16)};

document.getElementById("igual").onmousedown = function() {calculadora.cambio(17)};
document.getElementById("igual").onmouseup = function() {calculadora.cambio2(17)};

document.getElementById("mas").onmousedown = function() {calculadora.cambio(18)};
document.getElementById("mas").onmouseup = function() {calculadora.cambio2(18)};
