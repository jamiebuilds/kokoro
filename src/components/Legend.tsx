import React from "react"
import { css } from "emotion"
import { Path } from "../constants"
import PathIcon from "./PathIcon"

function PathItem(props: { path: Path }) {
	return (
		<div
			className={css`
				position: relative;
				border-radius: 4px;
				background: hsl(60 80% 80%);
				border: 4px solid white;
				font-size: 3em;
				line-height: 1;
			`}
		>
			<div
				className={css`
					position: absolute;
					bottom: -10px;
					right: -10px;
					color: hsl(120 50% 30%);
					line-height: 1;
					font-weight: 600;
					font-family: "Alegreya Sans SC", sans-serif;
				`}
			>
				{props.path}
			</div>
			<PathIcon path={props.path} />
		</div>
	)
}

export default function Legend() {
	return (
		<div
			className={css`
				max-width: 80%;
				margin: 0 auto;
				display: grid;
				grid-template-columns: repeat(6, 1fr);
				grid-gap: 10px;
			`}
		>
			<PathItem path={Path.One} />
			<PathItem path={Path.Two} />
			<PathItem path={Path.Three} />
			<PathItem path={Path.Four} />
			<PathItem path={Path.Five} />
			<PathItem path={Path.Six} />
		</div>
	)
}
