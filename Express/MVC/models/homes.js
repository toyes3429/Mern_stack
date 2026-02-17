//fake database
const homes=[];
const home_details=[];

class home{
    constructor(housename){
        this.HouseName=housename;
    }

    save(){
        homes.push(this);
    }

    static fetchAll(){
        return homes;
    }
}

class home_detail{
    constructor(name, email, rating,feedback){
        this.name = name;
        this.email = email;
        this.rating = rating ;
        this.feedback=feedback;
    }

    save(){
        home_details.push(this);
    }

    static fetchAll(){
        return home_details;
    }
}

module.exports = {
    home: home,
    home_detail: home_detail
}