interface IsPerson {
  name: string;
  age: number;
  speak(x: string): void;
  spend(x: number): number;
}

const me: IsPerson = {
  name: 'karan',
  age: 22,
  speak(language: string) {
    console.log(language);
  },
  spend(money: number) {
    console.log('spend', money);
    return money;
  }
}

const someone: IsPerson = {
  name: 'karan',
  age: 22,
  speak(text: string) {
    console.log('nice', text);
  },
  spend(number: number) {
    console.log('count', number);
    return number;
  }
}