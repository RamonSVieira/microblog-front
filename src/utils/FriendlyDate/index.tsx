import { format } from "date-fns";

interface IDate {
	dateString: string;
}

function FriendlyDate({ dateString }: IDate) {
	const dateObject = new Date(dateString);

	const formattedDate = format(dateObject, "dd/MM/yyyy 'às' HH:mm");

	return <>{formattedDate}</>;
}

export default FriendlyDate;
