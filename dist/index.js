"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
function calculateOres(ore, total, bypass100max = false) {
    let max15s = ore.PoorOre;
    let max25s = ore.NormalOre;
    let max35s = ore.RichOre;
    let results = [];
    let hundredarray = [];
    let max = { PoorOre: 0, NormalOre: 0, RichOre: 0, sum: 0, Name: ore.Name };
    for (let num15s = 0; num15s <= max15s; num15s++) {
        for (let num25s = 0; num25s <= max25s; num25s++) {
            for (let num35s = 0; num35s <= max35s; num35s++) {
                let sum = num15s * 15 + num25s * 25 + num35s * 35;
                if (sum === total && total !== undefined) {
                    results.push({
                        PoorOre: num15s,
                        NormalOre: num25s,
                        RichOre: num35s,
                        Name: ore.Name
                    });
                }
                if (sum > max.sum && (sum % 100 == 0 || bypass100max)) {
                    max.PoorOre = num15s;
                    max.NormalOre = num25s;
                    max.RichOre = num35s;
                    max.sum = sum;
                }
                if (sum % 100 == 0) {
                    hundredarray.push({
                        PoorOre: num15s,
                        NormalOre: num25s,
                        RichOre: num35s,
                        sum: sum,
                        Name: ore.Name
                    });
                }
            }
        }
    }
    return { results: results, max: max, hundredarray: hundredarray };
}
function outputCalculated(total, results, max) {
    let output = "";
    if (results.length === 0) {
        output += "It is impossible to add up to " + total + "\n";
    }
    else {
        output += "Possible combinations:\n";
        for (let i = 0; i < results.length; i++) {
            output +=
                "Combination " +
                    (i + 1) +
                    ": " +
                    results[i].PoorOre +
                    " 15s, " +
                    results[i].NormalOre +
                    " 25s, " +
                    results[i].RichOre +
                    " 35s\n";
        }
    }
    output += "\nMaximum ingots:\n";
    output += "Combination: " + max.PoorOre + " 15s, " + max.NormalOre + " 25s, " + max.RichOre + " 35s\n";
    output += "Total value: " + max.sum / 100 + " Ingots";
    console.log(output);
}
function TwoMetalAlloy(ore1, ore2, ore1ratio, ore2ratio) {
    if (ore2.PoorOre > ore1.PoorOre) {
        ore2.PoorOre = ore1.PoorOre;
    }
    else {
        ore1.PoorOre = ore2.PoorOre;
    }
    if (ore2.NormalOre > ore1.NormalOre) {
        ore2.NormalOre = ore1.NormalOre;
    }
    else {
        ore1.NormalOre = ore2.NormalOre;
    }
    if (ore2.RichOre > ore1.RichOre) {
        ore2.RichOre = ore1.RichOre;
    }
    else {
        ore1.RichOre = ore2.RichOre;
    }
    let ore1max = ore1.PoorOre * 15 + ore1.NormalOre * 25 + ore1.RichOre * 35;
    let ore2max = ore2.PoorOre * 15 + ore2.NormalOre * 25 + ore2.RichOre * 35;
    let CalculatedAlloyOre1, CalculatedAlloyOre2;
    // ore2
    for (let i = 0; i <= ore2max; i++) {
        if (Number.isInteger((ore2max - i) * ore2ratio)) {
            CalculatedAlloyOre2 = calculateOres(ore2, (ore2max - i) * ore2ratio);
            if (CalculatedAlloyOre2.results[0] != undefined)
                break;
        }
    }
    // ore1
    for (let i = 0; i <= ore1max; i++) {
        if (Number.isInteger((ore1max - i) * ore1ratio)) {
            CalculatedAlloyOre1 = calculateOres(ore1, (ore1max - i) * ore1ratio);
            if (CalculatedAlloyOre1.results[0] != undefined)
                break;
        }
    }
    if (CalculatedAlloyOre2 == undefined || CalculatedAlloyOre1 == undefined || CalculatedAlloyOre1.results[0] == undefined || CalculatedAlloyOre2.results[0] == undefined) {
        console.log("This is impossible");
        return;
    }
    // output stuff
    let totalore1mb = CalculatedAlloyOre1.results[0].PoorOre * 15 + CalculatedAlloyOre1.results[0].NormalOre * 25 + CalculatedAlloyOre1.results[0].RichOre * 35;
    let totalore2mb = CalculatedAlloyOre2.results[0].PoorOre * 15 + CalculatedAlloyOre2.results[0].NormalOre * 25 + CalculatedAlloyOre2.results[0].RichOre * 35;
    let totalmb = totalore1mb + totalore2mb;
    console.log(`${ore1.Name} required: ${CalculatedAlloyOre1.results[0].PoorOre} Poor, ${CalculatedAlloyOre1.results[0].NormalOre} Normal, ${CalculatedAlloyOre1.results[0].RichOre} Rich (${totalore1mb / totalmb}%)`);
    console.log(`${ore2.Name} required: ${CalculatedAlloyOre2.results[0].PoorOre} Poor, ${CalculatedAlloyOre2.results[0].NormalOre} Normal, ${CalculatedAlloyOre2.results[0].RichOre} Rich (${totalore2mb / totalmb}%)`);
    console.log(`Total: ${totalmb}mb`);
}
function BloomeryCalculator(iron, bloomeryCapacity = 24) {
    // max 24 ore and 24 charcoal
    let calculatedIron = calculateOres(iron, undefined);
    let itemswithincapacity = [];
    calculatedIron.hundredarray.forEach(hundred => {
        let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre;
        if (numItems <= bloomeryCapacity) {
            itemswithincapacity.push(hundred);
        }
    });
    itemswithincapacity.sort((a, b) => { return b.sum - a.sum; }); // sort by highest-lowest
    let maxsum = itemswithincapacity[0].sum;
    itemswithincapacity.forEach(hundred => {
        if (hundred.sum == maxsum) {
            let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre;
            console.log(`Iron required: ${hundred.PoorOre} Poor, ${hundred.NormalOre} Normal, ${hundred.RichOre} Rich`);
            console.log(`Total: ${hundred.sum}mb`);
            console.log(`Charcoal required: ${numItems} Charcoal`);
        }
    });
}
const amounts = __importStar(require("./amounts.json"));
let data = amounts;
console.log("Tin:\n");
let tinCalculated = calculateOres(data.Tin, 100);
outputCalculated(100, tinCalculated.results, tinCalculated.max);
console.log("\nCopper:\n");
let copperCalculated = calculateOres(data.Copper, 100);
outputCalculated(100, copperCalculated.results, copperCalculated.max);
console.log("\nBronze 12:88 :\n");
TwoMetalAlloy(data.Tin, data.Copper, 0.12, 0.88);
console.log("\nBronze 10:90 :\n");
TwoMetalAlloy(data.Tin, data.Copper, 0.1, 0.9);
console.log("\nBronze 8:92 :\n");
TwoMetalAlloy(data.Tin, data.Copper, 0.08, 0.92);
console.log("\nIron:\n");
BloomeryCalculator(data.Iron);
//# sourceMappingURL=index.js.map