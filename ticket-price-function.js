// //b) Šajā failā ir jāiekopē 3.uzdevuma risinājums un tas jāpilnveido ar funkcijas palīdzību.
// Izveidojiet funkciju `printTicketPrice`, kura satur 3.uzd. if..else loģiku cenas izprintēšanai, bet atkarībā no diviem parametriem - `visitorAge` un `isStudent`.
// Izsauciet funkciju divas reizes ar sekojošiem argumentiem - 12, true un 35, false.
// Respektīvi, ir jāizprintē biļetes cena 12 gadīgam studentam un 35 gadīgai personai, kura nav students.

let visitorAge = 12;
let isStudent = true;
if (visitorAge < 6){
    console.log("ieeja ir bez maksas");
} else if (isStudent = true) {
    console.log("biļetes cena ir 5 EUR");
} else {
    console.log("biļetes cena ir 10 EUR.");
}
function peronCheck(visitorAge, isStudent) {
  return visitorAge, isStudent;
}

printTicketPrice(personCheck(12, true));
//Es padodos, neizprotu functions tik labi