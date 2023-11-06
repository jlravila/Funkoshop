// SCRIPT PAGINA ITEM 

// CREO UNA VARIABLE QUE LLEVE EL CONTEO DE PRODUCTOS ELEGIDOS

let count = 0;

// CAPTURO LOS BOTONES DE INCREMENTOY DECREMENTO DE HTML

const btnAdd = document.querySelector(".boton-mas");
const btnSubtract = document.querySelector(".boton-menos");

// CAPTURO INPUT DE CANTIDAD

const inputAmount = document.querySelector(".inputCantidad");

// CREO FUNCION DE INCREMENTAR Y DECREMENTAR AL PULSAR ALGUNO DE LOS BOTONES O ESCRIBIR TEXTO EN EL INPUT

btnAdd.onclick = function () {
  if (count >= 99) {
    count = 99;
    updateStatus(count);
  } else {
    count++;
    updateStatus(count);
  }
};

btnSubtract.onclick = function () {
  if (count === 0) {
    count = 0;
    updateStatus(count);
  } else if (count > 100) {
    count = 100;
    updateStatus(count);
  } else {
    count--;
    updateStatus(count);
  }
};

inputAmount.oninput = function () {
  const inputVar = inputAmount.value;
  if (inputVar <= 0) {
    count = 0;
    spanPrice.innerHTML = inputVar * 0;
  } else if (count > 100) {
    count = 100;
    updateStatus(count);
  } else {
    count = inputVar;
    spanPrice.innerHTML = inputVar * priceProduct;
  }
};

// CAPTURO SPAN DEL PRECIO
const spanPrice = document.querySelector(".precio-articulo__span");

const priceProduct = 1799.99; // Dato que va venir de la BBDD
spanPrice.innerHTML = priceProduct * count;

// FUNCION QUE ACTUALIZA LOS DATOS

const updateStatus = function (count) {
  inputAmount.value = count;
  spanPrice.innerHTML = priceProduct * count;
};
