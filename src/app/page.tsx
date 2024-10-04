"use client";

import { useAction } from "next-safe-action/hooks";
import { throwErrorActionA, throwErrorActionB } from "./actions";
import { useState } from "react";

export default function Home() {
	const [error, setError] = useState<string>("");

	const { execute: executeA } = useAction(throwErrorActionA, {
		onError: ({ error }) => {
			setError(JSON.stringify(error));
		}
	});

	const { execute: executeB } = useAction(throwErrorActionB, {
		onError: ({ error }) => {
			setError(JSON.stringify(error));
		}
	});

	return (
		<div className="p-8 divide-y divide-gray-200">
			<div className="p-4 space-y-2">
      <p>
					Will throw an error inside server actions with a handleServerError
					that return as message:
				</p>

				<button
					className="bg-gray-200 border font-semibold border-gray-300 rounded p-4 active:scale-95"
					onClick={() => {
            setError(""); // reset error
            executeA();
          }}
				>
					Throw Error A
				</button>
			</div>

			<div className="p-4 space-y-2">
				<p>
					Will throw an error inside server actions with a handleServerError
					that throws a message:
				</p>
				<button
					className="bg-gray-200 border font-semibold border-gray-300 rounded p-4 active:scale-95"
					onClick={() => {
            setError(""); // reset error
            executeB();
          }}
				>
					Throw Error B
				</button>
			</div>

			<div className="p-4 space-y-2">
				<h2>Error:</h2>
				<pre className="bg-gray-200 p-4 rounded">{error}</pre>
			</div>
		</div>
	);
}
