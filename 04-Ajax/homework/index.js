const lista = document.querySelector("#lista");
const boton = document.querySelector("#boton");
const URL = "http://localhost:5000";

const listFriends = (friends) => {
    lista.innerHTML = "";
    friends.forEach(({id, name}) => {
        const li = document.createElement("li");
        li.innerHTML = `${id} - ${name}`;
        lista.appendChild(li);
    });
};

const showFriends = () => {
    $.get(`${URL}/amigos`, listFriends);
};

boton.addEventListener("click", showFriends);


/*************************************************** */

const input = document.querySelector("#input");
const search = document.querySelector("#search");
const amigo = document.querySelector("#amigo");

const writeName = (friend) => {
    amigo.innerHTML = friend.name;
};

const showFriendName = () => {
    const id = input.value;
    $.get(`${URL}/amigos/${id}`, writeName);
    input.value = "";

};

search.addEventListener("click", showFriendName);

/**************************************************** */

const inputDelete = document.querySelector("#inputDelete");
const deleteButton = document.querySelector("#delete");
const success = document.querySelector("#success");

const deleteFriend = () => {
    const id = inputDelete.value;
    $.ajax({
        url: `${URL}/amigos/${id}`,
        type: "DELETE",
        success: () => {
            inputDelete.value = "";
            alert("Amigo eliminado con exito");
            showFriends();
        },
    });
};

deleteButton.addEventListener("click", deleteFriend);