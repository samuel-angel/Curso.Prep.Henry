// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //forma especial para iterar los objetos y sus, for in es para objetos, for of es para arrays
  var arreglo=[]
  for (var x in objeto){
    arreglo.push([x,objeto[x]]);
  }
/*var key =[]
key=Object.keys(objeto);
for (var i=0;i<key.length;i++){
  arreglo.push([key[i],objeto[key[i]]])
}*/
return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  obj={}
  for(let i=0;i<string.length;i++){
    if (!obj[string.charAt(i)]){
      obj[string.charAt(i)]=1;
    }else{
      obj[string.charAt(i)]=obj[string.charAt(i)]+1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  arraymin=[];
  arraymay=[];
  for(let i=0;i<s.length;i++){
    if (s.charAt(i)===s.charAt(i).toUpperCase()){
      arraymay.push(s.charAt(i));
    }else{
      arraymin.push(s.charAt(i));
    }
  }
  //hacerlo en mas lineas
  var arreglototal=arraymay.concat(arraymin);
  return arreglototal.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 /* var arreglotemp=[];
  var arreglototal=[];
  for(var i=0;i<str.length;i++){
    if(str[i]!==" "){
      //hacer una pila de arreglo
      arreglotemp.unshift(str[i]);
    }else{
      //invertir arreglo si es una cola, si es una pila se deja como esta
     arreglox=arreglototal.concat(arreglotemp);
     arreglototal=arreglox;
     arreglotemp=[];
      arreglototal.push(str[i]);
    }
  }
arreglototal=arreglototal.concat(arreglotemp);
arreglototal.unshift();
  return arreglototal.join("");*/
  //con funcion split
  //var frase =str.split(' ') hasta aqui se generan nuevos arrarys separados por espacio en blanco (' ')
  //var frase =str.split(' ').map(function (elem){return elem.split('')})hasta aqui hemos separado cada palabra en un array y a su vez estos en letras
  //var frase =str.split(' ').map(function (elem){return elem.split('').reverse()})hasta aqui hemos separado cada palabra en un array a su ves estos en letras, pero al reves
  var frase =str.split(' ').map(function (elem){
    return elem.split('').reverse().join('')
  }).join(' ')//nota usamos, join para unir los grupos primero las palabras con ''(nulo o vacio)y luego la otracion (' ')(espacios en blanco)
  
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  /*
  var numstr=numero.toString();
  var medapro=Math.floor((numstr.length)/2);
  var mitadinicial=numstr.slice(0,medapro);
  //no le colocamos el segundo dato a la mitad final porque termina en el ultimo elemento
  var mitadfinal=numstr.slice(numstr.length-medapro);
  var inver=mitadfinal.split('').reverse().join('');
  if(mitadinicial===inver){
    return "Es capicua";}
    else{
    return "No es capicua";
    }
  */
 numero1=numero.toString();
 numero2=numero1.split('').reverse().join('');
 if(numero1===numero2){
   return "Es capicua"
 }else {
   return "No es capicua"
 }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenared=cadena;
  if (cadena.includes('a')){
    cadenared=cadenared.split('a').join('');
  }
  if(cadena.includes('b')){
    cadenared=cadenared.split('b').join('');
  }
  if(cadena.includes('c')){
    cadenared=cadenared.split('c').join('');
  }
  
  return cadenared;
  /* de forma mas larga con for
  var cadena2="";
  for(var i=0;i<cadena.length;i++){
    if(cadena[i]!=='a'&&cadena[i]!=='b'&&cadena[i]!=='c'){
      cadena2=cadena2+cadena[i];
    }
  }
  return cadena2;
  */
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arr1=[]
  arr1=arr.sort(function(a,b){
    return a.length - b.length
  })
  return arr1;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  nuevoarray=[];
  for(let i=0;i<arreglo1.length;i++){
    for(let j=0;j<arreglo2.length;j++){
      if (arreglo1[i]===arreglo2[j]){
        nuevoarray.push(arreglo1[i]);
      }
    }
  }
  return nuevoarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

