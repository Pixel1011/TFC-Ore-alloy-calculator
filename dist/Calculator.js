"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomeryCalculator = exports.TwoMetalAlloy = exports.outputCalculatedAlloy = exports.outputCalculatedMetal = exports.outputCalculated = exports.calculateOres = void 0;
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
                if (total !== undefined && sum === total) {
                    results.push({
                        PoorOre: num15s,
                        NormalOre: num25s,
                        RichOre: num35s,
                        sum: sum,
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
exports.calculateOres = calculateOres;
function outputCalculated(ore, total, bypass100max = false) {
    let output = "";
    let calculated = calculateOres(ore, total, bypass100max);
    let results = calculated.results;
    let max = calculated.max;
    let leastRich;
    let leastNormal;
    let leastPoor;
    let maxRich;
    let maxNormal;
    let maxPoor;
    if (results.length > 0) {
        calculated.results.forEach(r => {
            if (maxRich == undefined || r.RichOre > maxRich.RichOre && r.RichOre > 0) {
                maxRich = r;
            }
            if (maxNormal == undefined || r.NormalOre > maxNormal.NormalOre && r.NormalOre > 0) {
                maxNormal = r;
            }
            if (maxPoor == undefined || r.PoorOre > maxPoor.PoorOre && r.PoorOre > 0) {
                maxPoor = r;
            }
            if (leastRich == undefined || r.RichOre < leastRich.RichOre && r.RichOre > 0) {
                leastRich = r;
            }
            if (leastNormal == undefined || r.NormalOre < leastNormal.NormalOre && r.NormalOre > 0) {
                leastNormal = r;
            }
            if (leastPoor == undefined || r.PoorOre < leastPoor.PoorOre && r.PoorOre > 0) {
                leastPoor = r;
            }
        });
        if (leastRich != undefined) {
            output += "\nLeast rich:\n";
            output += "Combination: " + leastRich.PoorOre + " 15s, " + leastRich.NormalOre + " 25s, " + leastRich.RichOre + " 35s\n";
            output += "Total value: " + leastRich.sum + "\n";
        }
        if (leastNormal != undefined) {
            output += "\nLeast normal:\n";
            output += "Combination: " + leastNormal.PoorOre + " 15s, " + leastNormal.NormalOre + " 25s, " + leastNormal.RichOre + " 35s\n";
            output += "Total value: " + leastNormal.sum + "\n";
        }
        if (leastPoor != undefined) {
            output += "\nLeast poor:\n";
            output += "Combination: " + leastPoor.PoorOre + " 15s, " + leastPoor.NormalOre + " 25s, " + leastPoor.RichOre + " 35s\n";
            output += "Total value: " + leastPoor.sum + "\n";
        }
        if (maxRich != undefined) {
            output += "\nMost rich:\n";
            output += "Combination: " + maxRich.PoorOre + " 15s, " + maxRich.NormalOre + " 25s, " + maxRich.RichOre + " 35s\n";
            output += "Total value: " + maxRich.sum + "\n";
        }
        if (maxNormal != undefined) {
            output += "\nMost normal:\n";
            output += "Combination: " + maxNormal.PoorOre + " 15s, " + maxNormal.NormalOre + " 25s, " + maxNormal.RichOre + " 35s\n";
            output += "Total value: " + maxNormal.sum + "\n";
        }
        if (maxPoor != undefined) {
            output += "\nMost poor:\n";
            output += "Combination: " + maxPoor.PoorOre + " 15s, " + maxPoor.NormalOre + " 25s, " + maxPoor.RichOre + " 35s\n";
            output += "Total value: " + maxPoor.sum + "\n";
        }
    }
    else {
        output += "It is impossible to add up to " + total + "\n";
    }
    output += "\nMaximum ingots:\n";
    output += "Combination: " + max.PoorOre + " 15s, " + max.NormalOre + " 25s, " + max.RichOre + " 35s\n";
    output += "Total value: " + max.sum / 100 + " Ingots";
    console.log(output);
}
exports.outputCalculated = outputCalculated;
function outputCalculatedMetal(calculated) {
    let output = "";
    let results = calculated.results;
    let max = calculated.max;
    let leastRich;
    let leastNormal;
    let leastPoor;
    let maxRich;
    let maxNormal;
    let maxPoor;
    if (results.length > 0) {
        calculated.results.forEach(r => {
            if (maxRich == undefined || r.RichOre > maxRich.RichOre && r.RichOre > 0) {
                maxRich = r;
            }
            if (maxNormal == undefined || r.NormalOre > maxNormal.NormalOre && r.NormalOre > 0) {
                maxNormal = r;
            }
            if (maxPoor == undefined || r.PoorOre > maxPoor.PoorOre && r.PoorOre > 0) {
                maxPoor = r;
            }
            if (leastRich == undefined || r.RichOre < leastRich.RichOre && r.RichOre > 0) {
                leastRich = r;
            }
            if (leastNormal == undefined || r.NormalOre < leastNormal.NormalOre && r.NormalOre > 0) {
                leastNormal = r;
            }
            if (leastPoor == undefined || r.PoorOre < leastPoor.PoorOre && r.PoorOre > 0) {
                leastPoor = r;
            }
        });
        if (leastRich != undefined) {
            output += "\nLeast rich:\n";
            output += "Combination: " + leastRich.PoorOre + " 15s, " + leastRich.NormalOre + " 25s, " + leastRich.RichOre + " 35s\n";
            output += "Total value: " + leastRich.sum + "\n";
        }
        if (leastNormal != undefined) {
            output += "\nLeast normal:\n";
            output += "Combination: " + leastNormal.PoorOre + " 15s, " + leastNormal.NormalOre + " 25s, " + leastNormal.RichOre + " 35s\n";
            output += "Total value: " + leastNormal.sum + "\n";
        }
        if (leastPoor != undefined) {
            output += "\nLeast poor:\n";
            output += "Combination: " + leastPoor.PoorOre + " 15s, " + leastPoor.NormalOre + " 25s, " + leastPoor.RichOre + " 35s\n";
            output += "Total value: " + leastPoor.sum + "\n";
        }
        if (maxRich != undefined) {
            output += "\nMost rich:\n";
            output += "Combination: " + maxRich.PoorOre + " 15s, " + maxRich.NormalOre + " 25s, " + maxRich.RichOre + " 35s\n";
            output += "Total value: " + maxRich.sum + "\n";
        }
        if (maxNormal != undefined) {
            output += "\nMost normal:\n";
            output += "Combination: " + maxNormal.PoorOre + " 15s, " + maxNormal.NormalOre + " 25s, " + maxNormal.RichOre + " 35s\n";
            output += "Total value: " + maxNormal.sum + "\n";
        }
        if (maxPoor != undefined) {
            output += "\nMost poor:\n";
            output += "Combination: " + maxPoor.PoorOre + " 15s, " + maxPoor.NormalOre + " 25s, " + maxPoor.RichOre + " 35s\n";
            output += "Total value: " + maxPoor.sum + "\n";
        }
    }
    output += "\nMaximum ingots:\n";
    output += "Combination: " + max.PoorOre + " 15s, " + max.NormalOre + " 25s, " + max.RichOre + " 35s\n";
    output += "Total value: " + max.sum / 100 + " Ingots";
    console.log(output);
}
exports.outputCalculatedMetal = outputCalculatedMetal;
function outputCalculatedAlloy(calculated) {
    let output = "";
    let ore1 = calculated.ore1;
    let ore2 = calculated.ore2;
    let outore1 = ore1.results[0];
    let outore2 = ore2.results[0];
    output += `${outore1.Name}: ${outore1.RichOre} Rich, ${outore1.NormalOre} Normal, ${outore1.PoorOre} Poor\n`;
    output += `${outore2.Name}: ${outore2.RichOre} Rich, ${outore2.NormalOre} Normal, ${outore2.PoorOre} Poor\n`;
    output += `Total value: ${outore1.sum + outore2.sum} (${outore1.sum / (outore1.sum + outore2.sum)}% ${outore1.Name}, ${outore2.sum / (outore1.sum + outore2.sum)}% ${outore2.Name}) \n`;
    console.log(output);
}
exports.outputCalculatedAlloy = outputCalculatedAlloy;
function TwoMetalAlloy(ore1, ore2, ore1ratio, ore2ratio) {
    let ore1max = ore1.PoorOre * 15 + ore1.NormalOre * 25 + ore1.RichOre * 35;
    let ore2max = ore2.PoorOre * 15 + ore2.NormalOre * 25 + ore2.RichOre * 35;
    for (let ore1I = ore1max; ore1I >= 0; ore1I--) {
        for (let ore2I = ore2max; ore2I >= 0; ore2I--) {
            let total = ore1I + ore2I;
            let percOfOre1 = ore1I / total;
            let percOfOre2 = ore2I / total;
            let ore1WithinPercentages = (percOfOre1 >= ore1ratio.min && percOfOre1 <= ore1ratio.max);
            let ore2WithinPercentages = (percOfOre2 >= ore2ratio.min && percOfOre2 <= ore2ratio.max);
            let isMultipleof100 = (total % 100 == 0);
            if (!ore1WithinPercentages || !ore2WithinPercentages || !isMultipleof100)
                continue;
            let calculatedOre1 = calculateOres(ore1, ore1I);
            let calculatedOre2 = calculateOres(ore2, ore2I);
            if (calculatedOre1.results[0] == undefined && calculatedOre2.results[0] == undefined)
                continue;
            return { ore1: calculatedOre1, ore2: calculatedOre2 };
        }
    }
    return null;
}
exports.TwoMetalAlloy = TwoMetalAlloy;
function BloomeryCalculator(iron, bloomeryCapacity = 24) {
    let calculatedIron = calculateOres(iron, undefined);
    let itemswithincapacity = [];
    calculatedIron.hundredarray.forEach(hundred => {
        let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre;
        if (numItems <= bloomeryCapacity) {
            itemswithincapacity.push(hundred);
        }
    });
    itemswithincapacity.sort((a, b) => { return b.sum - a.sum; });
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
exports.BloomeryCalculator = BloomeryCalculator;
//# sourceMappingURL=Calculator.js.map