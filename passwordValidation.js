export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // check if a password is included in the forbiden passwords
  if (forbiddenPasswords.includes(password)) return false;

  // check if password doesn't contain special characters and has 10 digits
  if (!/^[a-zA-Z0-9]{10}$/.test(password)) return false;

  // check if password contain atleast a number, lowercase, and uppercase
  if (
    !/[0-9]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password)
  ) {
    return false;
  }

  // check if password is not directly in ascending or descending order
  if (
    /(?:0123|2345|3456|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)/.test(
      password
    )
  )
    return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
