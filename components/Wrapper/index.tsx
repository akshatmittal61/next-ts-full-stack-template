import { AppSeo, protectedRoutes } from "@/constants";
import { useAuthStore, useUiStore } from "@/store";
import { IUser } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Seo } from "../Seo";

interface WrapperProps {
	children: React.ReactNode;
	user?: IUser;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, user }) => {
	const router = useRouter();
	const { sync: syncAuth, setUser, isLoggedIn } = useAuthStore();
	const { syncNetworkStatus } = useUiStore({
		syncOnMount: true,
	});

	useEffect(() => {
		if (user) {
			setUser(user);
		} else {
			if (!isLoggedIn && protectedRoutes.includes(router.pathname)) {
				syncAuth();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, router.pathname]);

	useEffect(() => {
		setInterval(() => {
			syncNetworkStatus();
		}, 5000);
	}, [syncNetworkStatus]);

	return (
		<>
			<Seo
				title={AppSeo.title}
				description={AppSeo.description}
				image={AppSeo.image}
				canonical={AppSeo.canonical}
				themeColor={AppSeo.themeColor}
				icons={AppSeo.icons}
				twitter={AppSeo.twitter}
				og={AppSeo.og}
			/>
			{children}
			<Toaster position="top-center" />
		</>
	);
};
