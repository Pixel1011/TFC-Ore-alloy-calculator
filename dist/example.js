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
(0, Calculator_1.outputCalculated)(data.Tin, 100);
console.log("\nCopper:\n");
(0, Calculator_1.outputCalculated)(data.Copper, 100);
console.log("\nBronze:\n");
(0, Calculator_1.TwoMetalAlloyCalculator)(data.Tin, data.Copper, 0.08, 0.12, 0.88, 0.92);
console.log("\nIron:\n");
(0, Calculator_1.BloomeryCalculator)(data.Iron);
//# sourceMappingURL=example.js.map