const createPhoneNumber = (number)=> {
  let phoneNumberFormat = "(***) ***-****";
  for (const element of number) {
    phoneNumberFormat = phoneNumberFormat.replace("*", element);
  }
  return phoneNumberFormat;
}
