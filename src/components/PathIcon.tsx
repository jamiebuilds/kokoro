import React from "react"
import { css } from "emotion/macro"
import { Path } from "../constants"

let PolylinePoints = {
	[Path.One]: "0,5 5,5 5,0",
	[Path.Two]: "10,5 5,5 5,0",
	[Path.Three]: "10,5 5,5 5,10",
	[Path.Four]: "0,5 5,5 5,10",
	[Path.Five]: "0,5 10,5",
	[Path.Six]: "5,0 5,10",
}

export interface PathIconProps {
	path: Path
}

export default function PathIcon(props: PathIconProps) {
	return (
		<div
			className={css`
				display: flex;
				width: 100%;
				height: 100%;
				overflow: hidden;
				justify-content: center;
				align-items: center;

				color: hsl(0 50% 20%);

				svg {
					width: 100%;
					height: 100%;
				}
			`}
		>
			<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<polyline
					points={PolylinePoints[props.path]}
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	)
}
