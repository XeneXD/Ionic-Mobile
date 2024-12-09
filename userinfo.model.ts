export const Gender = {
    Male: "Male",
    Female: "Female",
    Other: "Other"
} as const; 

export const CivilStatus = {
    Single: "Single",
    Married: "Married",
    Divorced: "Divorced",
    Widowed: "Widowed",
    Separated: "Separated"
} as const; 

export class UserInfo {
    firstname: string;
    middlename: string;
    lastname: string;
    phoneno: string;
    gender: typeof Gender[keyof typeof Gender];
    birthdate: Date;
    address: string;
    civilStatus: typeof CivilStatus[keyof typeof CivilStatus]; 

    constructor(
        firstname: string,
        middlename: string,
        lastname: string,
        phoneno: string,
        gender: typeof Gender[keyof typeof Gender],
        birthdate: Date,
        address: string,
        civilStatus: typeof CivilStatus[keyof typeof CivilStatus]
    ) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.phoneno = phoneno;
        this.gender = gender;
        this.birthdate = birthdate;
        this.address = address;
        this.civilStatus = civilStatus;
    }

    getFullName(): string {
        return `${this.firstname} ${this.middlename} ${this.lastname}`;
    }

    logUserInfo(): void {
        console.log(`User Info: ${this.getFullName()}, Phone: ${this.phoneno}, Gender: ${this.gender}, Birthdate: ${this.birthdate.toDateString()}, Address: ${this.address}, Civil Status: ${this.civilStatus}`);
    }
}

