//INTERFACES FOR CLASSES -----------------------------------------------------------------------------

//place interface
interface iPlace {
	image: string;
	address: string;
	zip: number;
	city: string;
}

//restaurant interface
interface iRestaurant {
	tel: number;
	web: string;
	type: string;
}

//concert interface
interface iConcert {
	date: string;
	time: string;
	price: number;
}



//CLASSES ---------------------------------------------------------------------------------------------

//SUPER place *cant use location = reserved in JS
class place implements iPlace{

	constructor(public image, public address, public zip, public city ){}

	render(){
		return `Image: ${this.image} | Adress: ${this.address} | ZIP: ${this.zip} | City: ${this.city}`;
	}

}


//place > restaurant 
class restaurant extends place implements iRestaurant {

	constructor(image, address, zip, city, public tel, public web, public type){
		super(image, address, zip, city);
	}

}


//place > concert *cant use event = reserved in JS
class concert extends place {

	constructor(image, address, zip, city, public date, public time, public price){
		super(image, address, zip, city);
	}

}



//CREATE OBJECTS IN ARRAY ----------------------------------------------------------------------------

//Places
let places = [
new place("Pic1", "Address1", "Zip1", "City1"),
new place("Pic2", "Address2", "Zip2", "City2")
]


for (var value of places){

	console.log(value.render());

}