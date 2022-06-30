
let divBody=document.getElementById('bdy');



var count = 0;
$('#exampleModalCenter').on('show.bs.modal', function(){
    let tr="";
    count++;
    //Uso el método .empty() para eliminar todo el contenido dentro de .modal-body

    let tiempo=document.getElementById('horarioTecnico').value.split(":");
    let diaInicio=document.getElementById('diaInicio').value;
    let diaFin=document.getElementById('diaFin').value;

    let fechaHoy=new Date(2022,6,29,tiempo[0],tiempo[1],tiempo[2])
    let hora=fechaHoy.getHours();
    let x=1;
    let y=x+6;
    for (let i = 1; i <11 ; i++) {
        tr+="<tr>";
        for (let j = x; j <y; j++) {
            //$("#hora"+(j)).val(hora+":"+fechaHoy.getMinutes());
            //console.log("x");
            tr+="<td>"+
                "<input type='button' onclick='changeColor(this)' class='btn btn-success' style='font-size: 13px' id='horita"+j+"' value='"+hora+':'+fechaHoy.getMinutes()+"'>"+
                "</td>";
        }
        tr+="</tr>";

        x=x+6;
        y=y+6;
        hora+=1;
        // $("#hora7").val((fechaHoy.getHours()+1)+":"+fechaHoy.getMinutes());
    }

    //console.log("tr");
    //$('#exampleModalCenter .modal-body').empty();
    divBody.innerHTML=tr;
    //$('#exampleModalCenter .modal-body').append(tr);

})
function changeColor(btn) {
    $('.btn').removeClass("btn-success");
    $(btn).addClass("btn-danger");
}
/*document.getElementById('idTecnico').addEventListener('click', function() {

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
                "<input   type='button' class='btn btn-primary' style='font-size: 13px' id='horita"+j+"' value='"+hora+':'+fechaHoy.getMinutes()+"'>"+
                "</td>";

        }
        tr+="</tr>";

        x=x+6;
        y=y+6;
        hora+=1;
        // $("#hora7").val((fechaHoy.getHours()+1)+":"+fechaHoy.getMinutes());
    }
    //divBody.innerHTML=tr;
    //$('#divHorario').empty().append(tr);
});*/



