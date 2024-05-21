import { format } from "date-fns";

export function FriendlyDate(date: string) {
	const dateObject = new Date(date);

	const formattedDate = format(dateObject, "dd/MM/yyyy 'às' HH:mm");

	return formattedDate;
}

export function formatTimeAgo(date: string) {
	const dateObject = new Date(date);
	const dateNow = new Date();

	const timeDifference = dateNow.getTime() - dateObject.getTime();
	const secondsDifference = Math.floor(timeDifference / 1000);
	const minutesDifference = Math.floor(secondsDifference / 60);
	const hoursDifference = Math.floor(minutesDifference / 60);
	const daysDifference = Math.floor(hoursDifference / 24);
	const weeksDifference = Math.floor(daysDifference / 7);
	const yearsDifference = Math.floor(daysDifference / 365);

	if (yearsDifference > 0) {
		return `há ${yearsDifference} ano${yearsDifference > 1 ? "s" : ""}`;
	} else if (weeksDifference > 0) {
		return `há ${weeksDifference} semana${weeksDifference > 1 ? "s" : ""}`;
	} else if (daysDifference > 0) {
		return `há ${daysDifference} dia${daysDifference > 1 ? "s" : ""}`;
	} else if (hoursDifference > 0) {
		return `há ${hoursDifference} hora${hoursDifference > 1 ? "s" : ""}`;
	} else if (minutesDifference > 0) {
		return `há ${minutesDifference} minuto${
			minutesDifference > 1 ? "s" : ""
		}`;
	} else {
		return `há alguns segundos`;
	}
}
