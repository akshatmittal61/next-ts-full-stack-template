import { Button, Pane, Popup, Typography } from "@/library";
import { Logger } from "@/log";
import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const HomePage: React.FC = () => {
	const [openPopup, setOpenPopup] = useState(false);
	const [openPane, setOpenPane] = useState(false);
	return (
		<>
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
				<Button onClick={() => setOpenPopup(true)}>Open Popup</Button>
				<Button onClick={() => setOpenPane(true)}>Open Pane</Button>
			</main>
			{openPopup ? (
				<Popup
					onEdit={() => Logger.info("Edit")}
					onDelete={() => Logger.info("Delete")}
					onClose={() => setOpenPopup(false)}
				>
					You are in a popup
				</Popup>
			) : null}
			{openPane ? (
				<Pane title="Pane Title" onClose={() => setOpenPane(false)}>
					You are in a pane
				</Pane>
			) : null}
		</>
	);
};

export default HomePage;
