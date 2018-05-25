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
		return `
			<div class="col-lg-6 border">
				<div class="row no-gutters">
					<div class="col-lg-5 border">
						<img src="${this.image}" alt="${this.address}-Image">
					</div>
					<div class="col-lg-7 border">
						<address>
							${this.address}
							${this.zip}
							${this.city}
						</address>
					</div>
				</div>
			</div>
		`
	}

}


//place > restaurant 
class restaurant extends place implements iRestaurant {

	constructor(image, address, zip, city, public tel, public web, public type){
		super(image, address, zip, city);
	}

	render2(){
		return `${super.render()}TEL: ${this.tel} | WEB: ${this.web} | TYPE: ${this.type}`;
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

//Restaurants
let restaurants = [
	new restaurant("rpic1", "radd1", "rzip1", "rcity1", "tel1", "web1", "tpye1"),
	new restaurant("rpic2", "radd2", "rzip2", "rcity2", "tel2", "web2", "tpye2")

]

//LOOP THROUGH ARRAYS AND OUTPUT ON PAGE -------------------------------------------------------------

//Places
for (let pla of places){

	$('#test').append(pla.render());

}

//Restaurants
for (let res of restaurants){
	console.log(res.render2());
}