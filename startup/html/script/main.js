var nombre = "Kenia Castro";
var altura = "160";

/*
var concatenacion = nombre + " " + altura;

document.getElementById("datos");
datos.innerHTML = `
 <h1>Soy la caja de datos</h1>
 <h2>Mi nombre es: ${nombre}</h2>
 <h3>Mido: ${altura}</h3>
`;

if(altura >= 160){
    datos.innerHTML += '<h1>Eres una persona de estatura promedio</h1>';
}else{
    datos.innerHTML +=  '<h1>Eres una persona de BAJITA</h1>';
}

for(var i=2000; i<2020; i++){
    datos.innerHTML += '<h2>Estamos en el año: '+i;
}
*/
function MuestaMiNombre(nombre, altura){
    misDatos = `
     <h1>Soy la caja de datos</h1>
     <h2>Mi nombre es: ${nombre}</h2>
     <h3>Mido: ${altura}</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestaMiNombre("Kenia Castro", 160);
}

imprimir();

var nombres = ["Kenia","Rosé","Sofia"];
document.write('<h1>Listado de nombres</h1>')

/*
for(var i = 0; i <= nombre.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/

nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
});