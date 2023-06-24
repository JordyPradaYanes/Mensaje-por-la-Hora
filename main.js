// let userAge;
// let birtYear;
// userAge = prompt('Ingresa tu edad porfavor');
// birtYear = 2022 - userAge;
// document.write(`tu tienes ${userAge} años de edad y naciste en el año ${birtYear}`);

//el sistema saluda deacuerdo a las siguientes condiciones
//hora 6-12 buenos dias
//hora 13-18 buenas tardes
//resto de horas buenas noches

let hora= prompt("⏰Ingresa la hora por favor");
if(hora>=6 && hora<=12){
    document.write("<h1>🙌Buenos dias!</h1>");
}if(hora>=13 && hora<=18){
    document.write("<h1>👋Buenas tardes!</h1>");
}else{
    document.write("<h1>🥱Buenas noches!</h1>");
}