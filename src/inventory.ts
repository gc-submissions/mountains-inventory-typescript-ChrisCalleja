import InventoryItem from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

const calcInventoryValue = (inventory: InventoryItem[]): number => {
  if (inventory.length) {
    let sum = 0;
    inventory.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    return sum;
  } else {
    return 0;
  }
};

const inventoryValue: number = calcInventoryValue(inventory);

console.log(inventoryValue);

export { calcInventoryValue };
