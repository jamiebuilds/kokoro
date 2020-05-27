import React from "react"
import { css } from "emotion/macro"
import Cell from "./Cell"
import { ALL_LOCATIONS } from "../constants"
import { RowIndex, ColIndex } from "../constants"

export default function Grid() {
	return (
		<div
			className={css`
				position: relative;
				width: 100%;
				padding-bottom: ${(6 / 7) * 100}%;
			`}
		>
			<div
				className={css`
					position: absolute;
					width: 100%;
					height: 100%;
					display: grid;
					grid-template-rows: repeat(6, 1fr);
					background: hsl(0 0% 98%);
					border-radius: 4px;
					border: 8px solid hsl(10 50% 35%);
				`}
			>
				{ALL_LOCATIONS.map((columns, row) => {
					return (
						<div
							key={row}
							className={css`
								display: grid;
								grid-template-columns: repeat(7, 1fr);
								&:not(:last-child) {
									border-bottom: 1px solid hsl(0 0% 90%);
								}
							`}
						>
							{columns.map(column => {
								return (
									<div
										key={column}
										className={css`
											&:not(:last-child) {
												border-right: 1px solid hsl(0 0% 90%);
											}
										`}
									>
										<Cell
											rowIndex={row as RowIndex}
											colIndex={column as ColIndex}
										/>
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}
