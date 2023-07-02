
export const checkIdSubject = (id:string, subjects:any) => {
    let f = true;
    subjects.forEach((subject:any) => {
        if(subject.id===id){
            f = false;
        }
    });
    return f;
}