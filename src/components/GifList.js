import React, { useEffect, useState } from "react";
import GifCard from "../GifCard";

const GifList = ({ searchTerm }) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`http://api.giphy.com/v1/gifs/trending?api_key=YG89annsdsHWJaMf4If8pY9kJM9727p4`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setGifs(data.data);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
				console.log("our error message", err);
			});
	}, []);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YG89annsdsHWJaMf4If8pY9kJM9727p4`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setGifs(data.data);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
				console.log("our error message", err);
			});
	}, [searchTerm]);

	return (
		<section className="giflist">
			{isError ? (
				<p>Error</p>
			) : (
				<div>
					{isLoading ? (
						<p>Loading</p>
					) : (
						<div>
							<p>{searchTerm} gifs</p>
							<ul className="wrapper">
								{gifs.map((gif) => {
									return (
										<div key={gif.id}>
											<GifCard gif={gif} />
										</div>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default GifList;
