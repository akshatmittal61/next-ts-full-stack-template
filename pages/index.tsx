import { Button, Typography } from "@/library";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const HomePage: React.FC = () => {
	return (
		<main className="w-screen h-screen flex justify-center items-center flex-col gap-4">
			<Typography
				className="text-blue-600"
				as="h1"
				size="head-1"
				weight="bold"
			>
				Home Page
			</Typography>
			<Button
				onClick={() => {
					throw new Error("Just for Error Boundary");
				}}
				size="large"
				theme="error"
				icon={<FiAlertTriangle />}
			>
				Throw an Error
			</Button>
		</main>
	);
};

export default HomePage;
