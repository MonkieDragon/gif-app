import React from "react";

const GifCard = ({ gif }) => {
	return (
		<div className="card">
			<p>{gif.title}</p>
			<img className="photo" src={gif.images.original.url} alt={gif.title} />
		</div>
	);
};

export default GifCard;
