import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//Overwrite Styles (if neccessary)
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
