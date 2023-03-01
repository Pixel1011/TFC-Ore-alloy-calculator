interface TwoMetals {
  ore1: Ores;
  ore2: Ores;
}
interface AlloyOutput {
  ores: OreResults[];
}
interface AlloyPart {
  ore: Ores;
  ratio: Ratio;
}

interface Ratio {
  min: number;
  max: number;
}

interface Ores {
  PoorOre: number;
  NormalOre: number;
  RichOre: number;
  Ingots: number;
  DoubleIngots: number;
  Name: string;
  sum?: number;
}

interface OreResults {
  results: Ores[];
  max: Ores;
  hundredarray: Ores[];
}

interface IAmounts {
  Tin: Ores;
  Copper: Ores;
  Iron: Ores;
  Zinc: Ores;
  Silver: Ores;
  Gold: Ores;
  Nickel: Ores;
  Bismuth: Ores;
}

interface Alloy {
  name: string;

}