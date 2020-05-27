import React from "react"
import { css } from "emotion"
import { Guardian } from "../constants"
import GuardianIcon from "./GuardianIcon"

let baseInputStyle = css`
	width: 100%;
	font: inherit;
	font-size: 1.8em;
	height: 1.5em;
	border: 2px solid;
	border-radius: 4px;
	text-align: center;
	font-family: "Permanent Marker", cursive;
`

interface RoundProps {
	sanctuary: string
	score: string
}

function Round(props: RoundProps) {
	return (
		<div
			className={css`
				width: 100%;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 10px;
			`}
		>
			<input
				value={props.sanctuary}
				className={css`
					${baseInputStyle}
					background: hsl(60 90% 85%);
					border-color: hsl(60 90% 35%);
				`}
			/>
			<input
				value={props.score}
				className={css`
					${baseInputStyle}
					background: hsl(100 50% 80%);
					border-color: hsl(100 20% 50%);
				`}
			/>
		</div>
	)
}

interface GuardianScoreProps {
	guardian: Guardian
	score: string
}

function GuardianScore(props: GuardianScoreProps) {
	return (
		<div
			className={css`
				width: 100%;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 10px;
			`}
		>
			<div
				className={css`
					background: hsl(200 50% 90%);
					border: 2px solid hsl(200 20% 50%);
					border-radius: 4px;
				`}
			>
				<GuardianIcon guardian={props.guardian} />
			</div>
			<input
				value={props.score}
				className={css`
					${baseInputStyle}
					background: hsl(100 50% 80%);
					border-color: hsl(100 20% 50%);
				`}
			/>
		</div>
	)
}

function Line() {
	return (
		<hr
			className={css`
				margin: 0;
				width: 100%;
				height: 8px;
				border: none;
				background: hsl(10 50% 35%);
				border-radius: 2px;
			`}
		/>
	)
}

interface OperationScoreProps {
	op: string
	value: string
}

function OperationScore(props: OperationScoreProps) {
	return (
		<div
			className={css`
				width: 100%;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 10px;
			`}
		>
			<div
				className={css`
					display: flex;
					align-items: center;
					justify-content: center;

					font-size: 1.5em;
					font-family: "Permanent Marker", cursive;
				`}
			>
				{props.op}
			</div>
			<input
				value={props.value}
				className={css`
					${baseInputStyle}
					background: hsl(100 50% 80%);
					border-color: hsl(100 20% 50%);
				`}
			/>
		</div>
	)
}

interface TotalProps {
	score: string
}

function Total(props: TotalProps) {
	return (
		<input
			value={props.score}
			className={css`
				${baseInputStyle}
				font-size: 2.1em;
				background: hsl(100 50% 80%);
				border-color: hsl(100 20% 50%);
			`}
		/>
	)
}

export default function ScoreTracker() {
	return (
		<div
			className={css`
				display: grid;
				grid-gap: 10px;
			`}
		>
			<Round sanctuary="D" score="4" />
			<Round sanctuary="A" score="10" />
			<Round sanctuary="B" score="0" />
			<Round sanctuary="F" score="18" />
			<Round sanctuary="E" score="28" />
			<GuardianScore guardian={Guardian.Caterpiller} score="12" />
			<GuardianScore guardian={Guardian.Flower} score="1" />
			<Line />
			<OperationScore op="=" value="73" />
			<OperationScore op="0=-5" value="-5" />
			<Line />
			<Total score="68" />
		</div>
	)
}
