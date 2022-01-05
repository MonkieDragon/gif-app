import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Search = ({ setSearchTerm }) => {
	const [newSearch, setNewSearch] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;

		setNewSearch(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		setSearchTerm(newSearch);
		setNewSearch("");
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					label="Search"
					variant="outlined"
					onChange={handleChange}
					value={newSearch}
				/>

				<Button variant="contained">Submit</Button>
			</form>
		</section>
	);
};

export default Search;
