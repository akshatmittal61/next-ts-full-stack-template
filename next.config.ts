import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
		dangerouslyAllowSVG: true,
	},
	sassOptions: {
		includePaths: [path.join(process.cwd(), "styles")],
		quiteDeps: true,
		silenceDeprecations: ["legacy-js-api", "import"],
	},
};

export default nextConfig;
