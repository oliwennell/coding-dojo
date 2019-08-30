class VendingMachine {
    constructor(items) {
        this.currentTotal = 0;
        this.coins = [];

        this.items = items || [];
    }

    getCurrentAmount() {
        return this.currentTotal;
    }

    addMoney(amountOfMoney) {
        this.coins.unshift(amountOfMoney);
        this.currentTotal += amountOfMoney;
    }

    eject() {
        let ejectedMoney = this.coins;
        this.coins = [];
        this.currentTotal = 0;
        return ejectedMoney;
    }

    getItems() {
        return this.items;
    }

    vend(location) {
        let itemToBeVended = this.items.find(x => x.location == location);
        if (itemToBeVended.price > this.currentTotal) {
            return "u wot m8";
        }
        this.items = this.items.filter(x => x != itemToBeVended);
        this.currentTotal -= itemToBeVended.price;
        return `Here's your f***ing ${itemToBeVended.name}`;
    }

}

class Item {
    constructor(name,price,location) {
        this.name = name;
        this.price = price;
        this.location = location;
    }
}