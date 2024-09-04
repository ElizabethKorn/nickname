export default class Validator {
  validateUserName(name) {
    return /^(?!.*\d{4})(?![\d_-])[A-Za-z\d_-]+(?<![\d_-])$/.test(name);
  }
}
