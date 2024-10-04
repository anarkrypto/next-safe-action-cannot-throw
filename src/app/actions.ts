'use server'

import { safeAction, safeActionWithThrow } from "@/lib/safe-action";

export const throwErrorActionA = safeAction.action(async () => {
  throw new Error("This is an error message");
});

export const throwErrorActionB = safeActionWithThrow.action(async () => {
  throw new Error("This is an error message");
});