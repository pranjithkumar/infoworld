class ProfileData {
    public searchUrl: string;
    public basicInfo: BasicInfo;
    public objective: string;
    public about: string;
}

class BasicInfo {
    public profileImage: string;
    public name: string;
    public phoneNumber: number;
    public contryCode: number;
    public address: string;
    public currentProfession: string;
}


declare module 'profileData' {
    export = ProfileData;
}