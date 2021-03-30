import React from "react";
import { useState, useEffect } from "react";
import axios, { ResponseType } from "axios";
import { Box,
	Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
	StatGroup,
	List,
	ListItem } from "@chakra-ui/react";
import AddGameForm from "./AddGameForm";

const Games = () => {
	const [games, setGames] = useState([]);

	const getGames: any = () => {
		console.log("TERVE")
		axios.get("/api/getGames").then((res) => {
			console.log("MOI")
			setGames(res.data)});
	};

	useEffect(() => {
		getGames();
	}, []);

	return (
		<>	
			<Box bg="white" w="100%" p={4} color="white">
				<AddGameForm getGames={getGames}/>
				<List>
				{
					games.map(game => (
						<ListItem key={game.id} style={{borderWidth: 2, borderRadius: 12, borderColor: '#ff8383', marginTop: 7}}>
							<Stat color="tomato" style={{marginBottom: 5, marginRight: 10}}>
								<StatNumber>{game.gameName}</StatNumber>
								<StatLabel>{game.description}</StatLabel>
							</Stat>
						</ListItem>
					))
				}
				</List>
			</Box>
		</>
	);
};

export default Games;
