class ProfileData {
    public searchUrl: string;
    public basicInfo: BasicInfo;
    public objective: string;
    public about: string;
    public knowledge: Knowledge[];
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

declare module 'profileData' {
    export = ProfileData;
}

declare module 'knowledge' {
    export = Knowledge;
}