export const storeData = async (key, value) => {
  try {
    await localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await localStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    console.log(e);
  }
};