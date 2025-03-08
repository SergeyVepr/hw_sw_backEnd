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
exports.PlanetController = void 0;
const routing_controllers_1 = require("routing-controllers");
const PlanetServiceImpl_1 = __importDefault(require("../services/impl/PlanetServiceImpl"));
let PlanetController = class PlanetController {
    constructor() {
        this.planetService = new PlanetServiceImpl_1.default();
    }
    addPlanet(newPlanet, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.planetService.addPlanet(newPlanet)
                .then((b) => res.status(200).json({ result }))
                .catch(err => res.status(409).send(err.message));
            return result;
        });
    }
    getAllPlanets(res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planetService.getAllPlanets();
        });
    }
    getPlanetById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planetService.getPlanetsById(id);
        });
    }
};
exports.PlanetController = PlanetController;
__decorate([
    (0, routing_controllers_1.Post)('/v1/planets'),
    __param(0, (0, routing_controllers_1.Body)()),
    __param(1, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlanetController.prototype, "addPlanet", null);
__decorate([
    (0, routing_controllers_1.Get)('/v1/planets'),
    __param(0, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanetController.prototype, "getAllPlanets", null);
__decorate([
    (0, routing_controllers_1.Get)('/v1/planets/:id'),
    __param(0, (0, routing_controllers_1.Res)()),
    __param(1, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PlanetController.prototype, "getPlanetById", null);
exports.PlanetController = PlanetController = __decorate([
    (0, routing_controllers_1.Controller)()
], PlanetController);
