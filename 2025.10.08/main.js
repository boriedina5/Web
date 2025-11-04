const newUserRefs = {
    username: document.getElementById("new-username-input"),
    password: document.getElementById("new-password-input"),
    email: document.getElementById("new-email-input")
};
const searchInput = document.getElementById("search-input");
const searchResultDiv = document.getElementById("search-result-div");
const usersTable = document.getElementById("users-table");
const binNav = document.getElementById("bin");
let users = []
let bin = []

function addToBin(username){
    bin.push(users.find(u => u.username === username));
    refreshBin();
    deleteUserFromUsers(username);
}

function deleteUserFromUsers(usernameToDelete){
    //users = users.filter((u) => u.username !== usernameToDelete);
    
    users.splice(users.indexOf(
        users.find(
            (u) => u.username === usernameToDelete)
        ), 1
    );
    refreshTable();
}

function restoreUser(username){
    users.push(bin.find((u) => u.username === username));
    bin = bin.filter((b) => b.username !== username);
    refreshBin();
    refreshTable();
}

function refreshTable(){
    usersTable.innerHTML = `
        <thead>
            <th>Username</th>
            <th>Password</th>
            <th>E-mail</th>
        </thead>`;
    users.forEach((u) => {
        usersTable.innerHTML += `
            <tr onclick="addToBin('${u.username}')">
                <td>${u.username}</td>
                <td>${u.password}</td>
                <td>${u.email}</td>
            </tr>
        `
    })
}

function refreshBin(){
    if(binNav){
        binNav.innerHTML = "<h1>KUKA:</h1>";
        bin.forEach((b) => {
            binNav.innerHTML += `
                <p class="bin-name" onclick="restoreUser('${b.username}')">
                    ${b.username}
                </p>
            `
        })
    }
}

function isValidUser(u){
    return (
        u.username.length >= 4 &&
        u.username.length <= 16 &&
        u.password.length >= 8 &&
        u.password.length <= 20 &&
        u.email.length >= 10 &&
        u.email.length <= 20 &&
        !users.some((currUser) => currUser.username === u.username) &&
        !users.some((currUser) => currUser.email === u.email)
    )
}

function addUser(){
    if(newUserRefs.username && newUserRefs.password && newUserRefs.email){
        let newUser = {
            username: newUserRefs.username.value,
            password: newUserRefs.password.value,
            email: newUserRefs.email.value,
        }
        if(isValidUser(newUser)){
            users.push(newUser);
            refreshTable();
            alert("User sikeresen hozzáadva");
            newUserRefs.username.value = "";
            newUserRefs.password.value = "";
            newUserRefs.email.value = "";
        }
        else{
            alert("Valamelyik adat hibás vagy létező username/email")
        }
    }
    else{
        console.error("Valamelyik ref invalid")
    }
}

function search(){
    if(searchInput && searchResultDiv){
        const foundUser = users.find((u) => u.username === searchInput.value);
        let s = "";
        if(foundUser){
            s = `
                <h3>${foundUser.username}</h3>
                <p>${foundUser.password}</p>
                <p>${foundUser.email}</p>
            `
        }
        else{
            s = "<h3>Nincs ilyen felhasználónév</h3>"
        }
        searchResultDiv.innerHTML = s;
    }
}
refreshTable();

//Adjunk hozzá egy html table-t a DOM-hoz.
//Ha új felhasználót adunk hozzá, adja hozzá a table-höz.

//Írjatok törlés gombot minden táblázat sor végére.
//Gombnyomásra törli a recordot a users tömbből



//Csináljunk egy navbar-t az oldal tetjén amiben alapból annyi van: KUKA:
//Ha kitörlök egy elemet, ne törölje csak kerüljön a kukába.
//Ha rákattintok a kukában az elem nevére, állítsa vissza
//OPCIONÁLIS: KUKÁba egy törlés gomb ami minden elemet töröl

