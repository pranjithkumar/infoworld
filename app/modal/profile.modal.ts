class ProfileData {
    public searchUrl: string;
    public basicInfo: BasicInfo;
    public objective: string;
    public about: string;
    public knowledge: Knowledge[];
    public skill: Skill[];
    public exprience: CardInfo[];
    public education: CardInfo[];
}

class CardInfo {
    public from: number;
    public to: number;
    public title: string;
    public subTitle: string;
    public editInfo: boolean;
    public addAnim: boolean;
    public removeAnim: boolean;
}

class BasicInfo {
    public profileImage: string;
    public displayname: string;
    public emailAddress: string;
    public phoneNumber: number;
    public contryCode: number;
    public address: string;
    public currentProfession: string;
}

class Knowledge {
    public title: string;
    public editStatus: boolean;
}

class Skill {
    public title: string;
    public percentage: number;
}

declare module 'cardinfo' {
    export = CardInfo;
}

declare module 'profileData' {
    export = ProfileData;
}

declare module 'knowledge' {
    export = Knowledge;
}

declare module 'skill' {
    export = Skill;
}