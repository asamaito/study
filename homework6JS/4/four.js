let a = parseInt(prompt("арендна плата за місяць"));
let c = parseInt(prompt("наявні кошти для арени"));
let b = parseInt(c / a);
let q = parseInt(c / 12);
document.write(`вам вистачить на ${b}  місяів або на ${q} років`);
