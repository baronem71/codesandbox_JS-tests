<template>
  <div></div>
</template>

<script>
export default {
  name: "Cam",
  components: {},
  methods: {
    test() {
      var video = document.querySelector("video");

      var assetURL = "frag_bunny.mp4";
      // Need to be specific for Blink regarding codecs
      // ./mp4info frag_bunny.mp4 | grep Codec
      var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

      if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
        var mediaSource = new MediaSource();
        //console.log(mediaSource.readyState); // closed
        video.src = URL.createObjectURL(mediaSource);
        mediaSource.addEventListener("sourceopen", sourceOpen);
      } else {
        console.error("Unsupported MIME type or codec: ", mimeCodec);
      }

      function sourceOpen(_) {
        //console.log(this.readyState); // open
        var mediaSource = this;
        var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
        fetchAB(assetURL, function(buf) {
          sourceBuffer.addEventListener("updateend", function(_) {
            mediaSource.endOfStream();
            video.play();
            //console.log(mediaSource.readyState); // ended
          });
          sourceBuffer.appendBuffer(buf);
        });
      }

      function fetchAB(url, cb) {
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.responseType = "arraybuffer";
        xhr.onload = function() {
          cb(xhr.response);
        };
        xhr.send();
      }
    },
    async getCam() {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      const video = document.createElement("video");
      if ("srcObject" in video) {
        video.srcObject = mediaStream;
      } else {
        // Avoid using this in new browsers, as it is going away.
        video.src = URL.createObjectURL(mediaStream);
      }
    },
    async getVidSource() {
      const mediaSource = new MediaSource();
      const video = document.createElement("video");
      // Older browsers may not have srcObject
      if ("srcObject" in video) {
        try {
          video.srcObject = mediaSource;
        } catch (err) {
          if (err.name !== "TypeError") {
            throw err;
          }
          // Even if they do, they may only support MediaStream
          video.src = URL.createObjectURL(mediaSource);
        }
      } else {
        video.src = URL.createObjectURL(mediaSource);
      }
    }
  }
};
</script>

<style>
</style>
