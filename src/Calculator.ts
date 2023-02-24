/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
export function calculateOres(ore: Ores, total?: number, bypass100max = false): OreResults {
    let max15s = ore.PoorOre;
    let max25s = ore.NormalOre;
    let max35s = ore.RichOre;
    let results: Ores[] = [];
    let hundredarray: Ores[] = [];
    let max: Ores = {PoorOre: 0, NormalOre: 0, RichOre: 0, sum: 0, Name: ore.Name};

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
                if (sum > max.sum! && (sum % 100 == 0 || bypass100max)) {
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

    return {results: results, max: max, hundredarray: hundredarray};
}


export function outputCalculated(ore: Ores, total: number, bypass100max = false) {
    let output = "";
    let calculated = calculateOres(ore, total, bypass100max);
    let results = calculated.results;
    let max = calculated.max;

    if (results.length === 0) {
        output += "It is impossible to add up to " + total + "\n";
    } else {
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
    output += "Total value: " + max.sum! / 100 + " Ingots";
    console.log(output);
}

export function TwoMetalAlloy(ore1: Ores, ore2: Ores, ore1ratio: number, ore2ratio:number): TwoMetalAlloyValue | null {
    if (ore2.PoorOre > ore1.PoorOre) {
        ore2.PoorOre = ore1.PoorOre;
    } else {
        ore1.PoorOre = ore2.PoorOre;
    }

    if (ore2.NormalOre > ore1.NormalOre) {
        ore2.NormalOre = ore1.NormalOre;
    } else {
        ore1.NormalOre = ore2.NormalOre;
    }

    if (ore2.RichOre > ore1.RichOre) {
        ore2.RichOre = ore1.RichOre;
    } else {
        ore1.RichOre = ore2.RichOre;
    }

    let ore1max = ore1.PoorOre * 15 + ore1.NormalOre * 25 + ore1.RichOre * 35;
    let ore2max = ore2.PoorOre * 15 + ore2.NormalOre * 25 + ore2.RichOre * 35;
    let CalculatedAlloyOre1: OreResults | undefined, CalculatedAlloyOre2: OreResults | undefined;

    // ore2
    for (let i = 0; i <= ore2max; i++) {
        if (Number.isInteger((ore2max - i) * ore2ratio)) {
            CalculatedAlloyOre2 = calculateOres(ore2, (ore2max - i) * ore2ratio);
            if (CalculatedAlloyOre2.results[0] != undefined) break;
        }
    }
    // ore1
    for (let i = 0; i <= ore1max; i++) {
        if (Number.isInteger((ore1max - i) * ore1ratio)) {
            CalculatedAlloyOre1 = calculateOres(ore1, (ore1max - i)* ore1ratio);
            if (CalculatedAlloyOre1.results[0] != undefined) break;
        }
    }
   
    if (CalculatedAlloyOre2 == undefined || CalculatedAlloyOre1 == undefined || CalculatedAlloyOre1.results[0] == undefined || CalculatedAlloyOre2.results[0] == undefined) {
        console.log("This is impossible");
        return null;
    }
    return {ore1: CalculatedAlloyOre1.results[0], ore2: CalculatedAlloyOre2.results[0]};
}
// this will probably be terrible when doing more than two metals as its just brute force
export function TwoMetalAlloyCalculator(ore1: Ores, ore2: Ores, ore1Min: number, ore1Max: number, ore2Min:number, ore2Max:number) {
    let v: {ore1: Ores, ore2: Ores, ore1Perc: number, ore2Perc:number, total:number} | null = null;
    for (let i = ore1Min; i <= ore1Max; i = i+0.0001) {
        for (let j = ore2Min; j <= ore2Max; j = j+0.0001) {
            i = parseFloat(i.toFixed(4)); // 4 decimals are probably fine right, cant go more otherwise way too slow lmao
            j = parseFloat(j.toFixed(4));
            if (i+j > 1) {
                continue;
            }
            let value = TwoMetalAlloy(ore1, ore2, i, j);
            if (value == null) continue;
            let total = value.ore1.PoorOre * 15 + value.ore1.NormalOre * 25 + value.ore1.RichOre * 35 + value.ore2.PoorOre * 15 + value.ore2.NormalOre * 25 + value.ore2.RichOre * 35;
            if (total % 100 == 0 && (v == null || v.total < total)) {
                v = {ore1: value.ore1, ore2: value.ore2, ore1Perc: i, ore2Perc: j, total: total};
            }
        }
    }
    if (v == null) {
        console.log("This is impossible");
        return;
    }

    console.log(`${ore1.Name} required: ${v.ore1.PoorOre} Poor, ${v.ore1.NormalOre} Normal, ${v.ore1.RichOre} Rich (${v.ore1Perc}%)`);
    console.log(`${ore2.Name} required: ${v.ore2.PoorOre} Poor, ${v.ore2.NormalOre} Normal, ${v.ore2.RichOre} Rich (${v.ore2Perc}%)`);
    console.log(`Total: ${v.total}mb`);
}

export function BloomeryCalculator(iron:Ores, bloomeryCapacity = 24) {
    // max 24 ore and 24 charcoal
    let calculatedIron = calculateOres(iron, undefined);
    let itemswithincapacity: Ores[] = [];
    calculatedIron.hundredarray.forEach(hundred => {
        let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre;
        if (numItems <= bloomeryCapacity) {
            itemswithincapacity.push(hundred);
        }
    });
  
    itemswithincapacity.sort((a, b) => { return b.sum! - a.sum!; }); // sort by highest-lowest
    let maxsum = itemswithincapacity[0].sum!;
    itemswithincapacity.forEach(hundred => {
        if (hundred.sum! == maxsum) {
            let numItems = hundred.PoorOre + hundred.NormalOre + hundred.RichOre;
            console.log(`Iron required: ${hundred.PoorOre} Poor, ${hundred.NormalOre} Normal, ${hundred.RichOre} Rich`);
            console.log(`Total: ${hundred.sum}mb`);
            console.log(`Charcoal required: ${numItems} Charcoal`);
        }
    });
}
