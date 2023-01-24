var pets = [];

function addPet() {
    event.preventDefault();
    let pet = {
        "petName": document.getElementById("fname").value,
        "petBreed": document.getElementById("fbreed").value,
        "PetOwner": document.getElementById("fowner").value,
        "petPhone": document.getElementById("fphone").value,
    }
    document.getElementById("fname").value = "";
    document.getElementById("fbreed").value = "";
    document.getElementById("fowner").value = "";
    document.getElementById("fphone").value = "";

    pets.push(pet);

    renderTable();
}
    function renderTable(){
        let table = document.getElementById("dataTable");
        table.innerHTML = 
            `<tr>
            <th>ID</th>
            <th>Nome do Pet</th>
            <th>Raça</th>
            <th> Nome do Dono </th>
            <th>telefone</th>
            <th>Remover</th>
            </tr>`

            for(let i =0; i < pets.length; i++ )
            {
                table.innerHTML= table.innerHTML + ` 
                <td> ${ i } </td>
                <td> ${pets[i].petName} </td>
                <td> ${pets[i].petBreed} </td>
                <td> ${pets[i].PetOwner} </td>
                <td> ${pets[i].petPhone} </td>
                <td> <img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" width="25px" height="25px" onclick="removePet(${i})"> </td>`
            }

            function removePet(index){
                pets.splice(index,1);
                renderTable();
            }

    }