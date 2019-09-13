describe("Oystercard", () => {
  let card;
  beforeEach(() => {
    card = new Oystercard(5);
  });
  describe("user story 1 - card has money", () => {
    it("card is created with 'money'", () => {
      expect(card.money).toEqual(5);
    });
  });

  describe("user story 2 - adding money", () => {
    [5, 10, 95].forEach(amount => {
      const newMoney = 5 + amount;
      it(`can add £${amount} to the card to get ${newMoney}`, () => {
        expect(card.topUp(amount)).toEqual(`Your balance is now £${newMoney}.`);
        expect(card.money).toEqual(newMoney);
      });
    });
  });

  describe("user story 3 - limiting amount", () => {
    [97, 100, 101, 1000].forEach(amount => {
      it(`should not exceed £100 when £${amount} is added`, () => {
        expect(card.topUp(amount)).toEqual(
          "You tried to top up to more than £100. Your balance is now £100."
        );
        expect(card.money).toEqual(100);
      });
    });
  });
  describe("user story 3 - limiting amount", () => {
    beforeEach(() => {
      card.money = 50;
    });

    [5, 10, 45].forEach(amount => {
      const newMoney = 50 - amount;
      it(`can deduct £${amount} to the card to get ${newMoney}`, () => {
        expect(card.deduct(amount)).toEqual(
          `Your balance is now £${newMoney}.`
        );
        expect(card.money).toEqual(newMoney);
      });
    });
  });

  describe("user story 4 - touching myself", () => {
    it("when card is touched in, touchedIn is true", () => {
      expect(card.touchIn()).toEqual("You are touched in.");
      expect(card.touchedIn).toEqual(true);
    });

    it("when card is touched out, touchedIn is false", () => {
      expect(card.touchOut()).toEqual("You are touched out.");
      expect(card.touchedIn).toEqual(false);
    });
  });

  describe("user story 5 - I need to have the minimum amount for a single journey", () => {
    [-3, 0, 1.99].forEach(amount => {
      const poorCard = new Oystercard(amount);

      it(`when you touch in and balance is £${amount} touchedIn is false`, () => {
        expect(poorCard.touchIn()).toEqual(
          `The minimum amouts to travel is £2. Your current balance is £${amount}.`
        );
        expect(poorCard.touchedIn).toEqual(false);
      });
    });
  });
});
