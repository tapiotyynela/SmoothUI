"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var axios_1 = __importDefault(require("axios"));
var react_3 = require("@chakra-ui/react");
var Games = function () {
    var _a = react_2.useState([]), a = _a[0], setA = _a[1];
    react_2.useEffect(function () {
        asd();
    }, []);
    var asd = function () {
        axios_1.default.get("/api/alltests").then(function (res) { return setA(res.data); });
    };
    return (<>
			<react_3.Box bg="black" w="100%" p={4} color="white"></react_3.Box>
		</>);
};
exports.default = Games;
