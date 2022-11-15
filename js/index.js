const Notas = [];

function calcularNota(alumn, promedio){

    if (promedio >= 7){
        alert(`El estudiante ${alumn} ha promocionado `)
    }else if(promedio >=4){
        alert(`El estudiante ${alumn} tiene la posibilidad de rendir final`)
    }else{
        alert(`El estudiante ${alumn} ha recursado`)
    }
}

    let nombreEstudiante = prompt("Ingrese el nombre del estudiante")
    let nota1 = parseInt(prompt("Ingrese Nota 1"));
    Notas.push(nota1);
    let nota2 = parseInt(prompt("Ingrese Nota 2"))
    Notas.push(nota2);
    let nota3 = parseInt(prompt("Ingrese Nota 3"))
    Notas.push(nota3);
    
console.log(Notas)


const res = Notas.reduce((acumulador, current)=> acumulador + current);
const promedio = res / 3;
console.log(promedio);
calcularNota(nombreEstudiante, promedio);
