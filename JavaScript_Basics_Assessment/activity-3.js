let studentNames = ['Tom', 'Nate', 'Rachel'];
for (let i = 0; i < 3; i++) {
    studentNames.push(prompt("enter new name"));
}

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}
