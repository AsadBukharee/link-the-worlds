
/**
 * Utility functions to handle and validate dates
 */

/**
 * Returns a valid date object or fallback to current date if input is invalid
 * @param dateInput - Date string or Date object to validate
 * @returns Valid Date object
 */
export const ensureValidDate = (dateInput: string | Date | undefined | null): Date => {
  if (!dateInput) {
    return new Date();
  }
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  // Check if the date is valid
  return isNaN(date.getTime()) ? new Date() : date;
};

/**
 * Returns a valid date string in ISO format, or current date if input is invalid
 * @param dateInput - Date string or Date object to validate
 * @returns ISO date string
 */
export const ensureValidDateString = (dateInput: string | Date | undefined | null): string => {
  return ensureValidDate(dateInput).toISOString();
};

