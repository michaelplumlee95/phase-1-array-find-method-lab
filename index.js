// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(array) {
  const isWin = array.find((o) => o.result === "W");
  if (isWin === undefined) {
    return isWin;
  } else return isWin.year;
}

console.log(superbowlWin(record));
