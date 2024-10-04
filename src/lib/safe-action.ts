import { createSafeActionClient } from "next-safe-action";

export const safeAction = createSafeActionClient({
	async handleServerError(error) {
		let message = "Unknown error";
		if (error instanceof Error) {
			message = error.message;
		}
		return message;
	}
});

export const safeActionWithThrow = createSafeActionClient({
	async handleServerError(error) {
		let message = "Unknown error";

		if (error instanceof Error) {
			message = error.message;
		}

		throw new Error(message);
	}
});