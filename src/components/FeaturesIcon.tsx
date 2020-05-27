import React from "react"
import { css } from "emotion/macro"
import Emoji from "./Emoji"

interface Feature {
	label: string
	emoji: string
}

export interface FeaturesIconProps {
	flowers: number
	caterpillars: number
}

export default function FeaturesIcon(props: FeaturesIconProps) {
	let features: Feature[] = []

	for (let count = 0; count < props.flowers; count++) {
		features.push({
			label: "Flower",
			emoji: "🌸",
		})
	}

	for (let count = 0; count < props.caterpillars; count++) {
		features.push({
			label: "Caterpillar",
			emoji: "🐛",
		})
	}

	return (
		<div
			className={css`
				position: relative;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
		>
			<div
				className={css`
					text-align: center;
				`}
			>
				{features.map((feature, index) => {
					return (
						<>
							<span
								className={css`
									display: inline-block;
									margin: 8px 6px;
									font-size: 1.5em;
									line-height: 1;
								`}
							>
								<Emoji label={feature.label} emoji={feature.emoji} />
							</span>
							{index % 2 === 1 && <div />}
						</>
					)
				})}
			</div>
		</div>
	)
}
