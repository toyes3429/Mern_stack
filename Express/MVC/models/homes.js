//fake database
const homes=[];

module.exports = class home{
    constructor(housename){
        this.housename=housename;

    }

    save(){
        homes.push(this);
    }

    static fetchAll(){
        return homes;
    }
}