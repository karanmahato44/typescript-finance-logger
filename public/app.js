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
/* // GENERICS

// const addUser = <T extends { name: string }>(obj: T) => {
const addUser = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 10);
  return { ...obj, uid }
};

const user = addUser({ name: 'karan', age: 22 });
const user2 = addUser({ foo: 'bar' });
console.log(user.age); // not possible without generics÷

// GENERICS WITH INTERFACES

interface Resource<T> {
  name: string;
  age: number;
  data: T
}

const someResource: Resource<string> = {
  name: 'karan',
  age: 22,
  data: 'lorem ipsum foo bar'
}

const someOtherRes: Resource<number[]> = {
  name: 'kyto',
  age: 44,
  data: [1, 2, 3, 4, 5]
} */
