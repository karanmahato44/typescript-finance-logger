export class Invoice {

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
  }

  message() {
    return `${this.client} owns ${this.details} ${this.amount}`;
  }
}