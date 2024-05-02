import InputProps from "./types";

function Input(props: InputProps) {
	return (
		<div className={props.className}>
			<div className="br-input input-highlight">
				<label
					className="sr-only"
					htmlFor="input-highlight-icon-search-labeless"
				>
					{props.label}
				</label>
				<div className="input-group">
					<div className="input-icon">
						<i
							className="fas fa-user"
							aria-hidden="true"
						></i>
					</div>
					<input
						className="input-highlight"
						id="input-highlight-icon-search-labeless"
						type="search"
						placeholder={props.placeholder}
					/>
				</div>
				<button
					className="br-button"
					type="button"
					aria-label="Buscar"
				>
					<i
						className="fas fa-search"
						aria-hidden="true"
					></i>
				</button>
			</div>
		</div>
	);
}

export default Input;
