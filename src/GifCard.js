import React from "react";

const GifCard = ({ gif }) => {
	return (
		<div>
			<p>{gif.title}</p>
			<img src={gif.images.original.url} alt={gif.title} />
		</div>
	);
};

export default GifCard;
