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
var readlineSync = require('readline-sync');
const Area = __importStar(require("./area"));
const Capacity = __importStar(require("./capacity"));
const Length = __importStar(require("./length"));
const Mass = __importStar(require("./mass"));
const Volume = __importStar(require("./volume"));
function chooseUnitToConvert() {
    const unitToConvert = readlineSync.question(`Que tipo de conversão você quer fazer?
  (area, capacidade, comprimentp, massa ou volume)`);
    switch (unitToConvert) {
        case 'area':
            Area.exec();
            break;
        case 'capacidade':
            Capacity.exec();
            break;
        case 'comprimento':
            Length.exec();
            break;
        case 'massa':
            Mass.exec();
            break;
        case 'volume':
            Volume.exec();
            break;
        default:
            console.log(`Desculpe ${unitToConvert} não é um tipo de conversão conhecido.`);
    }
    ;
}
;
chooseUnitToConvert();
