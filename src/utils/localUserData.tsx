// export const checkAuth = () => {
//   if (localStorage.getItem("firstLoading") === "1") {
//   }
// };

export const setUserData = (id: string, email: string) => {
  localStorage.setItem("userID", id);
  localStorage.setItem("email", email);
  //token?
};

export const getUserData = (): { id: string; email: string } => {
  let data = {
    id: getUserID(),
    email: getEmail(),
  };
  return data;
};

export const clearUserData = () => {
  localStorage.removeItem("userID");
  localStorage.removeItem("email");
};

export const getEmail = (): string => {
  let email = localStorage.getItem("email");
  if (email) {
    return email.slice(0, email.indexOf("@", 0));
  } else {
    return "login";
  }
};
export const getUserID = (): string => {
  let id = localStorage.getItem("userID");
  if (id) {
    return id;
  } else {
    return "";
  }
};
