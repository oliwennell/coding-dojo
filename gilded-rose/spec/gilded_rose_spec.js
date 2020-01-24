describe("Gilded Rose", function() {
  var shop;

  beforeEach(function () {
    shop = new Shop();
  });

  it("should decrease sell_in by 1 for normal items", function() {
    shop.update_quality();

    expect(shop.items[0].sell_in).toEqual(9);
  })

  it("should increase quality by 1 for Aged Brie", function() {
    shop.update_quality();

    expect(shop.items[1].quality).toEqual(1);
  })

});
