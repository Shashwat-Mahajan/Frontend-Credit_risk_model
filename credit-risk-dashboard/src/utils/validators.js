export function validateForm(data) {
  for (let key in data) {
    if (data[key] === "" || data[key] === undefined) {
      return `Please fill ${key}`;
    }
  }

  return null;
}
