"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react"); // let's also import Component
var Chart_1 = require("./Chart");
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            size: {
                width: 0,
                height: 0
            }
        };
        _this.data = [
            {
                "date": "10-12-2014",
                "price": 2100
            },
            {
                "date": "10-12-2015",
                "price": 2000
            },
            {
                "date": "10-12-2016",
                "price": 1700
            },
            {
                "date": "10-12-2017",
                "price": 2100
            },
            {
                "date": "10-12-2018",
                "price": 2500
            },
            {
                "date": "10-12-2019",
                "price": 2650
            },
            {
                "date": "10-12-2020",
                "price": 2400
            }
        ];
        return _this;
    }
    Content.prototype.updateWindowSize = function () {
        var parent = document.getElementById('content');
        var maxHeight = this.setState(function (prevState) {
            return { size: {
                    width: parent ? parent.clientWidth : prevState.size.width,
                    height: parent ? parent.clientHeight < parent.clientWidth ? parent.clientHeight : parent.clientWidth : prevState.size.height
                } };
        });
    };
    Content.prototype.componentDidMount = function () {
        this.updateWindowSize();
        // listener for screen size changes
        window.addEventListener('resize', this.updateWindowSize.bind(this));
    };
    Content.prototype.componentWillUnmount = function () {
        // remove listener to avoid memory leaks
        window.removeEventListener('resize', this.updateWindowSize.bind(this));
    };
    Content.prototype.render = function () {
        return (react_1["default"].createElement("div", { id: 'content' },
            react_1["default"].createElement(Chart_1["default"], { width: this.state.size.width, height: this.state.size.height, data: this.data })));
    };
    return Content;
}(react_1.Component));
exports["default"] = Content;
