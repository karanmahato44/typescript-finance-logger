export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    message() {
        return `${this.client} owns ${this.details} ${this.amount}`;
    }
}
