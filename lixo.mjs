async function delay(tempo) {
  return await new Promise((resolve) =>
    setTimeout(() => resolve(`tempo: ${tempo}`), tempo)
  );
}

console.time("sync");
console.log(await delay(1000));
console.log(await delay(2000));
console.log(await delay(1500));
console.timeEnd("sync");

console.time("async");
console.log(await Promise.all([delay(1000), delay(2000), delay(1500)]));
console.timeEnd("async");
