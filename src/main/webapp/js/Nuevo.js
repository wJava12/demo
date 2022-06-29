let divBody=document.getElementById("divHorario");

let tr="";



document.getElementById('idTecnico').addEventListener('click', function() {

        let tiempo=document.getElementById('horarioTecnico').value.split(":");
        let diaInicio=document.getElementById('diaInicio').value;
        let diaFin=document.getElementById('diaFin').value;

        let fechaHoy=new Date(2022,6,29,tiempo[0],tiempo[1],tiempo[2])
    let hora=fechaHoy.getHours();
        let x=1;
        let y=x+6;
    for (let i = 1; i <5 ; i++) {
        tr+="<tr>";
        for (let j = x; j <y; j++) {
            //$("#hora"+(j)).val(hora+":"+fechaHoy.getMinutes());
            //console.log("x");
                tr+="<td>"+
                    "<input   type='button' className='btn btn-primary' id='horita"+j+"' value='"+hora+':'+fechaHoy.getMinutes()+"'>"+
                "</td>";
        }
        tr+="</tr>";

        x=x+6;
        y=y+6;
        hora+=1;
       // $("#hora7").val((fechaHoy.getHours()+1)+":"+fechaHoy.getMinutes());
    }
    divBody.innerHTML=tr;

});


document.getElementById('marcarTodo').addEventListener('click', function(e) {
    //e.preventDefault();
    //seleccionarTodo();
    checkAll();

});

document.getElementById('desmarcarTodo').addEventListener('click', function(e) {
    //e.preventDefault();
    //seleccionarTodo();
    uncheckAll();

});

function enviarId(){
    document.getElementById('tecnico').valu
}

function checkAll() {
    document.querySelectorAll('#enviar input[type=checkbox]')
        .forEach(function(checkElement) {
            checkElement.checked = true;
        });
}

function uncheckAll() {
    document.querySelectorAll('#enviar input[type=checkbox]')
        .forEach(function(checkElement) {
            checkElement.checked = false;
        });
}


let fecha = new Date();
console.log(fecha)
let anio = fecha.getFullYear();
let dia = fecha.getDate();
let _mes = fecha.getMonth(); //viene con valores de 0 al 11
_mes = _mes + 1; //ahora lo tienes de 1 al 12
if (_mes < 10) //ahora le agregas un 0 para el formato date
{
    var mes = "0" + _mes;
} else {
    var mes = _mes.toString;
}
document.getElementById("inputFecha").min = anio + '-' + mes + '-' + dia;
