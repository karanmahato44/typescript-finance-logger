import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice('kyto', 'karan', 100);
const inv2 = new Invoice('foo', 'bar', 100);
let invoices = [];
invoices.push(inv1, inv2);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const paymentType = document.querySelector('#type');
const to_from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(paymentType.value, to_from.value, details.value, amount.valueAsNumber);
});
