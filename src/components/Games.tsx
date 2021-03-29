import React from "react";
import { useState, useEffect } from "react";
import axios, { ResponseType } from "axios";
import { Box } from "@chakra-ui/react";
import AddGameForm from "./AddGameForm";

const Games = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGames();
	}, []);

	const getGames: any = () => {
		axios.get("/api/getGames").then((res) => setGames(res.data));
	};

	return (
		<>	
			<Box bg="black" w="100%" p={4} color="white">
				<AddGameForm getGames={getGames}/>
			</Box>
		</>
	);
};

export default Games;
