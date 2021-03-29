import React from "react";
import { useState, useEffect } from "react";
import axios, { ResponseType } from "axios";
import { Box } from "@chakra-ui/react";
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
			<Box bg="black" w="100%" p={4} color="white">
				<AddGameForm getGames={getGames}/>
				{
					games.map(game => (
						<Box>
							Pelin nimi: {game.gameName}
							<br/>
							Pelin kuvaus: {game.description}
							<br/>
							<br/>
						</Box>
					))
				}
			</Box>
		</>
	);
};

export default Games;
