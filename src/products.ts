import Product from "./models/Product";

const products: Product[] = [
  { name: "Table", price: 50 },
  { name: "Chair", price: 40 },
  { name: "Computer", price: 200 },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum: number = 0;
  for (let item of array) {
    sum = item.price + sum;
  }
  return sum / array.length;
};

// const calcAverageProductPrice = (array: Product[]): number => {
//   if (array.length) {
//     let sum = 0;
//     array.forEach((item) => {
//       sum += item.price;
//     });
//     return sum / array.length;
//   } else {
//     return 0;
//   }
// };

console.log(calcAverageProductPrice(products));

export { calcAverageProductPrice };
