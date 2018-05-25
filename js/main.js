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
var place = /** @class */ (function () {
    function place(image, address, zip, city) {
        this.image = image;
        this.address = address;
        this.zip = zip;
        this.city = city;
    }
    place.prototype.render = function () {
    };
    return place;
}());
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
