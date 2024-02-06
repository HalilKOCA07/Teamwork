//! SALARY CALCULATOR

const workerSgk = (brut) => (brut * 14) / 100;
const workerIssizlik = (brut) => (brut * 1) / 100;
const bossSgk = (brut) => (brut * 15.5) / 100;
const bossIssizlik = (brut) => (brut * 2) / 100;
const damgaVergisi = (brut) => (brut * 0.0759) / 1000;

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

let maasBodro = [
  {
    month: "ocak",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "subat",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "mart",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "nisan",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "mayis",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "haziran",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "temmuz",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "agustos",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "eylul",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "ekim",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "kasim",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
  {
    month: "aralik",
    brutMaas: brut,
    sgkW: sgkWorker,
    issizlikW: IssizlikWorker,
    netMaas: netSalary,
    sgkB: sgkBoss,
    issizlikB: IssizlikBoss,
  },
];

// const startmonth = maasBodro.map(function(maasBodro){
//         console.log(maasBodro.month);
// })

let bodroDocument = "";

for (let i = 5; i < maasBodro.length; i++) {
  // bodroDocument += maasBodro.push(maasBodro[i]);
  console.log(maasBodro[i]);
}

// console.log(bodroDocument);
