class ProfileData {
    public searchUrl: string;
    public basicInfo: BasicInfo;
    public objective: string;
    public about: string;
    public knowledge: Knowledge[];
    public skill: Skill[];
}

class BasicInfo {
    public profileImage: string;
    public title: string;
    public name: string;
    public phoneNumber: number;
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

declare module 'profileData' {
    export = ProfileData;
}

declare module 'knowledge' {
    export = Knowledge;
}

declare module 'skill' {
    export = Skill;
}