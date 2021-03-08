import "./App.css";
import Trophies from "./components/Trophies";
import Users from "./components/Users";
import Games from "./components/Games";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, Button, Center } from "@chakra-ui/react";

const App = () => {
	return (
		<Router>
			<ChakraProvider>
				<Center>
					<Button colorScheme="facebook">
						<Link to="/trophies">Trophies</Link>
					</Button>
					<Button colorScheme="whatsapp">
						<Link to="/users">Users</Link>
					</Button>
					<Button colorScheme="twitter">
						<Link to="/games">Games</Link>
					</Button>
				</Center>
				<Switch>
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
			</ChakraProvider>
		</Router>
	);
};

export default App;
