"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var axios_1 = __importDefault(require("axios"));
var react_3 = require("@chakra-ui/react");
var Users = function () {
    var _a = react_2.useState({
        name: "",
        description: "",
    }), testClass = _a[0], setTestClass = _a[1];
    var _b = react_hook_form_1.useForm(), handleSubmit = _b.handleSubmit, register = _b.register, formState = _b.formState;
    var onSubmit = function (values) {
        axios_1.default
            .post("/api/tests", { name: testClass.name, description: testClass.description })
            .then(function (res) { return console.log("Lisäys onnistui"); })
            .catch(function (err) { return console.log("Virhettä pukkaa", err); });
    };
    var handleChange = function (e) {
        var _a;
        var value = e.target.value;
        setTestClass(__assign(__assign({}, testClass), (_a = {}, _a[e.target.name] = value, _a)));
    };
    return (<>
			<react_3.Box bg="tomato" w="100%" p={4} color="white">
				<form onSubmit={handleSubmit(onSubmit)}>
					<react_3.FormLabel htmlFor="name">First name</react_3.FormLabel>
					<react_3.Input onChange={handleChange} name="name" placeholder="name" ref={register}/>
					<react_3.Input onChange={handleChange} name="description" placeholder="description" ref={register}/>
					<react_3.Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
						Submit
					</react_3.Button>
				</form>
			</react_3.Box>
		</>);
};
exports.default = Users;
