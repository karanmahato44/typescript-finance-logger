import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
const paymentType = document.querySelector('#type');
const to_from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// let docOne: HasFormatter = new Invoice('karan', 'website work', 400);
// let docTwo: HasFormatter = new Payment('kyto', 'graphics design', 200);
// let docs: HasFormatter[] = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (paymentType.value === 'invoice') {
        doc = new Invoice(to_from.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(to_from.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
