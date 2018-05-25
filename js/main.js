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
        return "Image: " + this.image + " | Adress: " + this.address + " | ZIP: " + this.zip + " | City: " + this.city;
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
for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
    var value = places_1[_i];
    console.log(value.render());
}
