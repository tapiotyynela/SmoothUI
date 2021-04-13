import { Box,
    Button,
    FormLabel,
    Input,
    Select, } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddTrophyForm: any = (props) => {
    const [Trophy, setTrophy] = useState({
		trophyName: "",
        trophyDescription: "",
        rarity: "",
        gameId: 0
	});
	const { handleSubmit, register, formState } = useForm();

	const onSubmit = (values: any) => {
		axios
            .post("/api/newTrophy", { trophyName: Trophy.trophyName, trophyDescription: Trophy.trophyDescription, rarity: Trophy.rarity, gameId: Trophy.gameId })
            .then(props.getTrophies)
			.catch((err) => console.log("Virhettä pukkaa", err));
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setTrophy({ ...Trophy, [e.target.name]: value });
	};

	return (
		<>
			<Box bg="white" w="100%" p={4} color="grey" style={{borderRadius: 12}}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormLabel htmlFor="TrophyName">Name of the Trophy</FormLabel>
					<Input onChange={handleChange} name="trophyName" placeholder="Name of the Trophy" ref={register} />
					<Input
						onChange={handleChange}
						name="trophyDescription"
						placeholder="Description"
						ref={register}
					/>
                    <Input
						onChange={handleChange}
						name="rarity"
						placeholder="Rarity"
						ref={register}
					/>
                    <Select placeholder="Select option" name="gameId" onChange={handleChange}>
                        {
                            props.games.map(game => (
                                <option value={game.id}>{game.gameName}</option>
                            ))
                        }
                    </Select>
					<Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</>
	);
};

export default AddTrophyForm;