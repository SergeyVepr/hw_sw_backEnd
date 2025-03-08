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
const Character_1 = require("../../models/Character");
const doc2Dto_1 = require("../../utils/doc2Dto");
class PeopleServiceImpl {
    addPeople(newPeople) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newPeople.id == null) {
                return false;
            }
            const character = new Character_1.Character(newPeople);
            yield character.save();
            return true;
        });
    }
    getAllPeoples() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPeoples = yield Character_1.Character.find();
            return allPeoples.map(people => (0, doc2Dto_1.doc2DtoPeople)(people));
        });
    }
    getPeopleById(idSearch) {
        return __awaiter(this, void 0, void 0, function* () {
            // const people = await C.findOneAndUpdate({id: idSearch}, {$set: {image: "https://www.dl.dropboxusercontent.com/scl/fi/nrreafo74lo27umoykvgo/friend8.jpg?rlkey=49rbcanbs4c2hwgib4cajtlw2&st=sf1jceie&dl=0"}});
            const people = yield Character_1.Character.findOne({ id: idSearch });
            if (!people) {
                throw new Error("Char not found!");
            }
            else {
                return (0, doc2Dto_1.doc2DtoPeople)(people);
            }
        });
    }
}
exports.default = PeopleServiceImpl;
