"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IPlanetDto {
    constructor(climate, created, diameter, edited, gravity, id, name, orbital_period, population, rotation_period, surface_water, terrain) {
        this.climate = climate;
        this.created = created;
        this.diameter = diameter;
        this.edited = edited;
        this.gravity = gravity;
        this.id = id;
        this.name = name;
        this.orbital_period = orbital_period;
        this.population = population;
        this.rotation_period = rotation_period;
        this.surface_water = surface_water;
        this.terrain = terrain;
    }
}
exports.default = IPlanetDto;
