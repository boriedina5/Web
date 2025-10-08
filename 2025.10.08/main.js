const newUserRefs = {
    username: document.getElementById("new-username-input"),
    password: document.getElementById("new-password-input"),
    email: document.getElementById("new-email-input"),
}
let users = [];
const searchInput = document.getElementById("searchInput");
const searchResultDiv = document.getElementById("searchResultDiv");
const usersTable = document.getElementById("users-table");

/*function addTable(newUser) {
    if (usersTable) {

        usersTable.innerHTML += `
            <tr>
                <td>${newUser.username}</td>
                <td>${newUser.password}</td>
                <td>${newUser.email}</td>
            </tr>
        `
    }
}*/

function deleteUser(usernameToDelete) {
    //Megoldás 1
    //users = users.filter((u) => username !== usernameToDelete);

    //Megoldás 2
    users.splice(users.indexOf(
        users.find(
            (u) => username !== usernameToDelete)), 1);
    console.log(users);
}
function refreshTable(){
    usersTable.innerHTML =`
        <thead>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
        </thead>
    `;
    users.forEach((u) => {
        usersTable.innerHTML += `
            <tr onclick="deleteUser('${u.username}')">
                <td>${newUser.username}</td>
                <td>${newUser.password}</td>
                <td>${newUser.email}</td>
            </tr>
        `
    })
}

function isValidUser(userObj) {//érdemes egy fv kiszervezni az ellenőrzést
    return (
        userObj.username.length >= 4 &&
        userObj.username.length <= 16 &&
        userObj.password.length >= 8 &&
        userObj.password.length <= 16 &&
        userObj.email.length >= 10 &&
        userObj.password.length <= 20 &&
        !users.some((currentUser) => currentUser.username === userObj.username) &&//akkor kell igazat adjon, ha nem felel meg a feltételeknek
        !users.some((currentEmail) => currentEmail.email === userObj.email)

    )
}

function addUser() {
    if (newUserRefs.username && newUserRefs.password && newUserRefs.email) {//truty és falsy ággal ellenőrizzük megvannak-e az adatok
        //console.log("Minden jó")
        let newUser = {
            username: newUserRefs.username.value,
            password: newUserRefs.password.value,
            email: newUserRefs.email.value,
        }
        if (isValidUser(newUser)) {
            users.push(newUser);
            addTable(newUser)
            alert("User sikeresen hozzáadva")
            newUserRefs.username.value = "";
            newUserRefs.password.value = "";
            newUserRefs.email.value = "";
        }
        else {
            alert("Valamilyen hiba történt")
        }

    }
    else {
        console.error("Valamelyik ref. nem valid") //formázott console.log
    }
}
function search() {
    if (searchInput && searchResultDiv) {
        const foundUser = users.find((u) => u.username === searchInput.value);//feltétel
        let s = "";
        if (foundUser) {
            //siker
            s = `
                <h3>${foundUser.username}</h3>
                <p>${foundUser.password}</p>
                <p>${foundUser.email}</p>
            `
        }
        else {
            //nem sikeres
            s = "<h3>Nincs ilyen felhasználó</h3>"
        }
        searchResultDiv.innerHTML = s;
    }
}
refreshTable();
