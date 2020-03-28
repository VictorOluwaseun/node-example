class carLists {
  constructor(model, color, type, op, np) {
    this.model = model;
    this.color = color;
    this.type = type;
    this.oddPrice = op;
    this.newPrice = np;
  }
  getOldPrice() {
    this.price1 = this.oddPrice;
    return this;
  }

  getNewPrice() {
    this.price2 = this.newPrice;
    return this;
  }
  diffPrice() {
    return Math.abs(this.price1 - this.price2);
  }
}

const firstCar = new carLists("Honda", "Gold", "Toyota", 1000000, 2500000);

console.log(firstCar.getOldPrice().getNewPrice());