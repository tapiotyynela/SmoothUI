import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";

const GetData = () => {
	const [a, setA] = useState([]);

	useEffect(() => {
		asd();
	}, []);

	const asd = () => {
		axios.get("/api/alltests").then((res) => setA(res));
	};

	return (
		<>
			<Box>
				<p>{a}</p>
			</Box>
		</>
	);
};

export default GetData;
