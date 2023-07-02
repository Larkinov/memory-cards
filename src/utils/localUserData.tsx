export const checkAuth = () => {
  if (localStorage.getItem("firstLoading") === "1") {
  }
};

export const setUserData = (id: string, email: string) => {
  localStorage.setItem("userID", id);
  localStorage.setItem("email", email);
  //token?
};

export const getUserData = () => {
  if (localStorage.getItem("userID")) {
    let data = {
      id: localStorage.getItem("userID"),
      email: localStorage.getItem("email"),
    };
    return data;
  }else{
    return false;
  }
};

export const clearUserData = () => {
  localStorage.removeItem("userID");
  localStorage.removeItem("email");
};
