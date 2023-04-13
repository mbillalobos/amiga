let amiga = prompt("¿Queres ser mi amiga? Respondé SI o NO.").toLowerCase();

while (amiga != "si" && amiga != "no") {
    alert("No has ingresado un dato válido");
    amiga = prompt("¿Queres ser mi amiga? Respondé SI o NO.").toLowerCase();
}

while (amiga == "no") {
    alert("¿Estas segura? Creo que has ingresado una opción erronea. Pensalo nuevamente");
    amiga = prompt("¿Queres ser mi amiga? Respondé SI o NO.").toLowerCase();
}

alert("Listo, somos amigos. Un gustazo.")