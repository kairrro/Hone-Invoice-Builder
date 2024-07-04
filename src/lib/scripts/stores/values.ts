import { writable } from "svelte/store";

export const notificationState = writable<boolean>(false);
export const addProductPanel = writable<boolean>(false);
export const editorOpen = writable<boolean>(true);