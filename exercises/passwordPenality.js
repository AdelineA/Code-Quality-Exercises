/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (!password) return 0;
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // checks if the sequences has two or more consecutive identical characters within a string.
  const regex = /([a-zA-Z0-9])\1{1,}/g;
  const sequences = password.match(regex);

  if (!sequences) return 0;
  return sequences.reduce((penality, sequence) => {
    return (
      penality + (sequence.length === 2 ? 1 : sequence.length >= 3 ? 2 : 0)
    );
  }, 0);
}
