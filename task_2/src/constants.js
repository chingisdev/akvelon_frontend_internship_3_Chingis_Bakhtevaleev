export const FIELD_REQUIRED_ERROR = 'All fields are required.';
export const NAME_CONTAIN_ERROR = 'Name must contain latin letters only.';
export const PASSWORD_LENGTH_ERROR = 'Password must be at least 8 characters.';
const nameRegex = /^[a-zA-Z\s]{1,120}$/;
export const regexCheck = new RegExp(nameRegex);
