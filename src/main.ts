//place interface
interface iPlace {
	image: string;
	address: string;
	zip: number;
	city: string;
}
//SUPER place *cant use location = reserved in JS
class place implements iPlace{

	constructor(public image, public address, public zip, public city ){}

	render(){

	}
}

//restaurant interface
interface iRestaurant {
	tel: number;
	web: string;
	type: string;
}
//place - restaurant 
class restaurant extends place implements iRestaurant {

	constructor(image, address, zip, city, public tel, public web, public type){
		super(image, address, zip, city);
	}

}

//concert interface
interface iConcert {
	date: string;
	time: string;
	price: number;
}
//place - concert *cant use event = reserved in JS
class concert extends place {

	constructor(image, address, zip, city, public date, public time, public price){
		super(image, address, zip, city);
	}
}
