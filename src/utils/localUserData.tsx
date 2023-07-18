import { TSubject } from "../redux/slices/SubjectsSlice";

export const setUserData = (id: string, email: string) => {
  localStorage.setItem("userID", id);
  localStorage.setItem("email", email);
  //token?
};

// export const getUserData = (): { id: string; email: string } => {
//   let data = {
//     id: getUserID(),
//     email: getEmail(),
//   };
//   return data;
// };

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

export const setSubjectsData = (subjects: TSubject[]) => {
  localStorage.setItem("subjects", JSON.stringify(subjects));
};

export const getSubjectsData = () => {
  let subjects = localStorage.getItem("subjects");
  if (subjects) return JSON.parse(subjects);
  else return false;
};

export const clearSubjectsData = () => {
  localStorage.removeItem("subjects");
};

export const deleteSubjectData = (idSubject: string) => {
  let subjects: TSubject[] = getSubjectsData();
  let newSubjects : TSubject[] = [];
  subjects.map((elem: TSubject) => {
    if (elem.id !== idSubject) {
      newSubjects.push(elem);
    }
  });
  setSubjectsData(newSubjects);
};
