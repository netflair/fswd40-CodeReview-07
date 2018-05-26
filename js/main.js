var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//INTERFACES FOR CLASSES -----------------------------------------------------------------------------
//CLASSES ---------------------------------------------------------------------------------------------
//SUPER place 
var place = /** @class */ (function () {
    function place(posted, title, image, address, zip, city) {
        this.posted = posted;
        this.title = title;
        this.image = image;
        this.address = address;
        this.zip = zip;
        this.city = city;
    }
    place.prototype.render = function (details) {
        if (details === void 0) { details = this.address + "<br>" + this.zip + this.city + "<br>"; }
        $('#test').append("\n\t\t\t<div class=\"col-lg-3 col-md-6 col-12 entry\" data-posted=\"" + this.posted.getTime() + "\">\n\t\t\t\t<div class=\"row pic no-gutters\">\n\t\t\t\t\t<div class=\"col-lg-12 text-center\"><h4>" + this.title + "</h4></div>\n\t\t\t\t\t<div class=\"col-lg-12 d-none d-md-block\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"" + this.image + "\" alt=\"" + this.address + "-Image\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 details border-top border-bottom\">\n\t\t\t\t\t\t" + details + "\n\t\t\t\t\t</div>\n\t\t\t\t\t<small class=\"posted\">Created: " + this.posted.toLocaleString("de-DE") + "</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return place;
}());
//place > restaurant 
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(posted, title, image, address, zip, city, tel, web, type) {
        var _this = _super.call(this, posted, title, image, address, zip, city) || this;
        _this.tel = tel;
        _this.web = web;
        _this.type = type;
        return _this;
    }
    restaurant.prototype.render = function (details) {
        details = "\n\t\t\t" + this.address + "<br>\n\t\t\t" + this.zip + " " + this.city + "<br>\n\t\t\t" + this.tel + "<br>\n\t\t\t<a href=\"" + this.web + "\" target=\"_blank\">" + this.web + "</a><br>\n\t\t\t<small>" + this.type + "</small>\n\t\t";
        _super.prototype.render.call(this, details);
    };
    return restaurant;
}(place));
//place > concert 
var concert = /** @class */ (function (_super) {
    __extends(concert, _super);
    function concert(posted, title, image, address, zip, city, date, time, price) {
        var _this = _super.call(this, posted, title, image, address, zip, city) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    concert.prototype.render = function (details) {
        details = "\n\t\t\t" + this.address + "<br>\n\t\t\t" + this.zip + " " + this.city + "<br>\n\t\t\t<strong>" + this.date + this.time + "</strong><br>\n\t\t\t<span class=\"float-right text-danger\">sold out <del>" + this.price + "</del></span>\n\t\t";
        _super.prototype.render.call(this, details);
    };
    return concert;
}(place));
//CREATE OBJECTS IN ARRAY ----------------------------------------------------------------------------
var all = [
    new restaurant(new Date("2018-05-20T23:00"), "Soba Noodle Bar", "./img/noodlebar.jpg", "Rechte Wienzeile 37", "1040", "Vienna", "+43 1 286 57 60", "http://www.soba.wien/", "japanese"),
    new restaurant(new Date("2017-02-03T14:10"), "Motto", "./img/motto.jpg", "Schönbrunner Straße 30", "1050", "Vienna", "+43 1 5870672", "http://www.motto.wien/", "austrian"),
    new concert(new Date("2009-08-04T10:49"), "Metallica", "./img/metallica.jpg", "Wiener Stadthalle <br>Roland Rainer Platz 1", "1150", "Vienna", "03.06.2009", "@20:00", "63,00€"),
    new concert(new Date("2010-09-20T13:08"), "Apocalyptica", "./img/apocalyptica.jpg", "Gasometer <br>Guglgasse 8", "1110", "Vienna", "19.10.2010", "@19:30", "78,00€"),
    new place(new Date("2005-04-04T12:45"), "Trelleborg", "./img/viking.jpg", "Trelleborg Alle 4", "4200", "Denmark - Slagelse"),
    new place(new Date("2007-05-12T08:12"), "Hamburg Dungeon", "./img/dungeon.jpg", "Kehrwieder 2", "20457", "Germany - Hamburg")
];
//LOOP THROUGH ARRAY AND OUTPUT ON PAGE -------------------------------------------------------------
for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
    var one = all_1[_i];
    var details = void 0;
    one.render(details);
}
//SORTING-------------------------------------------------------------------------------------------
//Ascending
$('#asc').on('click', function () {
    var sorted = $(".entry").sort(function (a, b) {
        return a.getAttribute('data-posted') > b.getAttribute('data-posted');
    });
    //detach cards and append again to container
    sorted.detach().hide().fadeIn(450).appendTo('#test');
});
//Descending
$('#desc').on('click', function () {
    var sorted = $(".entry").sort(function (a, b) {
        return a.getAttribute('data-posted') < b.getAttribute('data-posted');
    });
    //detach cards and append again to container
    sorted.detach().hide().fadeIn(450).appendTo('#test');
});
