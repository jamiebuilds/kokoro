import React from "react"
import { css } from "emotion/macro"
import Emoji from "./Emoji"
import { Guardian } from "../constants"

interface GuardianIconLayoutProps {
	guardianLabel: string
	guardianEmoji: string
	featureLabel: string
	featureEmoji: string
}

function GuardianIconLayout(props: GuardianIconLayoutProps) {
	return (
		<div
			className={css`
				position: relative;
				width: 100%;
				height: 100%;

				display: flex;
				justify-content: center;
				align-items: center;

				overflow: hidden;
			`}
		>
			<div
				className={css`
					position: absolute;
					bottom: 4px;
					right: 4px;
					font-size: 2.5em;
					line-height: 1;
					z-index: 1;
				`}
			>
				<Emoji label={props.guardianLabel} emoji={props.guardianEmoji} />
			</div>
			<div
				className={css`
					position: absolute;
					top: 4px;
					left: 4px;
					font-size: 3.5em;
					line-height: 1;
					border-radius: 9999px;
					text-align: center;
					opacity: 0.5;
				`}
			>
				<Emoji label={props.featureLabel} emoji={props.featureEmoji} />
			</div>
		</div>
	)
}

export interface GuardianIconProps {
	guardian: Guardian
}

export default function GuardianIcon(props: GuardianIconProps) {
	return (
		<>
			{props.guardian === Guardian.Flower && (
				<GuardianIconLayout
					guardianLabel="Flower Lion Guardian"
					guardianEmoji={"🦁"}
					featureLabel="Flower"
					featureEmoji={"🌸"}
				/>
			)}
			{props.guardian === Guardian.Caterpiller && (
				<GuardianIconLayout
					guardianLabel="Caterpillar Princess Guardian"
					guardianEmoji={"🧝‍♀️"}
					featureLabel="Caterpillar"
					featureEmoji={"🐛"}
				/>
			)}
		</>
	)
}
