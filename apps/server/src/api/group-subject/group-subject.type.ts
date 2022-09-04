export type TGroupSubjectId = {
  group_id: string;
}

export type TGroupSubjectBase = {
  subject_id?: string;
}

 export type TGroupSubject = Partial<TGroupSubjectId | TGroupSubjectBase>