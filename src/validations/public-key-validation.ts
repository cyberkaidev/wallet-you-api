import { errorConstans } from "../constans/error-constans";
import { AppError } from "../errors/app-error";

export async function publicKeyValidation(key?: string) {
	const {
		EMPTY_KEY: { message, statusCode },
	} = errorConstans;

	if (key === undefined || key.trim().length === 0) {
		throw new AppError(message, statusCode);
	}

	return { validKey: key };
}
