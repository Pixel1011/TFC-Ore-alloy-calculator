# Terrafirmacraft Ore/Alloy Calculator
~~because im lazy cant cant be bothered to do the math~~
## Features
  - Calculates how much ore you need to create a certain amount of mb of metal
  - 
  - Calculates the max number of ingots (or the max ) you can create with your metal 

  - Calculates Any 2 Metal alloys

  - Calculates how many raw iron blooms you can create based off of how much ore you have
  
  - I'll add other alloys when i get to them in game
 
## Usage
  - Download the repo
  - Make sure [Node.js](https://nodejs.org/en/) is installed
  - Open a terminal in the repo folder
  - Run ``npm i``
  - Add ore counts to the amounts.json file in the dist folder, or if using typescript, the amounts.json file in the src folder
  - Run ``node ./dist/example.js``
  ### Or, make your own script
   ```js
   // ore = { PoorOre: 0, NormalOre: 0, RichOre: 0 } // data from the amounts.json file
   let temp = calculateOres(Ore, totalMBWanted);
   let results = temp.results; // array of combinations of ores that add up to the totalMBWanted
   let max = temp.max; // max amount of metal you can make with the ore you have
   let hundredarray = temp.hundredarray; // array of combinations of ores that add up to 100mb
   ```
   ```js
    outputCalculator(ore, totalMBWanted); // outputs min/max ore combinations and outputs the max value to the console
   ```
   ```js
      // eg
      
      // ore1ratio = {min: 0.08, max: 0.12}
      // ore2ratio = {min: 0.88, max: 0.92}

   let temp = TwoMetalAlloy(ore1, ore2, ore1ratio, ore2ratio);
   if (temp != null) outputCalculatedAlloy(temp); // outputs max amount of alloy you can make with the ore you have
   ```
   ```js
   // BloomerySize = number of items the bloomery can hold (max/default 24)
   // outputs number of raw iron blooms you can make with the ore you have
   // kinda useless since you should just use double ingots for most amount witht the least amount of charcoal
   BloomeryCalculator(Ore, BloomerySize)
   ```

## TODO
  - Add alloys that need more than 2 metals
  - Add ingot/double ingot support

Created while playing [Gravitas](https://www.curseforge.com/minecraft/modpacks/all-the-mods-gravitas) (great modpack btw 😊)
