
        //! SALARY CALCULATOR

const workerSgk = (brut) => brut * 14 / 100;
const workerIssizlik = (brut) => brut * 1 / 100;
const bossSgk = (brut) => brut * 15.5 / 100;
const bossIssizlik = (brut) => brut * 2 / 100;
const damgaVergisi = (brut) => brut * 0.0759 / 1000;

let brut = 20003.73;

let sgkWorker = workerSgk(brut).toFixed(2);
// console.log(sgkWorker);
let IssizlikWorker = workerIssizlik(brut).toFixed(2);
let sgkBoss = bossSgk(brut).toFixed(2);
let IssizlikBoss = bossIssizlik(brut).toFixed(2);
let vergiDamga = damgaVergisi(brut).toFixed(2);
let netSalary = (brut - sgkWorker - IssizlikWorker).toFixed(2);

console.log(netSalary);
console.log(sgkWorker);
console.log(IssizlikWorker);
console.log(sgkBoss);
console.log(IssizlikBoss);
console.log(vergiDamga);

let month = ["ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"]



