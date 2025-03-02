import IPeopleDto from "../dto/IPeopleDto";

export default interface PeopleService {
    addPeople(newPeople: IPeopleDto): Promise<boolean>;

    getAllPeoples(): Promise<IPeopleDto[]>;

    getPeopleById(id: number): Promise<IPeopleDto>;

}