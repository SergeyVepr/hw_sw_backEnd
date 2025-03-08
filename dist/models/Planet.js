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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const PlanetSchema = new mongoose_1.Schema({
    climate: { type: String, required: true },
    created: { type: String, required: true },
    diameter: { type: String, required: true },
    edited: { type: String, required: true },
    gravity: { type: String, required: true },
    id: { type: Number, required: true, unique: [true, "Duplicate ID"] },
    name: { type: String, required: true },
    orbital_period: { type: String, required: true },
    population: { type: String, required: true },
    rotation_period: { type: String, required: true },
    surface_water: { type: String, required: true },
    terrain: { type: String, required: true }
});
exports.Planet = mongoose_1.default.model('Planet', PlanetSchema);
