export const SetStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return undefined;
  }
};

export const GetStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return value;
  } catch {
    return undefined;
  }
};

export const RemoveStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return undefined;
  }
};
