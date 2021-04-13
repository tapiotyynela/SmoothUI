import React from "react";
import { useState, useEffect } from "react";
import axios, { ResponseType } from "axios";
import {
	Box,
	Stat,
	StatLabel,
	StatNumber,
	List,
	ListItem,
	Button,
	Flex
} from "@chakra-ui/react";
import AddGameForm from "./AddGameForm";

const Games = () => {
	const [games, setGames] = useState([]);

	const getGames: any = () => {
		axios.get("/api/getGames").then((res) => {
			setGames(res.data)
		});
	};

	const deleteGame: any = (id) => {
		axios.delete("/api/deleteGame/" + id)
			.then(() => getGames())
			.then(() => console.log("PELI POISTETTU"))
	}

	useEffect(() => {
		getGames();
	}, []);

	return (
		<>
			<Flex bg="white" w="100%" p={4} color="white" style={{ flexDirection: 'column' }}>
				<AddGameForm getGames={getGames} />
				<List>
					{
						games.map(game => (
							<ListItem key={game.id} style={{ borderWidth: 2, borderRadius: 12, borderColor: 'grey', marginTop: 7 }}>
								<Stat color="grey" style={{}}>
									<Flex>
										<Flex style={{ justifyContent: 'center', flexDirection: 'column', flex: 10 }}>
											<StatNumber>{game.gameName}</StatNumber>
											<StatLabel>{game.description}</StatLabel>
										</Flex>
										<Flex style={{ flexDirection: 'column', flex: 2, padding: 10 }}>
											<Button colorScheme="red" style={{ marginBottom: 10 }} onClick={() => deleteGame(game.id)}>Delete</Button>
											<Button colorScheme="linkedin">Update</Button>
										</Flex>
									</Flex>
								</Stat>
							</ListItem>
						))
					}
				</List>
			</Flex>
		</>
	);
};

export default Games;
