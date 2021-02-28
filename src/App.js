import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import GetData from "./components/GetData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, Button, Center } from "@chakra-ui/react";

const App = () => {
	return (
		<Router>
			<ChakraProvider>
				<Center>
					<Button colorScheme="facebook">
						<Link to="/header">Trophies</Link>
					</Button>
					<Button colorScheme="whatsapp">
						<Link to="/form">Users</Link>
					</Button>
					<Button colorScheme="twitter">
						<Link to="/getdata">Games</Link>
					</Button>
				</Center>
				<Switch>
					<Route path="/header">
						<Header />
					</Route>
					<Route path="/form">
						<Form />
					</Route>
					<Route path="/getdata">
						<GetData />
					</Route>
				</Switch>
			</ChakraProvider>
		</Router>
	);
};

export default App;
