import Mountain from "./models/Mountain";

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length) {
    let currentHighest: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > currentHighest.height) {
        currentHighest = item;
      }
    });
    return currentHighest.name;
  } else {
    return "";
  }
};

// const findNameOfTallestMountain = (mountains: Mountain[]): string => {
//   if (mountains.length) {
//     let currentTallestMountain = mountains[0];
//     mountains.forEach((item) => {
//       if (item.height > currentTallestMountain.height) {
//         currentTallestMountain = item;
//       }
//     });
//     return currentTallestMountain.name;
//   } else {
//     return "";
//   }
// };

// const findNameOfTallestMountain = (mountains: Mountain[]): string => {
//   if (mountains.length) {
//     return mountains.reduce((pv, cv) => (cv.height > pv.height ? cv : pv)).name;
//   } else {
//     return "";
//   }
// };

console.log(findNameOfTallestMountain(mountains));

export { findNameOfTallestMountain };
