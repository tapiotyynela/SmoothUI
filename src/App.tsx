import "./App.css";
import Trophies from "./components/Trophies";
import Users from "./components/Users";
import Games from "./components/Games";
import Navigation from "./components/Navigation";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<ChakraProvider>
				<Navigation />
				<Route exact path="/games" component={Games} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/trophies" component={Trophies} />
			</ChakraProvider>
		</Router>
	);
};

export default App;

/* <Switch>
					<Route path="/trophies">
						<Trophies />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/games">
						<Games />
					</Route>
				</Switch>
				*/
