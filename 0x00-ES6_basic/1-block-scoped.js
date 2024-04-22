export default function taskBlock(trueOrFalse) {
  let task = false; // Change var to let
  let task2 = true; // Change var to let

  if (trueOrFalse) {
    let task = true; // Change var to let
    let task2 = false; // Change var to let
  }

  return [task, task2];
}
