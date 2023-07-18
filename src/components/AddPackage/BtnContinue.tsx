import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { checkIdSubject } from "../../utils/checkIdSubject";
import {
  StatusProcess,
  TSubject,
  TthunkPackage,
  setPackageDB,
  setStatusSetPackage,
  setSubject,
} from "../../redux/slices/SubjectsSlice";
import { useDispatch } from "react-redux";
import { setSubjectsData } from "../../utils/localUserData";

type BtnContinueProps = {
  errorCards: Function;
  errorName: Function;
};

const BtnContinue: React.FC<BtnContinueProps> = ({ errorCards, errorName }) => {
  const { id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const { cards, name, type } = useSelector(
    (state: RootState) => state.package
  );
  const onClickContinue = () => {
    let idSubject: string = String(Math.random());
    if (checkIdSubject(idSubject, subjects)) {
      if (name && cards.length > 0) {
        let subject: TSubject = {
          title: name,
          cards: cards,
          type: type,
          id: idSubject,
        };
        errorCards(false);
        errorName(false);
        let pack: TthunkPackage = {
          subject: subject,
          idUser: id,
          idSubject: id + "id" + idSubject,
        };

        if (id) {
          appDispatch(setPackageDB(pack));
        } else {
          dispatch(setSubject(subject));
          dispatch(setStatusSetPackage(StatusProcess.SUCCESS));
        }
      } else {
        if (!name) {
          errorName(true);
        }
        if (cards.length === 0) {
          errorCards(true);
        }
      }
    }
  };

  return (
    <>
      <Button onClick={onClickContinue} autoFocus>
        Создать пакет
      </Button>
    </>
  );
};

export default BtnContinue;
