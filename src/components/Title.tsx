import React from "react"
import { css } from "emotion/macro"

export default function App() {
	return (
		<h1
			className={css`
				margin: 0;
				font-size: 5em;
				line-height: 1;
				font-family: "Alegreya Sans SC", sans-serif;
				text-align: center;
				color: hsl(0 50% 50%);
				text-shadow: 1px 1px black, 2px 2px black, 3px 3px black;
			`}
		>
			<span
				className={css`
					color: hsl(50 100% 50%);
				`}
			>
				Kokoro
			</span>
			<small
				className={css`
					display: block;
					font-family: "Kalam", cursive;
					font-size: 0.5em;
					text-transform: uppercase;
				`}
			>
				Avenue
				<span
					className={css`
						margin: 0 0.4em;
						font-size: 0.5em;
						display: inline-flex;
						flex-direction: column;
						vertical-align: middle;
					`}
				>
					<span>of</span>
					<span>the</span>
				</span>
				Kodama
			</small>
		</h1>
	)
}
