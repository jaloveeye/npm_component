'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var Test = function (props) {
    var size = props.size;
    var createDiv = function () {
        var DIVS = [];
        for (var i = 0; i < size; i++) {
            DIVS.push(React.createElement("div", { key: i },
                " ",
                i + 1));
        }
        return DIVS;
    };
    return (React.createElement(React.Fragment, null, createDiv()));
};

var SampleComponent = function (props) {
    var text = props.text, size = props.size;
    return (React.createElement(React.Fragment, null,
        text,
        React.createElement(Test, { size: size })));
};

exports.default = SampleComponent;
//# sourceMappingURL=index.js.map
