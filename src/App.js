import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
				<Header />
				<Form />
			</ChakraProvider>
		</>
	);
}

export default App;
