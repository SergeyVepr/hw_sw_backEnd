"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const PeopleServiceImpl_1 = __importDefault(require("../services/impl/PeopleServiceImpl"));
let PeopleController = class PeopleController {
    constructor() {
        this.peopleService = new PeopleServiceImpl_1.default();
    }
    addPeople(newPeople, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.peopleService.addPeople(newPeople)
                .then(() => res.status(200).json({ result }))
                .catch(err => res.status(409).send(err.message));
            return result;
        });
    }
    getAllPeoples(res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.peopleService.getAllPeoples();
        });
    }
    getPeopleById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.peopleService.getPeopleById(id);
        });
    }
};
__decorate([
    (0, routing_controllers_1.Post)('/v1/peoples'),
    __param(0, (0, routing_controllers_1.Body)()),
    __param(1, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "addPeople", null);
__decorate([
    (0, routing_controllers_1.Get)('/v1/peoples'),
    __param(0, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "getAllPeoples", null);
__decorate([
    (0, routing_controllers_1.Get)('/v1/peoples/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __param(1, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "getPeopleById", null);
PeopleController = __decorate([
    (0, routing_controllers_1.Controller)()
], PeopleController);
exports.default = PeopleController;
