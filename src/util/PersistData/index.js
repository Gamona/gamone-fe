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

export const clearData = async key => {
  try {
    await localStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const clearDataByKey = async key => {
  try {
    await localStorage.removeItem(key);
  } catch (e) {
    console.log(e.message);
  }
};