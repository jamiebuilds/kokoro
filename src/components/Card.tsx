import React from "react"
import { css } from "emotion/macro"
import { Card as CardType } from "../constants"
import PathIcon from "./PathIcon"

export interface CardProps {
	active: boolean
	card: CardType
}

export default function Card(props: CardProps) {
	return (
		<div
			className={css`
				position: relative;
				width: 100px;
				height: 150px;
				padding: 10px;
				border-radius: 8px;
				background: hsl(120 50% 30%);
				border: 2px solid hsl(120 50% 10%);
				overflow: hidden;

				${!props.active &&
					css`
						&::before {
							content: "";
							display: block;
							position: absolute;
							top: -2px;
							left: -2px;
							bottom: -2px;
							right: -2px;
							background: hsl(0 0% 0% / 0.4);
						}
					`}

				${props.card.gold &&
					css`
						background: hsl(50 80% 50%);
						border-color: hsl(50 80% 20%);
					`}
			`}
		>
			<div
				className={css`
					background: hsl(60 80% 80%);
					border: 4px solid white;
					border-radius: 4px;
				`}
			>
				<PathIcon path={props.card.path} />
			</div>
			<div
				className={css`
					color: white;
					font-size: 3em;
					line-height: 1;
					font-weight: 600;
					font-family: "Alegreya Sans SC", sans-serif;
					text-align: center;
				`}
			>
				{props.card.path}
			</div>
		</div>
	)
}
