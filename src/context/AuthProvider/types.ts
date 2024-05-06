export interface IAuth {
	refresh?: string;
	access?: string;
}

export interface IContext extends IAuth {
	authenticate: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

export interface IAuthProvider {
	children: JSX.Element;
}
