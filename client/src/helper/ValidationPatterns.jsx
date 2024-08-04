// src/utils/validationPatterns.js
export const validationPatterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Minimum eight characters, at least one letter and one number
  phoneNumber: /^[0-9]{10}$/, // 10 digit phone number
  name: /^[a-zA-Z\s]{2,}$/, // Only letters and spaces, at least 2 characters
};
