// utils/checkVowel.js

export const isFirstLetterVowel = (str) => {
  ;
  if (!str[0]) return false;
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(str[0][0].toLowerCase());
};
