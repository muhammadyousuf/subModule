"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var SayHello = function (_a) {
    var formName = _a.formName, title = _a.title, onPress = _a.onPress, type = _a.type;
    return (react_1.default.createElement("div", { style: {
            marginLeft: "-100px",
            marginTop: "-100px",
            top: "50%",
            left: "50%",
            position: "fixed"
        } },
        react_1.default.createElement(core_1.Typography, { variant: "h4", component: "h4" }, formName),
        react_1.default.createElement("form", { noValidate: true, autoComplete: "off" },
            react_1.default.createElement(core_1.TextField, { id: "name", label: "username" }),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.TextField, { id: "email", label: "email", type: "email" }),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.TextField, { id: "password", label: "password", type: "password" }),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.Button, { variant: "contained", color: type, onClick: onPress }, title))));
};
exports.default = SayHello;
