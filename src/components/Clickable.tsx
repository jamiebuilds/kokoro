import React from "react"

export interface ClickableProps {
	className?: string
	disabled: boolean
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void
	children: React.ReactNode
}

export default function Clickable(props: ClickableProps) {
	return (
		<div
			className={props.className}
			role={props.disabled ? undefined : "button"}
			tabIndex={props.disabled ? undefined : 0}
			onClick={props.disabled ? undefined : props.onClick}
		>
			{props.children}
		</div>
	)
}
