import React from "react"
import { css } from "emotion/macro"
import Grid from "./Grid"
import ScoreTracker from "./ScoreTracker"
import Legend from "./Legend"

export default function Board() {
	return (
		<div
			className={css`
				width: 100%;
				display: grid;
				grid-template:
					"game-grid score-tracker" auto
					"game-grid score-tracker" auto
					"card-legend score-tracker" min-content / 1fr auto;
				grid-gap: 10px;
				padding: 30px;
				border-radius: 3px;
				background: hsl(200 80% 85%);
				background: linear-gradient(
					145deg,
					hsl(200 80% 95%) 0%,
					hsl(200 80% 85%) 100%
				);
			`}
		>
			<div
				className={css`
					grid-area: game-grid;
				`}
			>
				<Grid />
			</div>
			<div
				className={css`
					grid-area: score-tracker;
					width: 150px;
				`}
			>
				<ScoreTracker />
			</div>
			<div
				className={css`
					grid-area: card-legend;
				`}
			>
				<Legend />
			</div>
		</div>
	)
}
