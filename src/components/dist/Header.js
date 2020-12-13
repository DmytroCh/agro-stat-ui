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
var semantic_ui_react_1 = require("semantic-ui-react");
// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { activeItem: 'home' };
        _this.handleMenuItemClick = function (e, _a) {
            var name = _a.name;
            _this.setState({ activeItem: name });
        };
        _this.handleDropdownItemClick = function (e, _a) {
            var name = _a.name;
            _this.setState({ activeItem: name });
        };
        return _this;
    }
    // Before the component mounts, we initialise our state
    Header.prototype.componentWillMount = function () {
    };
    // After the component did mount, we set the state each second.
    Header.prototype.componentDidMount = function () {
    };
    Header.prototype.render = function () {
        var activeItem = this.state.activeItem;
        return (react_1["default"].createElement(semantic_ui_react_1.Segment, { inverted: true },
            react_1["default"].createElement(semantic_ui_react_1.Menu, { inverted: true, secondary: true },
                react_1["default"].createElement(semantic_ui_react_1.Dropdown, { text: 'Charts', pointing: true, className: 'link item' },
                    react_1["default"].createElement(semantic_ui_react_1.Dropdown.Menu, null,
                        react_1["default"].createElement(semantic_ui_react_1.Dropdown.Header, null, "Crops"),
                        react_1["default"].createElement(semantic_ui_react_1.Dropdown.Item, null,
                            react_1["default"].createElement(semantic_ui_react_1.Dropdown, { text: 'Wheat' },
                                react_1["default"].createElement(semantic_ui_react_1.Dropdown.Menu, null,
                                    react_1["default"].createElement(semantic_ui_react_1.Dropdown.Item, { name: '2-nd-class', text: '2-nd Class', active: activeItem === '2-nd-class', onClick: this.handleDropdownItemClick }),
                                    react_1["default"].createElement(semantic_ui_react_1.Dropdown.Item, { name: '3-rd-class', text: '3-rd Class', active: activeItem === '3-rd-class', onClick: this.handleDropdownItemClick }),
                                    react_1["default"].createElement(semantic_ui_react_1.Dropdown.Item, { name: '4-th-class', text: '4-th Class', active: activeItem === '4-th-class', onClick: this.handleDropdownItemClick })))),
                        react_1["default"].createElement(semantic_ui_react_1.Dropdown.Item, { name: 'sunflowers', text: 'Sunflowers', active: activeItem === 'sunflowers', onClick: this.handleDropdownItemClick }))),
                react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { name: 'about us', active: activeItem === 'about us', onClick: this.handleMenuItemClick }))));
    };
    return Header;
}(react_1.Component));
exports["default"] = Header;
