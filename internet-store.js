// Problēmas risinājums.
// Mazs interneta veikals uztur savu preču sarakstu.
// Katra prece tiek attēlota kā objekts ar četrām īpašībām: nosaukums, kategorija, cena un daudzums noliktavā.

// Izveidojiet failu `internet-store.js`.
// Izveidojiet tajā testa datus, lai jūsu izveidotā programma spētu veikt uzdevumu.
// Ir jāizveido saraksts, kurā ir vismaz 3 preces no vismaz 2 dažādām kategorijām (piemēram, "Elektronika",  "Apģērbi").

// Programmai jāsniedz atbildes uz diviem jautājumiem:
// 1. Kuras preces pieder kategorijai "Elektronika"?
// Izdrukājiet konsolē visu preču nosaukumus, kuru kategorija ir "Elektronika".

// 2. Kāda ir kopējā visu preču vērtība noliktavā?
// Aprēķiniet un izvadiet visu preču kopējo vērtību internetveikalā šādā formātā - "Kopējā summa: 5173 EUR", bet cena būs atkarīga no Jūsu testa datiem.
let itemList = [
    {nosaukums:"Rokas Soma", kategorija:"Apģērbi", cena:12 ,daudzumsNoliktavā:20},
    {nosaukums:"Skapis", kategorija:"Mēbeles", cena:53 ,daudzumsNoliktavā:11},
    {nosaukums:"Ziemas cimdi", kategorija:"Apģērbi", cena:6 ,daudzumsNoliktavā:40},
];
let item;
let sum = 0;
console.log("===============Apģērbi===============");
for (let i = 0;i < itemList.length; i++)
{
item = itemList[i]; 
 sum = sum + item.cena;

    if (item.kategorija == "Apģērbi")
    {
    console.log(item);
}
}
{
    console.log("===================================")
    console.log("kopējā visu preču vērtība noliktavā:" + sum + " Eiro");
    console.log("===================================")
}
