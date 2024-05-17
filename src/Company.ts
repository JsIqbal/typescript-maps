import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    getContent(): string {
        return `
            <div>
                <h4>Name of the user is:  ${this.companyName}</h4>
                <P>Catchphrase: ${this.catchPhrase}</p>
            </div>
        `;
    }
}
