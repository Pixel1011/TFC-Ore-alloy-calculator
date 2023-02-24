interface TwoMetalAlloyValue {
  ore1: Ores;
  ore2: Ores;
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
}