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
const Calculator_1 = require("./Calculator");
const amounts = __importStar(require("./amounts.json"));
let data = amounts;
console.log("Tin:\n");
(0, Calculator_1.outputCalculated)(data.Tin);
console.log("\nCopper:\n");
(0, Calculator_1.outputCalculated)(data.Copper);
console.log("\nIron:\n");
(0, Calculator_1.BloomeryCalculator)(data.Iron);
console.log("\nZinc:\n");
(0, Calculator_1.outputCalculated)(data.Zinc);
console.log("\nIron:\n");
(0, Calculator_1.outputCalculated)(data.Iron);
console.log("\nSilver:\n");
(0, Calculator_1.outputCalculated)(data.Silver);
console.log("\nGold:\n");
(0, Calculator_1.outputCalculated)(data.Gold);
console.log("\nNickel:\n");
(0, Calculator_1.outputCalculated)(data.Nickel);
console.log("\nBismuth:\n");
(0, Calculator_1.outputCalculated)(data.Bismuth);
console.log("\nBronze:\n");
let val = (0, Calculator_1.TwoMetalAlloy)({ ore: data.Tin, ratio: { min: 0.08, max: 0.12 } }, { ore: data.Copper, ratio: { min: 0.88, max: 0.92 } });
if (val != null) {
    (0, Calculator_1.outputCalculatedAlloy)(val);
}
console.log("\nBismuth Bronze:\n");
let val1 = (0, Calculator_1.ThreeMetalAlloy)({ ore: data.Bismuth, ratio: { min: 0.1, max: 0.2 } }, { ore: data.Zinc, ratio: { min: 0.2, max: 0.3 } }, { ore: data.Copper, ratio: { min: 0.5, max: 0.65 } });
if (val1 != null) {
    (0, Calculator_1.outputCalculatedAlloy)(val1);
}
//# sourceMappingURL=example.js.map