export default function fetcherSWR(...args) {
  return fetch(...args).then((res) => res.json());
}
