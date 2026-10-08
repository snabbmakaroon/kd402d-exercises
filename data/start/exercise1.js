// Exercise 1: store a sound
// Tuesday's riff, now with data in it: notes, lengths and tempos stored in variables.
// Each exercise has its own file and its own button on the page. Do them in order:
// exercise1.js, exercise2.js, and so on. After each one: save, press its button, check the console, commit.
// synth and chordSynth, the instruments, are made in setup.js.

// Every value is typed straight into the calls.
// TODO 1a: above the function, store the first note and the length in variables:
//            const note = "C4";
//            let duration = "8n";
//          Then use them in the first call: synth.triggerAttackRelease(note, duration, start);
// TODO 1b: for each variable, decide: does it change while the piece plays (let) or stay fixed (const)?
// TODO 1c: on a new line under the variables, change duration: duration = "2n";  Play. Hear the difference?
// TODO 1d: try the same with note: note = "D4";  Read the error in the console. Then delete that line.
const note1 = "E4";
const note2 = "F4";
const note3 = "A4";
let duration1 = "8n";
duration1 = "2n"

function exercise1(start) {
  synth.triggerAttackRelease(note1, duration1, start);
  synth.triggerAttackRelease(note2, duration1, start + 1);
  synth.triggerAttackRelease(note3, duration1, start + 2);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-1", exercise1);
