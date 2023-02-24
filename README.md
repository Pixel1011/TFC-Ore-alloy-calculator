# Terrafirmacraft Ore/Alloy Calculator
~~because im lazy cant cant be bothered to do the math~~
## Features
  - Calculates how much copper/tin ore you need to create 100 (or any amount/max amount) mb of metal

  - Calculates how much bronze you can make based off of how much ore you have

  - Calculates how many raw iron blooms you can create based off of how much ore you have
  
  - I'll add other alloys when i get to them in game
 
## Usage
  - Kinda impossible to use if you dont know typescript/javascript
  - Add your ore counts to the amounts.json file
   ```js
   // ore = { PoorOre: 0, NormalOre: 0, RichOre: 0 }
   let temp = calculateOres(Ore, totalMBWanted);
   let results = temp.results; // array of combinations of ores that add up to the totalMBWanted
   let max = temp.max; // max amount of metal you can make with the ore you have
   let hundredarray = temp.hundredarray; // array of combinations of ores that add up to 100mb
   ```
   ```js
    outputCalculator(ore, totalMBWanted) // outputs everything in results and outputs the max value to the console
   ```
   ```js
   // min/max - min/max percentages 
   // prints how much of each ore you need to create the alloy and the total it will make in the percentages given
   TwoMetalAlloyCalculator(Ore1, Ore2, Ore1Min, Ore1Max, Ore2Min, Ore2Max)
   ```
   ```js
   // BloomerySize = number of items the bloomery can hold (max/default 24)
   BloomeryCalculator(Ore, BloomerySize)
   // BloomerySize = number of items the bloomery can hold (max/default 24)
   BloomeryCalculator(Ore, BloomerySize)
   ```



Created for [Gravitas](https://www.curseforge.com/minecraft/modpacks/all-the-mods-gravitas)
