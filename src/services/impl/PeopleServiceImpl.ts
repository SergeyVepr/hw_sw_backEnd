import PeopleService from "../PeopleService";
import IPeopleDto from "../../dto/IPeopleDto";
import {Character as C} from "../../models/Character";
import {doc2DtoPeople} from "../../utils/doc2Dto";

export default class PeopleServiceImpl implements  PeopleService{
   async addPeople(newPeople: IPeopleDto): Promise<boolean> {
        if (newPeople.id == null) {
            return false;
        }
        const character = new C(newPeople);
        await character.save();
        return true;
    }

   async getAllPeoples(): Promise<IPeopleDto[]> {
        const allPeoples = await C.find();
        return allPeoples.map(people => doc2DtoPeople(people));
    }

   async getPeopleById(idSearch: number): Promise<IPeopleDto> {
        const people = await C.findOne({id: idSearch});
        if (!people) {
            throw new Error("Char not found!");
        }else{
            return doc2DtoPeople(people)
        }
    }
}