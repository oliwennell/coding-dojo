describe("there is a vending machine", () => {

    let vendingMachine;

    beforeEach(() => {
        vendingMachine = new VendingMachine();
    });

    it("amount starts at zero", () => {
        expect(vendingMachine.getCurrentAmount()).toBe(0);
    });

    it("can add money to current amount", () => {
        vendingMachine.addMoney(10);
        expect(vendingMachine.getCurrentAmount()).toBe(10);
    });

    it("can eject all the inserted money when it's 20p", () => {
        vendingMachine.addMoney(20);

        const ejected = vendingMachine.eject();
        
        expect(ejected).toEqual([20]);
        expect(vendingMachine.getCurrentAmount()).toBe(0);
    });

    it("can eject all the inserted money when it's 10p", () => {
        vendingMachine.addMoney(10);

        const ejected = vendingMachine.eject();
        
        expect(ejected).toEqual([10]);
        expect(vendingMachine.getCurrentAmount()).toBe(0);
    });

    it("can eject all the inserted money when it's lots of coins", () => {
        vendingMachine.addMoney(10);
        vendingMachine.addMoney(20);
        vendingMachine.addMoney(50);


        const ejected = vendingMachine.eject();
        
        expect(ejected).toEqual([50,20,10]);
        expect(vendingMachine.getCurrentAmount()).toBe(0);
    });
});

describe("buying something", () => {

    let vendingMachine;

    beforeEach(() => {
        vendingMachine = new VendingMachine(
            [
                new Item("Mars Bar", 50, "A"),
                new Item("Snickers flavoured McCoys", 75, "B")
            ]
            );
    });

    it("an item has a name and price", () => {
        let item = new Item("Mars Bar", 69, "A");
        expect(item.name).toEqual("Mars Bar");
        expect(item.price).toEqual(69);
        expect(item.location).toEqual("A");
    });

    it("items can be retrieved", () => {
        expect(vendingMachine.getItems().length).toBe(2);
    });

    [
        [ "A", "Mars Bar", 50 ],
        [ "B", "Snickers flavoured McCoys", 75 ],
    ]
    .forEach(([location,name, price]) => {
        it("item in the machine can be vended", () => {
            vendingMachine.addMoney(price);
            let result = vendingMachine.vend(location);
            expect(vendingMachine.getCurrentAmount()).toBe(0);
            expect(vendingMachine.getItems().length).toBe(1);
            expect(result).toEqual(`Here's your f***ing ${name}`);
        });
    });

    it("wont vend if there's not enough money", () => {
        vendingMachine.addMoney(49)
        let result = vendingMachine.vend("A");
        expect(vendingMachine.getCurrentAmount()).toBe(49);
        expect(vendingMachine.getItems().length).toBe(2);
        expect(result).toEqual("u wot m8");
    });
});

