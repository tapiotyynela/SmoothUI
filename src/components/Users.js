import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";

const Users = () => {
	const [testClass, setTestClass] = useState({
		name: "",
		description: "",
	});
	const { handleSubmit, register, formState } = useForm();

	const onSubmit = (values) => {
		axios
			.post("/api/tests", { name: testClass.name, description: testClass.description })
			.then((res) => console.log("Lisäys onnistui"))
			.catch((err) => console.log("Virhettä pukkaa", err));
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setTestClass({ ...testClass, [e.target.name]: value });
	};

	return (
		<>
			<Box bg="tomato" w="100%" p={4} color="white">
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormLabel htmlFor="name">First name</FormLabel>
					<Input onChange={handleChange} name="name" placeholder="name" ref={register} />
					<Input
						onChange={handleChange}
						name="description"
						placeholder="description"
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

export default Users;
