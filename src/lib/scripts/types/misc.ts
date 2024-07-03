import type { Action } from "svelte/action";

export type Attributes = {
    'on:outside'?: (event: CustomEvent) => void
};
  
export type clickOutsideAction = Action<HTMLElement, any, Attributes>;

export interface InvoiceProduct {
    name: string;
    quantity: number;
    price: number;
}