import React from "react"
import { css } from "emotion/macro"
import GuardianIcon from "./GuardianIcon"
import SanctuaryIcon from "./SanctuaryIcon"
import FeaturesIcon from "./FeaturesIcon"
import PathIcon from "./PathIcon"
import Clickable from "./Clickable"
import {
	RowIndex,
	ColIndex,
	SanctuaryLocations,
	GuardianLocations,
	FlowersLocations,
	CaterpillarsLocations,
	Path,
	LocationMap,
} from "../constants"

let gridState: LocationMap<Path> = {
	0: { 2: Path.Three, 3: Path.Five },
	1: { 1: Path.Two, 2: Path.One },
	2: {},
	3: {},
	4: {},
	5: { 6: Path.One },
}

export interface CellProps {
	rowIndex: RowIndex
	colIndex: ColIndex
}

export default function Cell(props: CellProps) {
	let sanctuary = SanctuaryLocations[props.rowIndex][props.colIndex]
	let guardian = GuardianLocations[props.rowIndex][props.colIndex]
	let flowers = FlowersLocations[props.rowIndex][props.colIndex]
	let caterpillars = CaterpillarsLocations[props.rowIndex][props.colIndex]

	let path = gridState[props.rowIndex][props.colIndex]

	return (
		<Clickable
			disabled={!!path}
			onClick={() => {
				console.log(`Clicked ${props.colIndex}, ${props.rowIndex}`)
			}}
			className={css`
				position: relative;
				display: flex;
				width: 100%;
				height: 100%;
				align-items: center;
				justify-content: center;

				${path &&
					css`
						cursor: not-allowed;
					`}

				${!path &&
					css`
						cursor: pointer;
					`}
			`}
		>
			{path && (
				<div
					className={css`
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						font-size: 4em;
						z-index: 2;
					`}
				>
					<PathIcon path={path} />
				</div>
			)}
			{sanctuary && <SanctuaryIcon sanctuary={sanctuary} />}
			{guardian && <GuardianIcon guardian={guardian} />}
			{(flowers || caterpillars) && (
				<FeaturesIcon flowers={flowers || 0} caterpillars={caterpillars || 0} />
			)}
		</Clickable>
	)
}
