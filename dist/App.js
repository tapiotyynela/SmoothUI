"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Trophies_1 = __importDefault(require("./components/Trophies"));
var Users_1 = __importDefault(require("./components/Users"));
var Games_1 = __importDefault(require("./components/Games"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@chakra-ui/react");
var App = function () {
    return (<react_router_dom_1.BrowserRouter>
			<react_1.ChakraProvider>
				<react_1.Center>
					<react_1.Button colorScheme="facebook">
						<react_router_dom_1.Link to="/trophies">Trophies</react_router_dom_1.Link>
					</react_1.Button>
					<react_1.Button colorScheme="whatsapp">
						<react_router_dom_1.Link to="/users">Users</react_router_dom_1.Link>
					</react_1.Button>
					<react_1.Button colorScheme="twitter">
						<react_router_dom_1.Link to="/games">Games</react_router_dom_1.Link>
					</react_1.Button>
				</react_1.Center>
				<react_router_dom_1.Switch>
					<react_router_dom_1.Route path="/trophies">
						<Trophies_1.default />
					</react_router_dom_1.Route>
					<react_router_dom_1.Route path="/users">
						<Users_1.default />
					</react_router_dom_1.Route>
					<react_router_dom_1.Route path="/games">
						<Games_1.default />
					</react_router_dom_1.Route>
				</react_router_dom_1.Switch>
			</react_1.ChakraProvider>
		</react_router_dom_1.BrowserRouter>);
};
exports.default = App;
