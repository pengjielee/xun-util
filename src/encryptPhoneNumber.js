/**
 * 加密手机号 ('18614023235' -> '186****3235')
 *
 * @param  {[String]}
 * @return {[String]}
 */
const encryptPhoneNumber = (phoneNumber) => {
  if (phoneNumber) {
    phoneNumber = phoneNumber.trim();
    phoneNumber = `${phoneNumber.substring(0, 3)}${"*".repeat(
      4
    )}${phoneNumber.substring(phoneNumber.length - 4)}`;
  }

  return phoneNumber;
};

export default encryptPhoneNumber;
