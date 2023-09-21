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
    let values; // tuples
    values = [to_from.value, details.value, amount.valueAsNumber];
    let doc;
    if (paymentType.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
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
/* // ENUMS

enum ResourceType { SUN, MON, TUE, WED };

interface Resource {
  type: number;
  data: string;
}

const res1: Resource = {
  type: ResourceType.SUN, // store not the actual value but the index
  data: 'foo'
}
const res2: Resource = {
  type: ResourceType.TUE,
  data: 'foo'
}
const res3: Resource = {
  type: ResourceType.WED,
  data: 'foo'
}

console.log(res1);
console.log(res2);
console.log(res3); */
/* TUPLES

let tup: [string, number, boolean] = ['foo', 22, true];

// tup[0] = 44; // not allowed
// tup[0] = 'bar' // allowed */
