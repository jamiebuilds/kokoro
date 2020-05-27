import shuffle from "lodash/shuffle"
import { Card } from "../constants"

export default function shuffleDeck(deck: Card[]): Card[] {
	return shuffle(deck)
}
