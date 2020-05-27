import React from "react"
import { css } from "emotion/macro"
import Title from "./components/Title"
import Board from "./components/Board"
import Rounds from "./components/Rounds"

export default function App() {
	return (
		<div
			className={css`
				display: grid;
				grid-gap: 20px;
				width: 800px;
				margin: 0 auto;
				padding: 30px 0 100px;
				user-select: none;
			`}
		>
			<Title />
			<Board />
			<Rounds />
		</div>
	)
}
