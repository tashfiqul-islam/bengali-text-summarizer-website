import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(imageName: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || 'http://localhost:3000';
  return new URL(`images/${imageName}`, basePath).toString();
}


