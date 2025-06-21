import { AuthApi } from "@/api";
import { IUser } from "@/types";
import { StringUtils } from "@/utils";
import { useEffect } from "react";
import { create } from "zustand";
import { createSelectors } from "./utils";

type State = {
	user: IUser | null;
	isLoading: boolean;
	isLoggedIn: boolean;
};

type Getter<T extends keyof State> = () => State[T];
type Setter<T extends keyof State> = (_: State[T]) => void;

type Action = {
	getUser: Getter<"user">;
	getIsLoading: Getter<"isLoading">;
	getIsLoggedIn: Getter<"isLoggedIn">;
	setUser: Setter<"user">;
	setIsLoading: Setter<"isLoading">;
};

type Store = State & Action;

const store = create<Store>((set, get) => {
	return {
		user: null,
		isLoading: false,
		isLoggedIn: false,
		getUser: () => get().user,
		getIsLoading: () => get().isLoading,
		getIsLoggedIn: () => get().isLoggedIn,
		setUser: (user) => {
			if (user && user !== null && StringUtils.isNotEmpty(user.id)) {
				set({ user, isLoggedIn: true });
			} else {
				set({ user, isLoggedIn: false });
			}
		},
		setIsLoading: (isLoading) => set({ isLoading }),
	};
});

const useStore = createSelectors(store);

type Options = {
	syncOnMount?: boolean;
};

type ReturnType = Store & {
	sync: () => Promise<void>;
};

type AuthStoreHook = (_?: Options) => ReturnType;

export const useAuthStore: AuthStoreHook = (options = {}) => {
	const store = useStore();

	const sync = async () => {
		try {
			store.setIsLoading(true);
			const res = await AuthApi.verify();
			store.setUser(res.data);
		} catch {
			store.setUser(null);
		} finally {
			store.setIsLoading(false);
		}
	};

	useEffect(() => {
		if (options.syncOnMount) {
			sync();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options.syncOnMount]);

	return {
		...store,
		sync,
	};
};
