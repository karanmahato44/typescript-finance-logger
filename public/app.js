import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const paymentType = document.querySelector('#type');
const to_from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
/* ul instance */
const ul = document.querySelector('.item-list');
const record = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (paymentType.value === 'invoice') {
        doc = new Invoice(to_from.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(to_from.value, details.value, amount.valueAsNumber);
    }
    record.render(doc, paymentType.value, 'end');
});
