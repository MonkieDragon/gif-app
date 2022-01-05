import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { GifBoxOutlined } from "@mui/icons-material";

const Header = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position="sticky">
				<GifBoxOutlined sx={{ fontSize: "10rem" }} />
				<Typography variant="h1" gutterBottom="true" align="center">
					Gif App
				</Typography>
			</AppBar>
		</>
	);
};

export default Header;
