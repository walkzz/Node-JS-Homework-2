// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

// const studenti = [
//   { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, 
//   { ime: "Pero", prosek: 8.3, grad: "Bitola" },
//   { ime: "Janko", prosek: 6.9, grad: "Bitola" },
//   { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
//   { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
//   { ime: "Vancho", prosek: 10, grad: "Tetovo" },
//   { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
//   { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
//   { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
//   { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
// ];
const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];
// task 1
console.log("task 1:")
function findLastLetter(name) {
    return name[name.length - 1];
}
const findCityAndAverage = studenti
    .filter(student => student.grad === "Skopje" && findLastLetter(student.ime) === 'a' && student.prosek > 7)
    .sort((a, b) => {
        if (a.ime < b.ime) return -1;
        if (a.ime > b.ime) return 1; // experimental
        return 0;
    });
console.log(findCityAndAverage);
console.log("--------------------------------------------");

// task 2
console.log("task 2:");
const aboveNineAndCity = studenti
    .filter(student => student.prosek > 9 && student.grad !== "Skopje")
    .sort((a, b) => b.prosek - a.prosek);

console.log(aboveNineAndCity);
console.log("--------------------------------------------");

// task 3
console.log("task 3:");
const firstStudentsAverage = studenti
    .filter(student => student.ime.length === 5)
    .sort((a, b) => a.prosek - b.prosek)
    .slice(0, 3);

console.log(firstStudentsAverage);