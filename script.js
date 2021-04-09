// BLONDE
function pinta1() {
    cantidad1 = document.getElementById("cantidad1").innerHTML - 0.65;
    cantidad1 = cantidad1.toFixed(2);
    document.getElementById("cantidad1").innerHTML = cantidad1
}

document.getElementById("pinta1").onclick = function() {
    pinta1();
}

function litro1() {
    cantidad1 = document.getElementById("cantidad1").innerHTML - 1.15;
    cantidad1 = cantidad1.toFixed(2);
    document.getElementById("cantidad1").innerHTML = cantidad1
}

document.getElementById("litro1").onclick = function() {
    litro1();
}

function dosLitros1() {
    cantidad1 = document.getElementById("cantidad1").innerHTML - 2.15;
    cantidad1 = cantidad1.toFixed(2);
    document.getElementById("cantidad1").innerHTML = cantidad1
}

document.getElementById("2litros1").onclick = function() {
    dosLitros1();
}

function inicializar() {
    if (blonde == "") {
        document.getElementById("blonde").focus();
    } else {
        cantidad1 = document.getElementById("blonde").value;
        document.getElementById("cantidad1").innerHTML = cantidad1
    }
}

document.getElementById("iniciar").onclick = function() {
    inicializar();
}

//AAA
function pinta2() {
    cantidad2 = document.getElementById("cantidad2").innerHTML - 0.65;
    cantidad2 = cantidad2.toFixed(2);
    document.getElementById("cantidad2").innerHTML = cantidad2
}

document.getElementById("pinta2").onclick = function() {
    pinta2();
}

function litro2() {
    cantidad2 = document.getElementById("cantidad2").innerHTML - 1.15;
    cantidad2 = cantidad2.toFixed(2);
    document.getElementById("cantidad2").innerHTML = cantidad2
}

document.getElementById("litro2").onclick = function() {
    litro2();
}

function dosLitros2() {
    cantidad2 = document.getElementById("cantidad2").innerHTML - 2.15;
    cantidad2 = cantidad2.toFixed(2);
    document.getElementById("cantidad2").innerHTML = cantidad2
}

document.getElementById("2litros2").onclick = function() {
    dosLitros2();
}

function inicializar2() {
    if (aaa == "") {
        document.getElementById("aaa").focus();
    } else {
        cantidad2 = document.getElementById("aaa").value;
        document.getElementById("cantidad2").innerHTML = cantidad2
    }
}

document.getElementById("iniciar2").onclick = function() {
    inicializar2();
}

//STOUT
function pinta3() {
    cantidad3 = document.getElementById("cantidad3").innerHTML - 0.65;
    cantidad3 = cantidad3.toFixed(2);
    document.getElementById("cantidad3").innerHTML = cantidad3;
}

document.getElementById("pinta3").onclick = function() {
    pinta3();
}

function litro3() {
    cantidad3 = document.getElementById("cantidad3").innerHTML - 1.15;
    cantidad3 = cantidad3.toFixed(2);
    document.getElementById("cantidad3").innerHTML = cantidad3;
}


document.getElementById("litro3").onclick = function() {
    litro3();
}

function dosLitros3() {
    cantidad3 = document.getElementById("cantidad3").innerHTML - 2.15;
    cantidad3 = cantidad3.toFixed(2);
    document.getElementById("cantidad3").innerHTML = cantidad3;
}

document.getElementById("2litros3").onclick = function() {
    dosLitros3();
}

function inicializar3() {
    if (stout == "") {
        document.getElementById("stout").focus();
    } else {
        cantidad3 = document.getElementById("stout").value;
        document.getElementById("cantidad3").innerHTML = cantidad3
    }
}

document.getElementById("iniciar3").onclick = function() {
    inicializar3();
}

//IPA
function pinta4() {
    cantidad4 = document.getElementById("cantidad4").innerHTML - 0.65;
    cantidad4 = cantidad4.toFixed(2);
    document.getElementById("cantidad4").innerHTML = cantidad4;
}

document.getElementById("pinta4").onclick = function() {
    pinta4();
}

function litro4() {
    cantidad4 = document.getElementById("cantidad4").innerHTML - 1.15;
    cantidad4 = cantidad4.toFixed(2);
    document.getElementById("cantidad4").innerHTML = cantidad4;
}

document.getElementById("litro4").onclick = function() {
    litro4();
}

function dosLitros4() {
    cantidad4 = document.getElementById("cantidad4").innerHTML - 1.15;
    cantidad4 = cantidad4.toFixed(2);
    document.getElementById("cantidad4").innerHTML = cantidad4;
}

document.getElementById("2litros4").onclick = function() {
    dosLitros4();
}

function inicializar4() {
    if (ipa == "") {
        document.getElementById("ipa").focus();
    } else {
        cantidad4 = document.getElementById("ipa").value;
        document.getElementById("cantidad4").innerHTML = cantidad4
    }
}

document.getElementById("iniciar4").onclick = function() {
    inicializar4();
}

//ARANDINO
function pinta5() {
    cantidad5 = document.getElementById("cantidad5").innerHTML - 0.65;
    cantidad5 = cantidad5.toFixed(2);
    document.getElementById("cantidad5").innerHTML = cantidad5;
}

document.getElementById("pinta5").onclick = function() {
    pinta5();
}

function litro5() {
    cantidad5 = document.getElementById("cantidad5").innerHTML - 1.15;
    cantidad5 = cantidad5.toFixed(2);
    document.getElementById("cantidad5").innerHTML = cantidad5;
}

document.getElementById("litro5").onclick = function() {
    litro5();
}

function dosLitros5() {
    cantidad5 = document.getElementById("cantidad5").innerHTML - 2.15;
    cantidad5 = cantidad5.toFixed(2);
    document.getElementById("cantidad5").innerHTML = cantidad5;
}

document.getElementById("2litros5").onclick = function() {
    dosLitros();
}

function inicializar5() {
    if (arandino == "") {
        document.getElementById("arandino").focus();
    } else {
        cantidad5 = document.getElementById("arandino").value;
        document.getElementById("cantidad5").innerHTML = cantidad5
    }
}

document.getElementById("iniciar5").onclick = function() {
    inicializar5();
}