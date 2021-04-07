import { Student } from "./student";

export interface Students {
    page:number;
    per_page:number;
    total:number;
    data:Student[];
    support:{url:string,text:string};
}