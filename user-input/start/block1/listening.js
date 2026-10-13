// User input · Block 1: listening for keys
// Exercises 1 to 4. After each one: save, click the page, press keys, check the console, and commit.
// Click the page (not the console) before you press keys: only the page hears them.

// The instrument: plays one note at a time.
const synth = new Tone.Synth().toDestination();

// ---------- Exercise 1: hear the event ----------
// 1a Before you press anything, write down what you think event.key will be for:
// nothing will make a noise yet bc we havent coded it to do anything yet
//    a, nothing  7, nothing   the space bar, nothing   Shift, nothing   the up arrow, nothing
// 1b Click the page and press them. Was each one what you expected?
function handleKeyDown(event){
  console.log("SLAAAAYYYY")
  Tone.start(); // sound can only start after a key press or a click
  console.log(event.key);
    if (event.key === "a") {
      synth.triggerAttackRelease("C4", "8n");
    } else if (event.key === "s") {
      synth.triggerAttackRelease("D4", "8n");
    } else if (event.key === "d") {
      synth.triggerAttackRelease("E4", "8n");
    } else if (event.key === "f") {
      synth.triggerAttackRelease ("F4", "8n");
    } else if (event.key === "g") {
      synth.triggerAttackRelease ("G4", "8n");
    } else if (event.key === "h") {
      synth.triggerAttackRelease ("A4", "8n");
    } else if (event.key === "j") {
      synth.triggerAttackRelease ("B4", "8n");
    } else if (event.key === "k") {
      synth.triggerAttackRelease ("C5", "8n");
    } else if (event.key === "w") {
      synth.triggerAttackRelease ("C#4", "8n");
    } else if (event.key === "e") {
      synth.triggerAttackRelease ("D#4", "8n");
    } else if (event.key === "t") {
      synth.triggerAttackRelease ("F#4", "8n");
    } else if (event.key === "y") {
      synth.triggerAttackRelease ("G#4", "8n");
    } else if (event.key === "u") {
      synth.triggerAttackRelease ("A#4", "8n");
    }
};
document.addEventListener("keydown", handleKeyDown);

// ---------- Exercise 2: one key, one sound ----------
// TODO 2: inside the listener above, under the console.log, play "C4" when the key is "a":
//           if (event.key === "a") {
//             synth.triggerAttackRelease("C4", "8n");
//           }

// ---------- Exercise 3: a few keys with else if ----------
// TODO 3a: add an else if, so "s" plays "D4", and another, so "d" plays "E4".
// TODO 3b: play a three-note tune. (Try: d s a s d d d.)

// ---------- Exercise 4: name the handler ----------
// TODO 4a: move the whole function out of addEventListener and give it a name:
//            function handleKeyDown(event) {
//              …everything that was inside…
//            }
//          Then hand it over, with no brackets after the name:
//            document.addEventListener("keydown", handleKeyDown);
//          Press keys: everything should work exactly as before.
// TODO 4b: who calls it? Make the first line inside handleKeyDown say so:
//            console.log("handleKeyDown was called");
//          Save, and don't press anything yet: what does the console show? Now press keys.
// TODO 4c: look through your file for a line that calls handleKeyDown(). Is there one?
//          In a comment, say who calls handleKeyDown, and when.
// Line 45 calls the handleKeyDown function any time a key is pressed on the keyboard,
// then it depends on the key what note plays; thats what all the else if statements are for
