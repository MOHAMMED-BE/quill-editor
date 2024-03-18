"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var QuillModules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        [{ 'color': [] }, { 'background': [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image", "video"],
    ],
};
var QuillEditor = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    return (react_1.default.createElement(react_quill_1.default, { className: "react-quill-editor", theme: "snow", value: value, onChange: onChange, modules: QuillModules }));
};
exports.default = QuillEditor;
