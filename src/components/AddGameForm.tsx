import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddGameForm: any = (props) => {
    const [Game, setGame] = useState({
		gameName: "",
        description: "",
        trophyId: 0
	});
	const { handleSubmit, register, formState } = useForm();

	const onSubmit = (values: any) => {
		axios
            .post("/api/newGame", { gameName: Game.gameName, description: Game.description, trophyId: Game.trophyId })
            .then(() => props.getGames)
			.then((res) => console.log("Lisäys onnistui"))
			.catch((err) => console.log("Virhettä pukkaa", err));
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setGame({ ...Game, [e.target.name]: value });
	};

	return (
		<>
			<Box bg="tomato" w="100%" p={4} color="white">
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormLabel htmlFor="gameName">Name of the game</FormLabel>
					<Input onChange={handleChange} name="gameName" placeholder="Name of the game" ref={register} />
					<Input
						onChange={handleChange}
						name="description"
						placeholder="Description"
						ref={register}
					/>
                    <Input
                        onChange={handleChange}
                        name="trophyId"
                        placeholder="Trophy"
                        ref={register}   
                    />
					<Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</>
	);
};

export default AddGameForm;