import React from "react"

interface EmojiProps {
	label: string
	emoji: string
}

export default function Emoji(props: EmojiProps) {
	return (
		<span role="img" aria-label={props.label}>
			{props.emoji}
		</span>
	)
}
