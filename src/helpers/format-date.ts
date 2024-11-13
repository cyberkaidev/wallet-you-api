import moment from "moment";

export function formatDate() {
	function hours(date: string | number) {
		return moment(date).format("LT");
	}

	function date(date: string | number) {
		return moment(date).format("L");
	}

	return { hours, date };
}
