let botonSuma=document.getElementById("cantidad-controles__sumar");
let botonResta=document.getElementById("cantidad-controles__restar");

// botones Baby yoda //

   function addItem() {
    valor = document.getElementById("input-cant");
    valor.value ++;
     calcularPrecio();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    } 
    

   function removeItem() {
    valor = document.getElementById("input-cant");
    if (valor.value > 1)valor.value --;
     calcularPrecio();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    }

    function calcularPrecio(){
        valor = document.getElementById("input-cant").value * 1799.99; //1799.99 valor a tomar de la base
        document.getElementById("input-valor").value=valor;
    }

    function calcularSubtotal(){
       var num1= (isNaN( document.getElementById("input-valor").value)) ? "0" : document.getElementById("input-valor").value ;
       var num2= (isNaN( document.getElementById("input-valores").value)) ? "0" : document.getElementById("input-valores").value ;
       var subtotales=  parseFloat (num1) + parseFloat  (num2);
       document.getElementById("subtotal").value= subtotales;
    }

    function calcularTotal(){
        document.getElementById("precio-total").value = parseFloat(document.getElementById("subtotal").value) 
        + parseFloat (document.getElementById("envio").value);
    }


    function cantidadElementos(){
        cantElemts = parseInt (document.getElementById("input-cant").value) + parseInt (document.getElementById("input-cantidad").value);
        document.getElementById("cant-elementos").value = cantElemts;
    }

    
//------- BOTONES DE PIDGEOTO--------//

function addItem2() {
    valor = document.getElementById("input-cantidad");
    valor.value ++;
     calcularPrecio2();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    } 

function removeItem2() {
    valor = document.getElementById("input-cantidad");
    if (valor.value > 1)valor.value --;
     calcularPrecio2();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    }  
    
    function calcularPrecio2(){
        valor = document.getElementById("input-cantidad").value * 1799.99;
        document.getElementById("input-valores").value=valor;
    }  
    

 //  asignacion a botones de baby yoda //
    
    botonSuma.onclick=addItem;
    botonResta.onclick=removeItem;