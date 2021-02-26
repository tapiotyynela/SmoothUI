import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import GetData from "./components/GetData";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
				<Header />
				<Form />
				<GetData />
			</ChakraProvider>
		</>
	);
}

export default App;
