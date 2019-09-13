class Oystercard {
  constructor(money) {
    this.money = money;
    this.touchedIn = false;
  }

  topUp(amount) {
    return this.doTransaction(amount);
  }

  deduct(amount) {
    return this.doTransaction(-amount);
  }

  doTransaction(amount) {
    if (amount + this.money > 100) {
      this.money = 100;
      return "You tried to top up to more than £100. Your balance is now £100.";
    } else {
      this.money += amount;
      return `Your balance is now £${this.money}.`;
    }
  }

  touchIn() {
    if (this.money < 2) {
      return `The minimum amouts to travel is £2. Your current balance is £${
        this.money
      }.`;
    }
    this.touchedIn = true;
    return "You are touched in.";
  }

  touchOut() {
    this.touchedIn = false;
    return "You are touched out.";
  }
}
