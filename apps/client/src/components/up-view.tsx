import { Action } from "@er/types";
import { Icon } from "@iconify/react";

const folderParent = {
  body: '<path fill="currentColor" d="M28 8H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9.17l2.59 2.58L22 18l-5-5l-5 5l1.41 1.41L16 16.83V26H4V6h7.172l4 4H28v16h-6v2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/>',
  width: 32,
  height: 32,
};

interface UpViewProps {
  selected: string;
  dispatch: (action: Action) => void;
}

export function UpView({ selected, dispatch }: UpViewProps) {
  function handleUp() {
    const selectedArray = selected.split("/");
    selectedArray.pop();
    const rsp = selectedArray.join("/");

    dispatch({ type: "click", payload: rsp });
  }

  return (
    <div className="w-16 h-8">
      <Icon
        icon={folderParent}
        className={"inline w-8 h-8"}
        onClick={handleUp}
      />
    </div>
  );
}
