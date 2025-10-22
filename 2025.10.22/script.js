const newUserForm = document.getElementById("new-user-form");
let users = [];
const newUserDiv = document.getElementById("new-user-div");
const usersDiv = document.getElementById("users-div");


function isValidUser(user){
    const currDate = new Date().getFullYear();
    if(users.some(u => {return u.userName === user.userName})){
        console.error("Username already exists");
        alert("Username already exists");
        return false;
    }
    else if(!user.fullName.includes(" ")){
        console.error("Full name must be a valid name");
        alert("Full name must be a valid name");
        return false;
    }
    else if(user.userName.length < 8){
        console.error("Username must be at least 8 characters");
        alert("Username must be at least 8 characters");
        return false;
    }
    else if(parseInt(user.dateOfBirth.slice(0,5)) < (currDate - 120) ||
            parseInt(user.dateOfBirth.slice(0,5)) > (currDate - 17)){
        console.error(`Date of birth must be between ${currDate - 120} and ${currDate - 17}`);
        alert(`Date of birth must be between ${currDate - 120} and ${currDate - 17}`);
        return false;
    }
    else if(user.placeOfBirth.length < 3){
        console.error("Place of birth must be at least 3 characters");
        alert("Place of birth must be at least 3 characters");
        return false;
    }
    return true;
            
}

function handleFormSubmit(e){
    e.preventDefault();
    const formData = new FormData(newUserForm);
    const newUser = {};
    for(let keyValuePair of formData.entries()){
        newUser[keyValuePair[0]] = keyValuePair[1];
    }
    //formData.entries().forEach(kv => newUser[kv[0]] = kv[1]);
    if(isValidUser(newUser)){
        users.push(newUser)
        console.log(newUser)
        createElementsForUsers
    }
}

newUserForm.addEventListener("submit", (e) => handleFormSubmit(e));

function setDivVisibility(s){
    if(s === "register"){
        newUserDiv.style.display = "block";
        usersDiv.style.display = "none";
    }
    else if(s === "users"){
        newUserDiv.style.display = "none";
        usersDiv.style.display = "block";
    }
    else{
        console.error("bad parameter")
    }
}
setDivVisibility("register")

//Saját
function createElementsForUsers(){
    newUserDiv.innerHTML = `
    <table id="usersTable">    
        <thead>
            <th>Username</th>
            <th>Password</th>
            <th>E-mail</th>
        </thead>
    </table>    
    `;
    newUser.forEach((u) => {
        newUserDiv.innerHTML += `
            <tr>
                <td>${u.fullName}</td>
                <td>${u.userName}</td>
                <td>${u.dateOfBirth}</td>
                <td>${u.placeOfBirth}</td>
            </tr>
        `
    })
}