export class University{
    constructor( username, name, website, address, headquarters, affiliation, 
        description, founderName, yearFounded, numOfStudents){        
        this.id = new Date().getTime();
        this.username = username;
        this.name = name;
        this.website = website;
        this.address = address;
        this.headquarters = headquarters;
        this.affiliation = affiliation;
        this.description = description;
        this.founderName = founderName;
        this.yearFounded = yearFounded;
        this.numOfStudents = numOfStudents;
    }
};
