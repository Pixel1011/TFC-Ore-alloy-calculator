"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomeryCalculator = exports.ThreeMetalAlloy = exports.TwoMetalAlloy = exports.outputCalculatedAlloy = exports.outputCalculatedMetal = exports.outputCalculated = exports.calculateOres = void 0;
function calculateOres(ore, total, bypass100max = false) {
    let max15s = ore.PoorOre;
    let max25s = ore.NormalOre;
    let max35s = ore.RichOre;
    let max100s = ore.Ingots;
    let max200s = ore.DoubleIngots;
    let results = [];
    let hundredarray = [];
    let max = { PoorOre: 0, NormalOre: 0, RichOre: 0, sum: 0, Ingots: 0, DoubleIngots: 0, Name: ore.Name };
    for (let num200s = 0; num200s <= max200s; num200s++) {
        for (let num100s = 0; num100s <= max100s; num100s++) {
            for (let num15s = 0; num15s <= max15s; num15s++) {
                for (let num25s = 0; num25s <= max25s; num25s++) {
                    for (let num35s = 0; num35s <= max35s; num35s++) {
                        let sum = num15s * 15 + num25s * 25 + num35s * 35 + num100s * 100 + num200s * 200;
                        if (total !== undefined && sum === total) {
                            results.push({
                                PoorOre: num15s,
                                NormalOre: num25s,
                                RichOre: num35s,
                                Ingots: num100s,
                                DoubleIngots: num200s,
                                sum: sum,
                                Name: ore.Name
                            });
                        }
                        if (sum > max.sum && (sum % 100 == 0 || bypass100max)) {
                            max.PoorOre = num15s;
                            max.NormalOre = num25s;
                            max.RichOre = num35s;
                            max.Ingots = num100s;
                            max.DoubleIngots = num200s;
                            max.sum = sum;
                        }
                        if (sum % 100 == 0) {
                            hundredarray.push({
                                PoorOre: num15s,
                                NormalOre: num25s,
                                RichOre: num35s,
                                Ingots: num100s,
                                DoubleIngots: num200s,
                                sum: sum,
                                Name: ore.Name
                            });
                        }
                    }
                }
            }
        }
    }
    return { results: results, max: max, hundredarray: hundredarray };
}
exports.calculateOres = calculateOres;
function addOreToString(s, ore) {
    if (ore.DoubleIngots == 0 && ore.Ingots == 0) {
        s += "Combination: " + ore.PoorOre + " Poor, " + ore.NormalOre + " Normal, " + ore.RichOre + " Rich\n";
    }
    else {
        s += "Combination: " + ore.PoorOre + " Poor, " + ore.NormalOre + " Normal, " + ore.RichOre + " Rich, " + ore.Ingots + " Ingots, " + ore.DoubleIngots + " Double ingots\n";
    }
    s += "Total value: " + ore.sum / 100 + " Ingots\n";
    return s;
}
function outputCalculated(ore, total, bypass100max = false) {
    let output = "";
    ore.DoubleIngots = 0;
    ore.Ingots = 0;
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
            output = addOreToString(output, leastRich);
        }
        if (leastNormal != undefined) {
            output += "\nLeast normal:\n";
            output = addOreToString(output, leastNormal);
        }
        if (leastPoor != undefined) {
            output += "\nLeast poor:\n";
            output = addOreToString(output, leastPoor);
        }
        if (maxRich != undefined) {
            output += "\nMost rich:\n";
            output = addOreToString(output, maxRich);
        }
        if (maxNormal != undefined) {
            output += "\nMost normal:\n";
            output = addOreToString(output, maxNormal);
        }
        if (maxPoor != undefined) {
            output += "\nMost poor:\n";
            output = addOreToString(output, maxPoor);
        }
    }
    else {
        if (total != undefined) {
            output += "It is impossible to add up to " + total + "\n";
        }
    }
    output += "\nMaximum ingots:\n";
    output = addOreToString(output, max);
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
    let leastIngots;
    let leastDoubleIngots;
    let maxRich;
    let maxNormal;
    let maxPoor;
    let maxIngots;
    let maxDoubleIngots;
    if (results.length > 0) {
        calculated.results.forEach(r => {
            if (maxRich == undefined || r.RichOre > maxRich.RichOre && r.RichOre > 0)
                maxRich = r;
            if (maxNormal == undefined || r.NormalOre > maxNormal.NormalOre && r.NormalOre > 0)
                maxNormal = r;
            if (maxPoor == undefined || r.PoorOre > maxPoor.PoorOre && r.PoorOre > 0)
                maxPoor = r;
            if (maxIngots == undefined || r.Ingots > maxIngots.Ingots && r.Ingots > 0)
                maxIngots = r;
            if (maxDoubleIngots == undefined || r.DoubleIngots > maxDoubleIngots.DoubleIngots && r.DoubleIngots > 0)
                maxDoubleIngots = r;
            if (leastRich == undefined || r.RichOre < leastRich.RichOre && r.RichOre > 0)
                leastRich = r;
            if (leastNormal == undefined || r.NormalOre < leastNormal.NormalOre && r.NormalOre > 0)
                leastNormal = r;
            if (leastPoor == undefined || r.PoorOre < leastPoor.PoorOre && r.PoorOre > 0)
                leastPoor = r;
            if (leastIngots == undefined || r.Ingots < leastIngots.Ingots && r.Ingots > 0)
                leastIngots = r;
            if (leastDoubleIngots == undefined || r.DoubleIngots < leastDoubleIngots.DoubleIngots && r.DoubleIngots > 0)
                leastDoubleIngots = r;
        });
        if (leastRich != undefined) {
            output += "\nLeast rich:\n";
            output = addOreToString(output, leastRich);
        }
        if (leastNormal != undefined) {
            output += "\nLeast normal:\n";
            output = addOreToString(output, leastNormal);
        }
        if (leastPoor != undefined) {
            output += "\nLeast poor:\n";
            output = addOreToString(output, leastPoor);
        }
        if (maxRich != undefined) {
            output += "\nMost rich:\n";
            output = addOreToString(output, maxRich);
        }
        if (maxNormal != undefined) {
            output += "\nMost normal:\n";
            output = addOreToString(output, maxNormal);
        }
        if (maxPoor != undefined) {
            output += "\nMost poor:\n";
            output = addOreToString(output, maxPoor);
        }
    }
    output += "Maximum ingots:\n";
    output = addOreToString(output, max);
    console.log(output);
}
exports.outputCalculatedMetal = outputCalculatedMetal;
function outputCalculatedAlloy(calculated) {
    let output = "";
    let ores = [];
    let total = 0;
    calculated.ores.forEach(c => {
        let res = c.results[0];
        output += `${res.Name}: ${res.DoubleIngots} Double ingots, ${res.Ingots} Ingots, ${res.RichOre} Rich, ${res.NormalOre} Normal, ${res.PoorOre} Poor\n`;
        ores.push(res);
        total += res.sum;
    });
    let percentages = "(";
    ores.forEach(t => {
        percentages += `${t.sum / total}% ${t.Name}`;
        if (t != ores[ores.length - 1])
            percentages += ", ";
    });
    percentages += ")";
    output += `Total value: ${total} ${percentages} \n`;
    console.log(output);
}
exports.outputCalculatedAlloy = outputCalculatedAlloy;
function TwoMetalAlloy(part1, part2) {
    let ore1 = part1.ore;
    let ore1ratio = part1.ratio;
    let ore2 = part2.ore;
    let ore2ratio = part2.ratio;
    let ore1max = ore1.PoorOre * 15 + ore1.NormalOre * 25 + ore1.RichOre * 35 + ore1.Ingots * 100 + ore1.DoubleIngots * 200;
    let ore2max = ore2.PoorOre * 15 + ore2.NormalOre * 25 + ore2.RichOre * 35 + ore2.Ingots * 100 + ore2.DoubleIngots * 200;
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
            return { ores: [calculatedOre1, calculatedOre2] };
        }
    }
    return null;
}
exports.TwoMetalAlloy = TwoMetalAlloy;
function ThreeMetalAlloy(part1, part2, part3) {
    let ore1 = part1.ore;
    let ore1ratio = part1.ratio;
    let ore2 = part2.ore;
    let ore2ratio = part2.ratio;
    let ore3 = part3.ore;
    let ore3ratio = part3.ratio;
    let ore1max = ore1.PoorOre * 15 + ore1.NormalOre * 25 + ore1.RichOre * 35 + ore1.Ingots * 100 + ore1.DoubleIngots * 200;
    let ore2max = ore2.PoorOre * 15 + ore2.NormalOre * 25 + ore2.RichOre * 35 + ore2.Ingots * 100 + ore2.DoubleIngots * 200;
    let ore3max = ore3.PoorOre * 15 + ore3.NormalOre * 25 + ore3.RichOre * 35 + ore3.Ingots * 100 + ore3.DoubleIngots * 200;
    for (let ore1I = ore1max; ore1I >= 0; ore1I--) {
        for (let ore2I = ore2max; ore2I >= 0; ore2I--) {
            for (let ore3I = ore3max; ore3I >= 0; ore3I--) {
                let total = ore1I + ore2I + ore3I;
                let percOfOre1 = ore1I / total;
                let ore1WithinPercentages = (percOfOre1 >= ore1ratio.min && percOfOre1 <= ore1ratio.max);
                if (!ore1WithinPercentages) {
                    ore1I -= 45;
                    continue;
                }
                let percOfOre2 = ore2I / total;
                let ore2WithinPercentages = (percOfOre2 >= ore2ratio.min && percOfOre2 <= ore2ratio.max);
                if (!ore2WithinPercentages) {
                    ore2I -= 10;
                    continue;
                }
                let percOfOre3 = ore3I / total;
                let ore3WithinPercentages = (percOfOre3 >= ore3ratio.min && percOfOre3 <= ore3ratio.max);
                if (!ore3WithinPercentages) {
                    ore3I -= 5;
                    continue;
                }
                if (total % 100 != 0)
                    continue;
                let calculatedOre1 = calculateOres(ore1, ore1I);
                let calculatedOre2 = calculateOres(ore2, ore2I);
                let calculatedOre3 = calculateOres(ore3, ore3I);
                if (calculatedOre1.results[0] == undefined || calculatedOre2.results[0] == undefined || calculatedOre3.results[0] == undefined)
                    continue;
                return { ores: [calculatedOre1, calculatedOre2, calculatedOre3] };
            }
        }
    }
    return null;
}
exports.ThreeMetalAlloy = ThreeMetalAlloy;
function BloomeryCalculator(iron, bloomeryCapacity = 24) {
    let calculatedIron = calculateOres(iron, undefined);
    let itemswithincapacity = [];
    calculatedIron.hundredarray.forEach(hundred => {
        let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre + hundred.Ingots + hundred.DoubleIngots;
        if (numItems <= bloomeryCapacity) {
            itemswithincapacity.push(hundred);
        }
    });
    itemswithincapacity.sort((a, b) => { return b.sum - a.sum; });
    let maxsum = itemswithincapacity[0].sum;
    itemswithincapacity.forEach(hundred => {
        if (hundred.sum == maxsum) {
            let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre + hundred.Ingots + hundred.DoubleIngots;
            console.log(`Iron required: ${hundred.PoorOre} Poor, ${hundred.NormalOre} Normal, ${hundred.RichOre} Rich, ${hundred.Ingots} Ingots, ${hundred.DoubleIngots} Double Ingots`);
            console.log(`Total: ${hundred.sum}mb`);
            console.log(`Charcoal required: ${numItems} Charcoal`);
        }
    });
}
exports.BloomeryCalculator = BloomeryCalculator;
let alloys = {
    "Bronze": {
        tin: { min: 0.08, max: 0.12 },
        copper: { min: 0.88, max: 0.92 }
    },
    "Rose-Gold": {
        copper: { min: 0.15, max: 0.3 },
        gold: { min: 0.7, max: 0.85 }
    },
    "Sterling-Silver": {
        copper: { min: 0.2, max: 0.4 },
        silver: { min: 0.6, max: 0.8 }
    },
    "Brass": {
        copper: { min: 0.88, max: 0.92 },
        zinc: { min: 0.08, max: 0.12 }
    },
    "Bismuth-Bronze": {
        bismuth: { min: 0.1, max: 0.2 },
        zinc: { min: 0.2, max: 0.3 },
        copper: { min: 0.5, max: 0.65 }
    },
    "Black-Bronze": {
        copper: { min: 0.5, max: 0.7 },
        gold: { min: 0.1, max: 0.25, },
        silver: { min: 0.1, max: 0.25 }
    },
    "Weak-Steel": {
        steel: { min: 0.5, max: 0.7 },
        nickel: { min: 0.15, max: 0.25 },
        blackBronze: { min: 0.15, max: 0.25 }
    },
    "Stainless-Steel": {
        steel: { min: 0.6, max: 0.8 },
        nickel: { min: 0.1, max: 0.2 },
        chromium: { min: 0.2, max: 0.3 }
    },
    "Weak-Red-Steel": {
        roseGold: { min: 0.1, max: 0.15 },
        steel: { min: 0.2, max: 0.25 },
        brass: { min: 0.1, max: 0.15 },
        blackSteel: { min: 0.5, max: 0.55 }
    },
    "Weak-Blue-Steel": {
        sterlingSilver: { min: 0.1, max: 0.15 },
        steel: { min: 0.2, max: 0.25 },
        bismuthBronze: { min: 0.1, max: 0.15 },
        blackSteel: { min: 0.5, max: 0.55 }
    },
};
//# sourceMappingURL=Calculator.js.map