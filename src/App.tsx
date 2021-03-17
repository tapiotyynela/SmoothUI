import "./App.css";
import Trophies from "./components/Trophies";
import Users from "./components/Users";
import Games from "./components/Games";

import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
	ChakraProvider,
	Button,
	Box,
	Center,
	Flex,
	IconButton,
	Stack,
	Collapse,
	useColorModeValue,
	useDisclosure,
	Menu,
	MenuButton,
	Link,
	MenuList,
	Text,
	Portal,
	MenuItem,
	LinkBox,
	Heading,
	LinkOverlay,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Router>
			<ChakraProvider>
				<Box>
					<Flex
						bg={useColorModeValue("white", "gray.800")}
						color={useColorModeValue("gray.600", "white")}
						minH={"60px"}
						py={{ base: 2 }}
						px={{ base: 4 }}
						borderBottom={1}
						borderStyle={"solid"}
						borderColor={useColorModeValue("gray.200", "gray.900")}
						align={"center"}
					>
						<Flex
							flex={{ base: 1, md: "auto" }}
							ml={{ base: -2 }}
							display={{ base: "flex", md: "none" }}
						>
							<IconButton
								onClick={onToggle}
								icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
								variant={"ghost"}
								aria-label={"Toggle Navigation"}
							/>
						</Flex>
						<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
							<Menu aria-orientation="horizontal">
								<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
									PSN Trophies
								</MenuButton>
								<MenuList>
									<MenuItem>
										<Link href="games">Games</Link>
									</MenuItem>
									<MenuItem>
										<Link href="trophies">Trophies</Link>
									</MenuItem>
									<MenuItem>
										<Link href="users">Users</Link>
									</MenuItem>
								</MenuList>
							</Menu>

							<Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
						</Flex>

						<Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
							<Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
								Sign In
							</Button>
							<Button
								display={{ base: "none", md: "inline-flex" }}
								fontSize={"sm"}
								fontWeight={600}
								color={"white"}
								bg={"pink.400"}
								href={"#"}
								_hover={{
									bg: "pink.300",
								}}
							>
								Sign Up
							</Button>
						</Stack>
					</Flex>

					<Collapse in={isOpen} animateOpacity></Collapse>
				</Box>
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
