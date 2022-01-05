import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

const Header = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position="sticky">
				<Typography variant="h1" gutterBottom="true" align="center">
					Gif App
				</Typography>
			</AppBar>
		</>
	);
};

export default Header;
