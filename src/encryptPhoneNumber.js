// 保护手机号隐私 ('18614023235' -> '186****3235')
export const encryptPhoneNumber = (phoneNumber) => {
  if (phoneNumber) {
    phoneNumber = phoneNumber.trim();
    phoneNumber = `${phoneNumber.substring(0, 3)}${"*".repeat(
      4
    )}${phoneNumber.substring(phoneNumber.length - 4)}`;
  }

  return phoneNumber;
};
