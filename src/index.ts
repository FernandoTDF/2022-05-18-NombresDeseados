let tamanoArreglo:number = Number(prompt(`Ingrese la cantidad de nombres a ingresar`));
tamanoArreglo=tamanoArreglo-1;

let arregloUsuario:string[] = new Array(tamanoArreglo);
let indice:number = 0;


for (indice = 0; indice <= tamanoArreglo; indice++){
  alert("Valor de indice: " + indice);
  arregloUsuario[indice] = String(prompt("Ingrese el Nombre a guardar en el arreglo en la posicion " + indice));
  console.log(`El nombre ingresado en la posicion ${indice} es ${arregloUsuario[indice]}`);
}

