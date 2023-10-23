const createPhoneNumber = (number)=> {
  let format = "(***) ***-****";
  for (const element of number) {
    format = format.replace("*", element);
  }
  return format;
}
