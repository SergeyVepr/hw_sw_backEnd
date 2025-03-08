"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("../../models/Planet");
const doc2Dto_1 = require("../../utils/doc2Dto");
class PlanetServiceImpl {
    addPlanet(newPlanet) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newPlanet.id == null) {
                return false;
            }
            const planet = new Planet_1.Planet(newPlanet);
            yield planet.save();
            return true;
        });
    }
    getAllPlanets() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPlanet = yield Planet_1.Planet.find();
            return allPlanet.map(planet => (0, doc2Dto_1.doc2DtoPlanet)(planet));
        });
    }
    getPlanetsById(idSearch) {
        return __awaiter(this, void 0, void 0, function* () {
            const planet = yield Planet_1.Planet.findOne({ id: idSearch });
            if (!planet) {
                throw new Error("Not find planet");
            }
            return (0, doc2Dto_1.doc2DtoPlanet)(planet);
        });
    }
}
exports.default = PlanetServiceImpl;
