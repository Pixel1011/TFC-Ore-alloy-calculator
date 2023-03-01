
import {outputCalculated, BloomeryCalculator, outputCalculatedAlloy, TwoMetalAlloy, ThreeMetalAlloy} from "./Calculator";
import * as amounts from "./amounts.json";
let data: IAmounts = amounts;

// output what it takes to calculate 100mb of tin 
console.log("Tin:\n");
//outputCalculated(data.Tin, 100);
outputCalculated(data.Tin);

console.log("\nCopper:\n");
outputCalculated(data.Copper);

// output how much iron you can make with the given amounts
console.log("\nIron:\n");
BloomeryCalculator(data.Iron);

console.log("\nZinc:\n");
outputCalculated(data.Zinc);

console.log("\nIron:\n");
outputCalculated(data.Iron);

console.log("\nSilver:\n");
outputCalculated(data.Silver);

console.log("\nGold:\n");
outputCalculated(data.Gold);

console.log("\nNickel:\n");
outputCalculated(data.Nickel);

console.log("\nBismuth:\n");
outputCalculated(data.Bismuth);
console.log("\nBronze:\n");

let val = TwoMetalAlloy({ore: data.Tin, ratio: {min: 0.08, max: 0.12}}, {ore: data.Copper, ratio: {min:0.88, max: 0.92}});
if (val != null) {
    outputCalculatedAlloy(val);
}


console.log("\nBismuth Bronze:\n");
let val1 = ThreeMetalAlloy({ore: data.Bismuth, ratio: {min: 0.1, max: 0.2}}, {ore: data.Zinc, ratio: {min: 0.2, max: 0.3}}, {ore: data.Copper, ratio: {min: 0.5, max: 0.65}});
if (val1 != null) {
    outputCalculatedAlloy(val1);
}