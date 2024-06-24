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
console.log("--------------------------------------------");

// task 4
const cityScores = {};

studenti.forEach(student => {
    if (!cityScores[student.grad]) {
        cityScores[student.grad] = { totalScore: 0, count: 0 };
    }
    cityScores[student.grad].totalScore += student.prosek;
    cityScores[student.grad].count += 1;
});

const task4 = Object.entries(cityScores)
    .map(([grad, { totalScore, count }]) => ({ grad, avgScore: totalScore / count }))
    .sort((a, b) => a.avgScore - b.avgScore);

console.log(task4);
console.log("--------------------------------------------");


// task 5
const task5 = studenti.reduce((acc, student) => {
    if (student.ime.endsWith('a')) {
        acc.endsInA.total += student.prosek;
        acc.endsInA.count += 1;
    } else {
        acc.others.total += student.prosek;
        acc.others.count += 1;
    }
    return acc;
}, { endsInA: { total: 0, count: 0 }, others: { total: 0, count: 0 } });

const avgEndsInA = task5.endsInA.total / task5.endsInA.count;
const avgOthers = task5.others.total / task5.others.count;

console.log({ avgEndsInA, avgOthers });