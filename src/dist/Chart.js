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
var recharts_1 = require("recharts");
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    // Before the component mounts, we initialise our state
    Chart.prototype.componentWillMount = function () {
    };
    // After the component did mount, we set the state each second.
    Chart.prototype.componentDidMount = function () {
    };
    Chart.prototype.render = function () {
        return (react_1["default"].createElement(recharts_1.LineChart, { width: window.innerWidth, height: (window.innerWidth / 21) * 9, data: this.data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },
            react_1["default"].createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
            react_1["default"].createElement(recharts_1.XAxis, { dataKey: "date" }),
            react_1["default"].createElement(recharts_1.YAxis, null),
            react_1["default"].createElement(recharts_1.Tooltip, null),
            react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: "price", stroke: "#82ca9d" })));
    };
    return Chart;
}(react_1.Component));
exports["default"] = Chart;
