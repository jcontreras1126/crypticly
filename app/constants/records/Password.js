// @flow

import { Record, Map } from 'immutable';

import { generateRandomPassword } from 'utils/passwordGenerator';

const DEFAULT_PASSWORD_LENGTH = 10;

// PasswordKeys
export const USERNAME = 'username';
export const PASSWORD = 'password';
export const NAME = 'name';
export const URL = 'url';
export const LAST_UPDATED = 'lastUpdated';
export const GROUP = 'group';
export const PASSWORD_LENGTH = 'passwordLength';
export const LETTERS_ENABLED = 'lettersEnabled';
export const NUMS_ENABLED = 'numsEnabled';
export const SPECIAL_CHARS_ENABLED = 'specialCharsEnabled';
export const UPPERCASE_ENABLED = 'uppercaseEnabled';
// export const MANUAL_ENTRY_ENABLED = 'manualEntryEnabled';

class Password extends Record(
  {
    [USERNAME]: '',
    [PASSWORD]: '',
    [NAME]: '',
    [URL]: '',
    [LAST_UPDATED]: null,
    [GROUP]: '',
    [PASSWORD_LENGTH]: DEFAULT_PASSWORD_LENGTH,
    [LETTERS_ENABLED]: true,
    [NUMS_ENABLED]: true,
    [SPECIAL_CHARS_ENABLED]: true,
    [UPPERCASE_ENABLED]: true
    // [MANUAL_ENTRY_ENABLED]: false
  },
  'Password'
) {
  constructor(props) {
    super(props);
  }
  getUsername() {
    return this[USERNAME];
  }

  getPassword() {
    return this[PASSWORD];
  }

  getName() {
    return this[NAME];
  }

  getUrl() {
    return this[URL];
  }

  getLastUpdated() {
    return this[LAST_UPDATED];
  }

  getGroup() {
    return this[GROUP];
  }

  getPasswordLength() {
    return this[PASSWORD_LENGTH];
  }

  getLettersEnabled() {
    return this[LETTERS_ENABLED];
  }

  getNumsEnabled() {
    return this[NUMS_ENABLED];
  }

  getSpecialCharsEnabled() {
    return this[SPECIAL_CHARS_ENABLED];
  }

  getUppercaseEnabled() {
    return this[UPPERCASE_ENABLED];
  }

  // getManualEntryEnabled() {
  //   return this[MANUAL_ENTRY_ENABLED];
  // }

  generateRandomPassword() {
    const passwordLength = this.getPasswordLength();
    const lettersEnabled = this.getLettersEnabled();
    const numsEnabled = this.getNumsEnabled();
    const specialCharsEnabled = this.getSpecialCharsEnabled();
    const uppercaseEnabled = this.getUppercaseEnabled();

    const randomPassword = generateRandomPassword(
      lettersEnabled,
      uppercaseEnabled,
      specialCharsEnabled,
      numsEnabled,
      passwordLength
    );

    return randomPassword;
  }
}

export default Password;
