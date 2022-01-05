import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import GifList from "./components/GifList";

function App() {
	const [searchTerm, setSearchTerm] = useState("Trending");

	return (
		<div className="App">
			<Header />
			<Search setSearchTerm={setSearchTerm} />
			<GifList searchTerm={searchTerm} />
		</div>
	);
}

export default App;
