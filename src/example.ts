
import {outputCalculated, BloomeryCalculator, outputCalculatedAlloy, TwoMetalAlloy} from "./Calculator";
import * as amounts from "./amounts.json";
let data: IAmounts = amounts;

// output what it takes to calculate 100mb of tin
console.log("Tin:\n");
outputCalculated(data.Tin, 100);

// output what it takes to calculate 100mb of copper
console.log("\nCopper:\n");
outputCalculated(data.Copper, 100);

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

let val = TwoMetalAlloy(data.Tin, data.Copper, {min: 0.08, max: 0.12}, {min:0.88, max: 0.92});
if (val != null) {
    outputCalculatedAlloy(val);
}