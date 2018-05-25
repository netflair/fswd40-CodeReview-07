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
//SUPER place *cant use location = reserved in JS
var place = /** @class */ (function () {
    function place(image, address, zip, city) {
        this.image = image;
        this.address = address;
        this.zip = zip;
        this.city = city;
    }
    place.prototype.render = function () {
        return "\n\t\t\t<div class=\"col-lg-6 border\">\n\t\t\t\t<div class=\"row no-gutters\">\n\t\t\t\t\t<div class=\"col-lg-5 border\">\n\t\t\t\t\t\t<img src=\"" + this.image + "\" alt=\"" + this.address + "-Image\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 border\">\n\t\t\t\t\t\t<address>\n\t\t\t\t\t\t\t" + this.address + "\n\t\t\t\t\t\t\t" + this.zip + "\n\t\t\t\t\t\t\t" + this.city + "\n\t\t\t\t\t\t</address>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return place;
}());
//place > restaurant 
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(image, address, zip, city, tel, web, type) {
        var _this = _super.call(this, image, address, zip, city) || this;
        _this.tel = tel;
        _this.web = web;
        _this.type = type;
        return _this;
    }
    restaurant.prototype.render2 = function () {
        return _super.prototype.render.call(this) + "TEL: " + this.tel + " | WEB: " + this.web + " | TYPE: " + this.type;
    };
    return restaurant;
}(place));
//place > concert *cant use event = reserved in JS
var concert = /** @class */ (function (_super) {
    __extends(concert, _super);
    function concert(image, address, zip, city, date, time, price) {
        var _this = _super.call(this, image, address, zip, city) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    return concert;
}(place));
//CREATE OBJECTS IN ARRAY ----------------------------------------------------------------------------
//Places
var places = [
    new place("Pic1", "Address1", "Zip1", "City1"),
    new place("Pic2", "Address2", "Zip2", "City2")
];
//Restaurants
var restaurants = [
    new restaurant("rpic1", "radd1", "rzip1", "rcity1", "tel1", "web1", "tpye1"),
    new restaurant("rpic2", "radd2", "rzip2", "rcity2", "tel2", "web2", "tpye2")
];
//LOOP THROUGH ARRAYS AND OUTPUT ON PAGE -------------------------------------------------------------
//Places
for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
    var pla = places_1[_i];
    $('#test').append(pla.render());
}
//Restaurants
for (var _a = 0, restaurants_1 = restaurants; _a < restaurants_1.length; _a++) {
    var res = restaurants_1[_a];
    console.log(res.render2());
}
