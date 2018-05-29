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
abstract class Attentions {
	constructor(public posted, public title, public image, public address, public zip, public city ){
	
	}

	render(details) {

		$('#test').append(`
			<div class="col-lg-3 col-md-6 col-12 entry" data-posted="${this.posted.getTime()}">
				<div class="row pic no-gutters">
					<div class="col-lg-12 text-center"><h4>${this.title}</h4></div>
					<div class="col-lg-12 d-none d-md-block">
						<img class="img-fluid" src="${this.image}" alt="${this.address}-Image">
					</div>
					<div class="col-lg-12 details border-top border-bottom">
						${details}
					</div>
					<small class="posted">Created: ${this.posted.toLocaleString("de-DE")}</small>
				</div>
			</div>
		`)

	}
}


//SUPER place 
class place extends Attentions implements iPlace{

	constructor(posted, title, image, address, zip, city){
		super (posted, title, image, address, zip, city);
	}

	render(){
		let details = `${this.address}<br>${this.zip}${this.city}<br>`;
		super.render(details);
	}

}


//place > restaurant 
class restaurant extends Attentions implements iRestaurant {

	constructor(posted, title, image, address, zip, city, public tel, public web, public type){
		super(posted, title, image, address, zip, city);
	}

	render() {

		let details = `
			${this.address}<br>
			${this.zip} ${this.city}<br>
			${this.tel}<br>
			<a href="${this.web}" target="_blank">${this.web}</a><br>
			<small>${this.type}</small>
		`;

		super.render(details);
		
	}

}


//place > concert 
class concert extends Attentions {

	constructor(posted, title, image, address, zip, city, public date, public time, public price){
		super(posted, title, image, address, zip, city);
	}

	render() {

		let details = `
			${this.address}<br>
			${this.zip} ${this.city}<br>
			<strong>${this.date}${this.time}</strong><br>
			<span class="float-right text-danger">sold out <del>${this.price}</del></span>
		`;

		super.render(details);
		
	}	

}



//CREATE OBJECTS IN ARRAY ----------------------------------------------------------------------------

let all = [
	new restaurant(new Date("2018-05-20T23:00"), "Soba Noodle Bar", "./img/noodlebar.jpg", "Rechte Wienzeile 37", "1040", "Vienna", "+43 1 286 57 60", "http://www.soba.wien/", "japanese"),
	new restaurant(new Date("2017-02-03T14:10"), "Motto", "./img/motto.jpg", "Schönbrunner Straße 30", "1050", "Vienna", "+43 1 5870672", "http://www.motto.wien/", "austrian"),
	new concert(new Date("2009-08-04T10:49"), "Metallica", "./img/metallica.jpg", "Wiener Stadthalle <br>Roland Rainer Platz 1", "1150", "Vienna", "03.06.2009", "@20:00", "63,00€"),
	new concert(new Date("2010-09-20T13:08"), "Apocalyptica", "./img/apocalyptica.jpg", "Gasometer <br>Guglgasse 8", "1110", "Vienna", "19.10.2010", "@19:30", "78,00€"),
	new place(new Date("2005-04-04T12:45"), "Trelleborg", "./img/viking.jpg", "Trelleborg Alle 4", "4200", "Denmark - Slagelse"),
	new place(new Date("2007-05-12T08:12"), "Hamburg Dungeon","./img/dungeon.jpg", "Kehrwieder 2", "20457", "Germany - Hamburg")
]




//LOOP THROUGH ARRAY AND OUTPUT ON PAGE -------------------------------------------------------------

for (let one of all){
	one.render();
}



//SORTING-------------------------------------------------------------------------------------------
//Ascending
$('#asc').on('click', function() {
    var sorted = $(".entry").sort(function(a, b) {
        return a.getAttribute('data-posted') > b.getAttribute('data-posted');
    });
    //detach cards and append again to container
    sorted.detach().hide().fadeIn(450).appendTo('#test');
});
//Descending
$('#desc').on('click', function() {
    var sorted = $(".entry").sort(function(a, b) {
        return a.getAttribute('data-posted') < b.getAttribute('data-posted');
    });
    //detach cards and append again to container
    sorted.detach().hide().fadeIn(450).appendTo('#test');
});