export class Recipe{
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public imgURL:string,
        public ingredients:Array<{id:number, name:string, amount:number}>
    ){}
}