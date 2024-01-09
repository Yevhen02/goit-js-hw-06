class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// виклик функції 
console.log(storage.getItems()); 
// ["Nanitoids", "Prolonger", "Antigravitator"]

// додаємо item і змінюємо масив 
storage.addItem("Droid");

// виклик функції 
console.log(storage.getItems()); 
// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// прибираємо item і змінюємо масив 
storage.removeItem("Prolonger");

// виклик функції 
console.log(storage.getItems()); 
// ["Nanitoids", "Antigravitator", "Droid"]

console.log("..................");
