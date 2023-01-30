import { skill } from '../models/model.skills';

export class Developper {

    constructor (public firstname : string, public lastname : string ,public  age : number , public bio : string, public  skills :skill[]) {
        
}}