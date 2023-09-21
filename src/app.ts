import { Invoice } from "./classes/Invoice.js";


const inv1 = new Invoice('kyto', 'karan', 100);
const inv2 = new Invoice('foo', 'bar', 100);

let invoices: Invoice[] = [];
invoices.push(inv1, inv2);
console.log(invoices);




const form = document.querySelector('.new-item-form') as HTMLFormElement;
const paymentType = document.querySelector('#type') as HTMLSelectElement;
const to_from = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    paymentType.value,
    to_from.value,
    details.value,
    amount.valueAsNumber
  );
})