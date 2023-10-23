function createPhoneBumber(number) {
  let phoneNumber = "(***) ***-****";
  for (let i = 0; i < number.length; i++) {
    phoneNumber = phoneNumber.replace("*", number[i]);
  }
  return phoneNumber;
}
