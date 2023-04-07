import { RESTDataSource } from "@apollo/datasource-rest";

class SWAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `https://graphql.org/swapi-graphql`;// `https://swapi.dev/api`
    }

    getAllPerson() {
        return this.get(`person/`);
    }

    getPersonByName(personId: number) {
        return this.get(`person/${personId}`)
    }
}

export default SWAPI;