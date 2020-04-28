const ventana = document.querySelector('#ventana');
ventana.classList.remove('opacidad0');
ventana.classList.add('opacidad1');

function textosLoging_ini() {
    const mails= document.querySelector('#mail');
    mails.classList.add('ventanaActiva');
}

setTimeout(textosLoging_ini,1000);

document.querySelector('#btnnex').onclick = function(){
    const mailUsua=document.querySelector("#mailUsua").value;
    const alertaMail=document.querySelector("#alertaMail");
    const spanmail=document.querySelector("#spanmail");
    const mailValido = funValiMail(mailUsua);
    if(!mailValido){
        alertaMail.innerHTML = '<p style="color:rgb(114, 8, 8);">Escriba una direcci&oacute;n de correo electr&oacute;nico v&aacute;lida</p>';
        alertaMail.style.display="block";
    }else{
        alertaMail.style.display="none";
        spanmail.innerHTML=mailUsua;
        sigPantalla('#mail','#contrasena');
    }
}

function sigPantalla(previo,next){
    const divPrevio=document.querySelector(previo);
    const divNext=document.querySelector(next);
    divPrevio.classList.remove('ventanaRight','ventanaLeft','ventanaActiva');
    divNext.classList.remove('ventanaRight','ventanaLeft','ventanaActiva');

    divPrevio.classList.toggle('ventanaLeft');
    divNext.classList.toggle('ventanaActiva');
}

document.querySelector("#mailUsua").onkeyup = function(){
    const mailUsua=document.querySelector("#mailUsua").value;
    const alertaMail=document.querySelector("#alertaMail");
    const mailValido = funValiMail(mailUsua);

    if(!mailValido){
        alertaMail.innerHTML = '<p style="color:rgb(114, 8, 8);">Escriba una direcci&oacute;n de correo electr&oacute;nico v&aacute;lida</p>';
        alertaMail.style.display="block";
    }else{
        alertaMail.style.display="none";
    }
}

document.querySelector('#btnprev').onclick=function(){
    pantallaPrev('#contrasena','#mail');
}

function pantallaPrev(actual,next){
    const divPrevio=document.querySelector(actual);
    const divNext=document.querySelector(next);
    divPrevio.classList.remove('ventanaRight','ventanaLeft','ventanaActiva');
    divNext.classList.remove('ventanaRight','ventanaLeft','ventanaActiva');

    divPrevio.classList.toggle('ventanaRight');
    divNext.classList.toggle('ventanaActiva');
}

document.querySelector("#btnLoging").onclick=function(){
    const aprobadomailUsua=document.querySelector("#mailUsua").value;
    const verifContrasena=document.querySelector("#passusuario").value;
    const alertacontras=document.querySelector("#alertacontras");
    if(verifContrasena==""){
        alertacontras.innerHTML = '<p style="color:rgb(114, 8, 8);">Introduzca la contrase&ntilde;a</p>';
        alertacontras.style.display="block";
    }else{
        alertacontras.style.display="none";
        alert("Usuario: "+aprobadomailUsua+" "+"Contrasena: "+verifContrasena);
    }
}

//crear una cuenta
document.querySelector("#crearCuenta").onclick=function(e){  //(e) se coloca porque la funcion es un enlace
    e.preventDefault();
    sigPantalla('#mail','#registro');
}

document.querySelector("#btnpreviapantalla").onclick=function(){
    pantallaPrev('#registro','#mail');
}

//funcion registrar usuario
document.querySelector("#btnregistrar").onclick=function(){
    const nombreusuario=document.querySelector("#nombreusuario").value
    const mailnuevousiaruo=document.querySelector("#mailnuevousiaruo").value
    const passnuevousuario=document.querySelector("#passnuevousuario").value
    const alertaregistro=document.querySelector("#alertaregistro");

    if(nombreusuario=='' || mailnuevousiaruo=='' || passnuevousuario==''){
        alertaregistro.innerHTML='<p style="color:rgb(114, 8, 8);">Debe completar todos los campos</p>';
        alertaregistro.style.display="block";
    }else{
        alertaregistro.style.display="none";
        alert("Usuario registrado correctamente");
        pantallaPrev('#registro','#mail');
    }
}

//funcion recuperar contrasena
document.querySelector("#linkRecuperarContras").onclick=function(e){
    e.preventDefault();
    sigPantalla('#contrasena','#recuperar_contranesa');
}

document.querySelector("#btncancelar").onclick=function(){
    pantallaPrev('#recuperar_contranesa','#contrasena');
}

document.querySelector("#btnenviarcorreo").onclick=function(){
    const mailrecuperacion=document.querySelector("#correoenviado").value;
    const alertaenviocorreo=document.querySelector("#alertaenviocorreo");
    const mailValido = funValiMail(mailrecuperacion);

    if(!mailValido){
        alertaenviocorreo.innerHTML='<p style="color:rgb(114, 8, 8);">Debe introducir el correo electr&oacute;nico de recuperaci&oacute;n</p>';
        alertaenviocorreo.style.display="block";
    }else{
        alertaenviocorreo.style.display="none";
        alert("La contraseña ha sido enviada a " +mailrecuperacion+" exitosamente");// la letra ñ es 164
        pantallaPrev('#recuperar_contranesa','#contrasena');
    }
}

document.querySelector("#correoenviado").onkeyup = function(){
    const mailrecuperacion=document.querySelector("#correoenviado").value;
    const alertaenviocorreo=document.querySelector("#alertaenviocorreo");
    const mailValido = funValiMail(mailrecuperacion);

    if(!mailValido){
        alertaenviocorreo.innerHTML='<p style="color:rgb(114, 8, 8);">Debe introducir el correo electr&oacute;nico de recuperaci&oacute;n</p>';
        alertaenviocorreo.style.display="block";
    }else{
        alertaenviocorreo.style.display="none";
    }
}
//Funcion de validacion de email
function funValiMail(email){
    const correo= new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if (correo.test(email)==false){
        return false;
    }else{
        return true;
    }
}

