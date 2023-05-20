import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function isValidDateTime(dateTimeString: string) {
  // Regular expression pattern
  var pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  // Test if the string matches the pattern
  return pattern.test(dateTimeString);
}

export function getRelativeTime(date: Date) {
  const currentTime = new Date();
  const timeDiff = date.getTime() - currentTime.getTime();
  const seconds = Math.floor(Math.abs(timeDiff) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (timeDiff === 0) {
    return 'now';
  } else if (timeDiff > 0) {
    if (seconds < 60) {
      return rtf.format(seconds, 'second');
    } else if (minutes < 60) {
      return rtf.format(minutes, 'minute');
    } else if (hours < 24) {
      return rtf.format(hours, 'hour');
    } else if (days < 30) {
      return rtf.format(days, 'day');
    } else if (months < 12) {
      return rtf.format(months, 'month');
    } else {
      return rtf.format(years, 'year');
    }
  } else {
    if (seconds < 60) {
      return rtf.format(-seconds, 'second');
    } else if (minutes < 60) {
      return rtf.format(-minutes, 'minute');
    } else if (hours < 24) {
      return rtf.format(-hours, 'hour');
    } else if (days < 30) {
      return rtf.format(-days, 'day');
    } else if (months < 12) {
      return rtf.format(-months, 'month');
    } else {
      return rtf.format(-years, 'year');
    }
  }
}
