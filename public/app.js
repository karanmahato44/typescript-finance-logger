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
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["SUN"] = 0] = "SUN";
    ResourceType[ResourceType["MON"] = 1] = "MON";
    ResourceType[ResourceType["TUE"] = 2] = "TUE";
    ResourceType[ResourceType["WED"] = 3] = "WED";
})(ResourceType || (ResourceType = {}));
;
const res1 = {
    type: ResourceType.SUN,
    data: 'foo'
};
const res2 = {
    type: ResourceType.TUE,
    data: 'foo'
};
const res3 = {
    type: ResourceType.WED,
    data: 'foo'
};
console.log(res1);
console.log(res2);
console.log(res3);
