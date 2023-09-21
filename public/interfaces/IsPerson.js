"use strict";
const me = {
    name: 'karan',
    age: 22,
    speak(language) {
        console.log(language);
    },
    spend(money) {
        console.log('spend', money);
        return money;
    }
};
const someone = {
    name: 'karan',
    age: 22,
    speak(text) {
        console.log('nice', text);
    },
    spend(number) {
        console.log('count', number);
        return number;
    }
};
