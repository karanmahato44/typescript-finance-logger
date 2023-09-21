import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const paymentType = document.querySelector('#type') as HTMLSelectElement;
const to_from = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

/* ul instance */
const ul = document.querySelector('.item-list') as HTMLUListElement;
const record = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (paymentType.value === 'invoice') {
    doc = new Invoice(to_from.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(to_from.value, details.value, amount.valueAsNumber);
  }
  record.render(doc, paymentType.value, 'end');
})