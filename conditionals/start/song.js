// Conditionals: the song
// Tuesday's functions, yesterday's variables and today's conditionals, in one piece.
// Do the steps in order. After each one: save, press Play, listen, check the console, commit.
// bass and synth, the instruments, are made in setup.js.

// ---------- Step 1: the instruments, as functions ----------
// Each one plays at time: the exact moment Tone hands us.
let beat = 1
let bar = 1
let isLively = true

function playBass(time) {
  bass.triggerAttackRelease("C2", "8n", time);
}

// TODO 1a: write playChord(time): play "C4", "E4" and "G4" on synth, all three at time, all "4n" long.
function Cmaj(duration, time) {
  synth.triggerAttackRelease("C4", duration, time);
  synth.triggerAttackRelease("E4", duration, time);
  synth.triggerAttackRelease("G4", duration, time);
}

function playChord(time){
  Cmaj("8n", time)
}
// TODO 1b: write playMelody(time): play "G4" on synth, "8n" long, at time.
function playMelody(time) {
  synth.triggerAttackRelease("G4", "8n", time);
}

// ---------- Step 2: hand the beat to Tone ----------
// Tone calls playStep for us, once every beat, and hands it the time to play at.
function playStep(time) {
  console.log("bar " + bar + ", beat " + beat);

  if (beat === 1) {
    playBass(time);
  }

  if (beat === 1 || beat === 3) {
    playChord(time);
  }

  if (isLively && beat === 4) {
    synth.triggerAttackRelease("C5", "16n", time);
  }

  if (bar > 2 && beat !==1) {
    if (bar <= 4) {
      console.log("poop");
    playMelody(time);
  }
  else if (bar > 4 && bar < 7) {
    synth.triggerAttackRelease("A4", duration, time)
  }
  else {
    synth.triggerAttackRelease("E4", duration, time)
  }


  }
    beat += 1;
  if (beat > 4) {
      beat = 1
      bar += 1
    }

}

new Tone.Loop(playStep, "4n").start(0); // "4n": once every beat


// ---------- Step 6: change the melody as the song moves on ----------
// TODO 6a: in playMelody, use if / else if / else on bar:
//          bars 1 to 4 play "G4", bars 5 and 6 play "A4", after that "E4".
// TODO 6b: end the piece: at the end of playStep, if (bar > 8) { Tone.Transport.stop(time); }

// Runs when you press Play: start counting from the top, then start Tone's clock.
function startSong() {
  beat = 1
  Tone.Transport.stop();
  Tone.Transport.start();
}

// ---------- You don't need to change anything below this line ----------

document.getElementById("song-play").addEventListener("click", async () => {
  await Tone.start();
  startSong();
});
