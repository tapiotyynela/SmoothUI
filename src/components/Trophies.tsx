import React, { useEffect, useState } from "react";
import { Box, List, ListItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import AddTrophyForm from "./AddTrophyForm";
import axios from "axios";

const Trophies = () => {

	const [trophies, setTrophies] = useState([]);
	const [games, setGames] = useState([]);

	const getTrophies: any = () => {
		axios.get("/api/getTrophies").then((res) => {
			setTrophies(res.data)});
	};

	const getGames: any = () => {
		axios.get("/api/getGames").then((res) => {
			setGames(res.data)});
	};

	useEffect(() => {
		getTrophies();
		getGames();
	}, []);

	return (
		<>
			<Box bg="white" w="100%" p={4} color="white">
				<AddTrophyForm getTrophies={getTrophies} games={games}/>
					<List>
					{
						trophies.map(trophy => (
							<ListItem key={trophy.id} style={{borderWidth: 2, borderRadius: 12, borderColor: 'grey', marginTop: 7}}>
								<Stat color="grey" style={{marginBottom: 5, marginRight: 10}}>
									<StatNumber>{trophy.trophyName}</StatNumber>
									<StatLabel>{trophy.trophyDescription}</StatLabel>
								</Stat>
							</ListItem>
						))
					}
					</List>
			</Box>
		</>
	);
};

export default Trophies;
