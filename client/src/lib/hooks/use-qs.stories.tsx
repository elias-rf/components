import useQs from "./use-qs";
export default {
  title: "useQs",
};
export function Default() {
  const [story] = useQs("story");
  return (
    <>
      <div>{story}</div>
    </>
  );
}
