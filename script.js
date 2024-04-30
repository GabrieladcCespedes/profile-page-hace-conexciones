/**Gabriela Céspedes */
console.log("page loaded...");

//busca y selecciona el primer elemento HTML que tiene la clase edit-name y lo almacena en la variable names
let names = document.querySelector('.edit-name');
//esta función edita el nombre del usuario pot uno nuevo que ingrese el usuario
function editName(){
    //muestra un cuadro de diálogo modal al usuario con un mensaje y un campo de entrada para que ingrese datos
    let newName = prompt("Ingrese el nuevo nombre:");
    //
    if (newName !== null && newName !== "") {
        names.textContent = newName;
    }
}

let connectionsR = document.querySelector('.badge1');
let connectionsY = document.querySelector('.badge2');
let contRemove = 2;
let contAdd = 500;

function addConnections() {
    this.removeConnections();
    contAdd++;
    connectionsY.innerText = contAdd+"+";
}

function removeConnections() {
    contRemove--;
    connectionsR.innerText = contRemove;
    let users = document.querySelector('.card-list-item');
    users.remove();
}