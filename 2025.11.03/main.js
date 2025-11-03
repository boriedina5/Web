let showStudentsDiv = document.getElementById("show-students");
let students = []; // minden diák: { name, grades: [{subject, grade}] }

function createElements(name, subject, grade) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("added-student-card");
    showStudentsDiv.appendChild(cardDiv);

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    cardDiv.appendChild(titleDiv);

    let h3 = document.createElement("h3");
    h3.classList.add("h3");
    h3.innerHTML = name;
    titleDiv.appendChild(h3);

    let h5 = document.createElement("h5");
    h5.classList.add("h5");
    h5.innerHTML = "Grades:";
    cardDiv.appendChild(h5);

    let p = document.createElement("p");
    p.classList.add("p");
    p.innerHTML = `${subject} : ${grade}`;
    cardDiv.appendChild(p);
}

function addTheNewStudent() {
    let name = document.getElementById("students-name").value.trim();
    let subject = document.getElementById("subject-name").value.trim();
    let grade = Number(document.getElementById("grades").value);

    if (!name || !subject) {
        alert("Enter the student's name and the subject!");
        return;
    }

    let existing = students.find(s => s.name === name);
    if (existing) {
        alert("Such student already exist!");
        return;
    }

    // új diák hozzáadása
    students.push({
        name: name,
        grades: [{ subject: subject, grade: grade }]
    });

    createElements(name, subject, grade);

    // űrlap kiürítése
    document.getElementById("students-name").value = "";
    document.getElementById("subject-name").value = "";
}

function editStudent() {
    let name = document.getElementById("exist-students-name").value.trim();
    let subject = document.getElementById("edit-subject-name").value.trim();
    let grade = Number(document.getElementById("edit-grades").value);

    if (!name || !subject) {
        alert("Add meg a diák nevét és a tantárgyat!");
        return;
    }

    let student = students.find(s => s.name === name);
    if (!student) {
        alert("Ez a diák nem létezik!");
        return;
    }

    // új jegy hozzáadása
    student.grades.push({ subject, grade });

    // DOM frissítés
    let allH3 = document.getElementsByClassName("h3");
    for (let h3 of allH3) {
        if (h3.innerHTML === name) {
            let p = document.createElement("p");
            p.classList.add("p");
            p.innerHTML = `${subject} : ${grade}`;
            h3.parentElement.parentElement.appendChild(p);
        }
    }

    // mezők törlése
    document.getElementById("exist-students-name").value = "";
    document.getElementById("edit-subject-name").value = "";
}

function calculate() {
    if (students.length === 0) {
        alert("Nincs egyetlen diák sem!");
        return;
    }

    let averages = students.map(s => {
        let sum = s.grades.reduce((a, g) => a + g.grade, 0);
        let avg = sum / s.grades.length;
        return { name: s.name, average: avg };
    });

    let best = averages.reduce((a, b) => a.average > b.average ? a : b);
    let worst = averages.reduce((a, b) => a.average < b.average ? a : b);

    alert(` Best student: ${best.name} (${best.average.toFixed(2)})\n Worst student: ${worst.name} (${worst.average.toFixed(2)})`);
}

//Az átlag számításhoz és a jegyek eltárolásához Ai-t használtam (ilyesmi logikai menetet
// gondoltam ki, de sajnos nem tudtam összerakni)