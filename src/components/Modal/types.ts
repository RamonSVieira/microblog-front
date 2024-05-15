export interface iModal {
	isOpen: boolean;
	children: React.ReactNode;
	setOpenModal: () => void;
}
