import { Wrapper } from "@/components";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
}
