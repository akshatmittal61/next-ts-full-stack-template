import { stylesConfig } from "@/utils";
import React from "react";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "masonry");

interface IMasonry {
	xsm?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xlg?: number;
	children: React.ReactNode;
	className?: string;
}

export const Masonry: React.FC<IMasonry> = ({
	xsm = 1,
	sm = 1,
	md = 2,
	lg = 3,
	xlg = 4,
	children,
	className,
}) => {
	return (
		<div
			className={
				classes(
					"",
					`-xsm-${xsm}`,
					`-sm-${sm}`,
					`-md-${md}`,
					`-lg-${lg}`,
					`-xlg-${xlg}`
				) + ` ${className}`
			}
		>
			{React.Children.map(children, (child, index) => {
				return (
					<div className={classes("-item")} key={index}>
						{child}
					</div>
				);
			})}
		</div>
	);
};
