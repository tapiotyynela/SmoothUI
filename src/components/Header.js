import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"

function Header() {
	const [backendText, setBackendText] = useState('')

	useEffect(() => {
		axios.get('/testdata/tests')
		.then(response => setBackendText(JSON.stringify(response.data)))
	}, [])

	return (
		<>
			<h1>Olen header</h1>
			<p>{backendText}</p>
		</>
	);
}

export default Header;
