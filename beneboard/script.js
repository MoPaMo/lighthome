
const d = (e) => {
  return document.getElementById(e);
};
var audioFiles = [
  "hilfe",
  "joo",
  "riesenspinne_single",

  "riesenspinne",
  "holy",
  "muell",

  "sheesh",
  "",
  "moustache",
  "royal",
  "reverse",
  "",
  "benelol",
];
var sound = {};
for (var i = 0; i < audioFiles.length; i++) {
  let n = audioFiles[i];
  console.log(n);
  sound[n] = new Pizzicato.Sound(
    {
      source: "file",
      options: { path: "/beneboard/audio/" + n + ".mp3" },
    },
    function () {
      console.log(`sound file ${n} loaded!`);
      d(n).addEventListener("click", function () {
        sound[this.id].stop();
        sound[this.id].play();
      });
    }
  );
}
/*let noise=Pizzicato.Sound({
    source: 'script',
    options: {
        audioFunction: function(e) {
            var output = e.outputBuffer.getChannelData(0);
            for (var i = 0; i < e.outputBuffer.length; i++)
                output[i] = Math.random();
        }
    }
})*/
const keystring = "asdfghjklcvbn";
document.addEventListener("keydown", (e) => {
  let i = keystring.indexOf(e.key);
  console.log(sound.keys);
  if (i != -1) {
    i = i >= sound.length ? sound.length - 1 : i;

    sound[audioFiles[i]].stop();
    sound[audioFiles[i]].play();
    d(audioFiles[i]).classList.add("active");
  }
});
document.addEventListener("keyup", (e) => {
  let i = keystring.indexOf(e.key);
  if (i != -1) {
    i = i >= sound.length ? sound.length - 1 : i;
    d(audioFiles[i]).classList.remove("active");
  }
});
