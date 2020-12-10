function conversion(Temperature){

    return (9*Temperature + (32*5))/5
}

let Temperature = prompt("entré la valeur a convertir")
alert(conversion(Temperature))