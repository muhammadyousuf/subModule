import React from "react";
import { Button, TextField, Typography } from '@material-ui/core';
var SayHello = function (_a) {
    var formName = _a.formName, title = _a.title, onPress = _a.onPress, type = _a.type;
    return (React.createElement("div", { style: {
            marginLeft: "-100px",
            marginTop: "-100px",
            top: "50%",
            left: "50%",
            position: "fixed"
        } },
        React.createElement(Typography, { variant: "h4", component: "h4" }, formName),
        React.createElement("form", { noValidate: true, autoComplete: "off" },
            React.createElement(TextField, { id: "name", label: "username" }),
            React.createElement("br", null),
            React.createElement(TextField, { id: "email", label: "email", type: "email" }),
            React.createElement("br", null),
            React.createElement(TextField, { id: "password", label: "password", type: "password" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(Button, { variant: "contained", color: type, onClick: onPress }, title))));
};
export default SayHello;
