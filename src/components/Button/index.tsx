import ButtonProps from "./types";

function Button(props: ButtonProps) {
	return (
		<button
			className={`br-button block primary mb-3 ${props.className}`}
			onClick={props.action}
			type="submit"
		>
			{props.label}
		</button>
	);
}

export default Button;
