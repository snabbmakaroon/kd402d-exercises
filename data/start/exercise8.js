// Exercise 8: bug hunt

// The octave arrives as text, the way it would from a text box on a web page.
const typedOctave = 4;
const noteUp = "C" + (typedOctave + 1);
const noteDown = "C" + (typedOctave - 1);

// TODO 8a: predict what noteUp and noteDown hold. Then log them and play exercise 8.
// TODO 8b: one note is wildly wrong. Why? Fix noteUp so it really is one octave up.

function exercise8(start) {
  synth.triggerAttackRelease("C4", "4n", start)
  synth.triggerAttackRelease(noteDown, "4n", start + 0.5);
  synth.triggerAttackRelease(noteUp, "4n", start + 1);
}
console.log(noteUp);
console.log(noteDown);
// ---------- You don't need to change anything below this line ----------

playOnClick("play-8", exercise8);
