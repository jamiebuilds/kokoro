import React from "react"
import { css } from "emotion/macro"
import Emoji from "./Emoji"
import { Sanctuary } from "../constants"

export interface SanctuaryIconProps {
	sanctuary: Sanctuary
}

export default function SanctuaryIcon(props: SanctuaryIconProps) {
	return (
		<div
			className={css`
				position: relative;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			<div
				className={css`
					font-size: 2.5em;
				`}
			>
				<Emoji label="santuary" emoji={"🏯"} />
			</div>
			<div
				className={css`
					position: absolute;
					top: 4px;
					left: 4px;
					font-size: 1.5em;
					line-height: 1;
					font-family: Rancho, cursive;
					font-weight: 900;
				`}
			>
				{props.sanctuary}
			</div>
		</div>
	)
}
