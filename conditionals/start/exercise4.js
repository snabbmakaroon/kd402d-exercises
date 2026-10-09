// Exercise 4: two equals signs or three?
// Remember yesterday's bug hunt: the octave arrived as text, "4", and "4" + 1 gave "41".

function exercise4(start) {
  const typedOctave = "4"; // text, in quotation marks
  const octave = 4; // a number
  Number(typedOctave) === octave

  // TODO 4a: predict, then log both:
  //            console.log("Exercise 4: typedOctave == octave is " + (typedOctave == octave)); true
  //            console.log("Exercise 4: typedOctave === octave is " + (typedOctave === octave)); false
  console.log("typedOctave == octave is " + (typedOctave == octave));
  console.log("typedOctave === octave is " + (typedOctave === octave));
  // TODO 4b: one of them says "4" and 4 are the same. Which one? Is it telling you the truth?
  //          Write your answer in a comment here: the one with == says true because it changes the "4" to 4 automatically, the === takes the literal values and "4" is not the same as 4
  // TODO 4c: turn the text into a number first, then compare with three equals signs:
  //            Number(typedOctave) === octave
  console.log(Number(typedOctave) === octave)
  //          Log it. When you know both sides are the same kind of value, === gives the honest answer.

  synth.triggerAttackRelease("C" + octave, "8n", start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
