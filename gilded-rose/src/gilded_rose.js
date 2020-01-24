function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

function Shop() {

  this.items = [];

  this.items.push(new Item('+5 Dexterity Vest', 10, 20));
  this.items.push(new Item('Aged Brie', 2, 0));
  this.items.push(new Item('Elixir of the Mongoose', 5, 7));
  this.items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  this.items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  this.items.push(new Item('Conjured Mana Cake', 3, 6));

  this.update_quality = function() {
    var items = this.items;

    for (var i = 0; i < items.length; i++) {
      if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].quality = items[i].quality - 1
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
          }
        }
      }
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        items[i].sell_in = items[i].sell_in - 1;
      }
      if (items[i].sell_in < 0) {
        if (items[i].name != 'Aged Brie') {
          if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
              if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                items[i].quality = items[i].quality - 1
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
        }
      }
    }
  }
}
