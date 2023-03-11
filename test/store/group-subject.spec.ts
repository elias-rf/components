import { groupSubjectStore } from "../../model/group-subject/group-subject.store";

const groupSubjectStore = groupSubjectStore;

describe("groupSubjectStore", () => {
  it("getCan true", async () => {
    let rsp = await groupSubjectStore.getState().getCan({
      id: { group_id: "dev", subject_id: "/" },
    });
    expect(rsp).toEqual(true);
    rsp = await groupSubjectStore.getState().getCan({
      id: { group_id: "dev", subject_id: "/cliente" },
    });
    expect(rsp).toEqual(true);
  });

  it("getCan false", async () => {
    const rsp = await groupSubjectStore.getState().getCan({
      id: { group_id: "opt", subject_id: "/" },
    });
    expect(rsp).toEqual(false);
  });
});
