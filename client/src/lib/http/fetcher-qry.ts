function handleErrors(response) {
  if (!response.ok) {
    throw Error({ message: response.statusText, status: response.status });
  }
  return response;
}

export default function fetcherQRY(...args) {
  return fetch(...args)
    .then(handleErrors)
    .then((res) => res.json());
}
