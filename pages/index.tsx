import { Typography } from "@/library";
import React from "react";

const HomePage: React.FC = () => {
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<Typography className="text-red-600" as="h1">
				Home Page
			</Typography>
		</main>
	);
};

export default HomePage;
