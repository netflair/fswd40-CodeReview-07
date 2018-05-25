//SUPER place *cant use location = reserved in JS
class place {

	constructor(public image, public address, public zip, public city ){}

	render(){

	}
}

//place - restaurant 
class restaurant extends place {

	constructor(image, address, zip, city, public tel, public web, public type){
		super(image, address, zip, city);
	}

}

//place - concert *cant use event = reserved in JS
class concert extends place {

	constructor(image, address, zip, city, public date, public time, public price){
		super(image, address, zip, city);
	}
}
