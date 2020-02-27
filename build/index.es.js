import { createElement, Fragment } from 'react';

var Test = function (props) {
    var size = props.size;
    var createDiv = function () {
        var DIVS = [];
        for (var i = 0; i < size; i++) {
            DIVS.push(createElement("div", { key: i },
                " ",
                i + 1));
        }
        return DIVS;
    };
    return (createElement(Fragment, null, createDiv()));
};

var SampleComponent = function (props) {
    var text = props.text, size = props.size;
    return (createElement(Fragment, null,
        text,
        createElement(Test, { size: size })));
};

export default SampleComponent;
//# sourceMappingURL=index.es.js.map
