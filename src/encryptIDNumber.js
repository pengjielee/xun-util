/**
 * 加密身份证号 ('110101199003071137' -> '1101**********1137')
 *
 * @param  {[String]}
 * @return {[String]}
 */
const encryptIDNumber = (IDNumber) => {
  if (IDNumber) {
    IDNumber = IDNumber.trim();
    IDNumber = `${IDNumber.substring(0, 4)}${"*".repeat(
      10
    )}${IDNumber.substring(IDNumber.length - 4)}`;
  }

  return IDNumber;
};

export default encryptIDNumber;
