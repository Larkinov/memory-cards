import { TypePackageEnum } from "../redux/slices/PackageSlice";
import { TSubject } from "../redux/slices/SubjectsSlice";

export const getThisSubject = (subjects:TSubject[], thisSubjectId:string) => {
    let x: TSubject = {
      title: "",
      id: "",
      cards: [],
      type: TypePackageEnum.SIMPLE_PACK,
    };
    subjects.forEach((subject) => {
      if (subject.id === thisSubjectId) {
        x = subject;
      }
    });
    return x;
  };