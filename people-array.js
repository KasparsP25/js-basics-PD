// b) Izveidojiet masīva tipa mainīgo `people`, kurā ir saraksts ar personām. Katras personas dati tiek glabāti objektā ar trim īpašībām: `name`, `age` un 'isStudent' (attiecīgi: vārds, vecums un ir/nav students).
// Izveidojiet divas personas, no kurām viena ir, bet otra nav students.
// c) Ar `for` cikla palīdzību izvadiet katras personas vārdu konsolē sekojošā formātā: "Vārds: Anna".
let people = [
 {name:"Jānis",age:17 ,isStudent:true},
 {name:"Anna",age:32 ,isStudent:false},
];
for (let i = 0;i < people.length;i++);
{
    console.log(people);
}