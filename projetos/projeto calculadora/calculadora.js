function insert(num) 
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num;
}

function clean()
 { document.getElementById('resultado').innerHTML = "";

}

function back() 
{
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() 
{
   var resultado = document.getElementById('resultado').innerHTML;

   if (resultado) 
   {
     document.getElementById('resultado').innerHTML = eval(resultado);
   }

   else
   {
    document.getElementById('resultado').innerHTML = "nada..."
   }

}



//apagar a tela 

// var resultadoEmtela = false;

// function inserir(x) {
   
//    if (resultadoEmtela==true) {
      
//       zerar();

//       resultadoEmtela = false;
//    }

//       var y = document.getElementById("resultado").innerHTML;
      
//       document.getElementById("resultado").innerHTML = y + x ;

// }

//       function zerar() {
         
//          document.getElementById("resultado").innerHTML = "";

//       }

//       function deletar() {

//          var del = document.getElementById("resultado").innerHTML = del.substring(0, del.length - 1);

//       }

//       function result() {
         
//          var result = document.getElementById("resultado").innerHTML;

//          document.getElementById("resultado").innerHTML = eval(result);

//          resultadoEmtela = true;

//       }







