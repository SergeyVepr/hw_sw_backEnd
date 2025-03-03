import {Body, Controller, Get, Param, Post, Res} from "routing-controllers";
import {Response} from "express";
import PeopleService from "../services/PeopleService";
import PeopleServiceImpl from "../services/impl/PeopleServiceImpl";
import {ICharacter} from "../models/Character";

@Controller()
export default class PeopleController {
    peopleService: PeopleService = new PeopleServiceImpl();

    @Post('/v1/peoples')
    async addPeople(@Body() newPeople: ICharacter, @Res() res: Response) {
        const result: Response = await this.peopleService.addPeople(newPeople)
            .then(() => res.status(200).json({result}))
            .catch(err => res.status(409).send(err.message));

        return result;
    }

    @Get('/v1/peoples')
    async getAllPeoples(@Res() res: Response) {
        return await this.peopleService.getAllPeoples();
    }

    @Get('/v1/peoples/:id')
    async getPeopleById(@Param('id') id: number, @Res() res: Response) {
        return await this.peopleService.getPeopleById(id);
    }
}