/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#basic-form").validate({
        rules: {
            txtNombre : {
                required: true,
                minlength: 3
            },
            txtApellido : {
                required: true,
                minlength: 3
            },
            txtTelefono: {
                required: true,
                number: true,
                min: 9
            },
            txtDni: {
                required: true,
                number: true,
                min: 8
            },
            email: {
                required: true,
                email: true
            },

        },
        messages : {
            txtNombre: {
                minlength: "Ingrese mas de 3 caracteres"
            },
            txtNombre: {
                minlength: "Ingrese mas de 3 caracteres"
            },
            txtTelefono: {
                required: "Por favor, Ingrese Celular",
                number: "Por favor, Ingrese un valor numerico",
                min: "Ingrese un valor igual a 9 digitos"
            },
            txtDni: {
                required: "Por favor, Ingrese Dni",
                number: "Por favor, Ingrese un valor numerico",
                min: "Ingrese un valor igual a 8 digitos"
            },
            email: {
                email: "El email deberia ser: abc@domain.tld"
            }
        }
    });
});

