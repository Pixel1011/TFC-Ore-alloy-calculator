import {outputCalculated, TwoMetalAlloyCalculator, BloomeryCalculator} from "./Calculator";
import * as amounts from "./amounts.json";
let data: IAmounts = amounts;

// output what it takes to calculate 100mb of tin
console.log("Tin:\n");
outputCalculated(data.Tin, 100);

// output what it takes to calculate 100mb of copper
console.log("\nCopper:\n");
outputCalculated(data.Copper, 100);

// output how much bronze you can make with the given amounts
console.log("\nBronze:\n");
TwoMetalAlloyCalculator(data.Tin, data.Copper, 0.08, 0.12, 0.88, 0.92);

// output how much iron you can make with the given amounts
console.log("\nIron:\n");
BloomeryCalculator(data.Iron);