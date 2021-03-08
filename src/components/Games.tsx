import React from "react";
import { useState, useEffect } from "react";
import axios, { ResponseType } from "axios";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";

const Games = () => {
	const [a, setA] = useState([]);

	useEffect(() => {
		asd();
	}, []);

	const asd = () => {
		axios.get("/api/alltests").then((res) => setA(res.data));
	};

	return (
		<>
			<Box bg="black" w="100%" p={4} color="white"></Box>
		</>
	);
};

export default Games;
