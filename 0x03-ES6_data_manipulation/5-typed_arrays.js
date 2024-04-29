export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the array length
  if (position < 0 || position >= length) {
    // Throw an error if the position is outside the range
    throw Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const newBuffer = new ArrayBuffer(length);

  // Create a new Int8Array view of the buffer
  // The slice specifies the range of the buffer to be used
  const int8 = new Int8Array(newBuffer, 0, length);

  // Set the value at the specified position in the Int8Array
  int8.set([value], position);

  // Return a new DataView object wrapping the buffer
  // This ensures that the ArrayBuffer can be accessed and manipulated safely
  return new DataView(newBuffer);
}
