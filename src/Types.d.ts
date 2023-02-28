interface TwoMetals {
  ore1: Ores;
  ore2: Ores;
}
interface TwoMetalAlloyTestValue {
  ore1: OreResults;
  ore2: OreResults;
}

interface Ratio {
  min: number;
  max: number;
}

interface Ores {
  PoorOre: number;
  NormalOre: number;
  RichOre: number;
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