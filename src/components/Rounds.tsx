import React from "react"
import { css } from "emotion"
import { Deck, Card as CardType } from "../constants"
import Card from "./Card"
import chunk from "lodash/chunk"
import shuffleDeck from "../utils/shuffleDeck"

let ShuffledDeck = shuffleDeck(Deck)
let GameRounds: CardType[][] = [[], [], [], [], []]
let currentRound = 0
let currentGold = 0

for (let card of ShuffledDeck) {
	GameRounds[currentRound].push(card)

	if (card.gold) {
		currentGold++

		if (currentGold > 3) {
			currentGold = 0
			currentRound++

			if (currentRound >= 5) {
				break
			}
		}
	}
}

export default function Rounds() {
	let rounds = GameRounds

	return (
		<div
			className={css`
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			`}
		>
			{rounds.map((round, roundIndex) => {
				let currentRound = roundIndex === rounds.length - 1
				return (
					<div key={roundIndex}>
						<h3
							className={css`
								color: hsl(0 50% 50%);
								font-size: 1.5em;
								line-height: 1;
								margin: 0 0 10px;
								padding: 0;
								padding-right: 30px;
								font-family: "Alegreya Sans SC", sans-serif;

								${roundIndex === rounds.length - 1 &&
									css`
										color: hsl(50 100% 50%);
									`}
							`}
						>
							Round {roundIndex + 1}
						</h3>
						<div
							className={css`
								display: flex;
								flex-direction: row;
								margin-right: -50px;
							`}
						>
							{round.map((card, cardIndex) => {
								let currentCard = cardIndex === round.length - 1
								return (
									<div
										key={cardIndex}
										className={css`
											&:not(:first-child) {
												margin-left: -88px;
											}
										`}
									>
										<Card card={card} active={currentRound && currentCard} />
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}
