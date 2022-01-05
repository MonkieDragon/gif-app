import React, { useState } from "react";

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
				<input type="text" onChange={handleChange} value={newSearch}></input>
				<button>Submit</button>
			</form>
		</section>
	);
};

export default Search;
