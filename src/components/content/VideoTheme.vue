<template>
  <div class="video-theme">
    <div
      class="video-theme__thumb"
      :style="{backgroundImage: `url(${thumbnailUrl})`}"
      v-if="!videoActive"
      @click="setActive"
    ></div>
    <div class="video-theme__player" v-if="videoActive">
      <iframe
        class="video-theme__frame"
        :src="'https://www.youtube.com/embed/' + videoHash + '?autoplay=1'"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoTheme",
  props: {
    videoUrl: {
      type: String
    }
  },
  data() {
    return {
      videoActive: false,
      videoHash: this.videoUrl.split("?v=")[1]
    };
  },
  computed: {
    thumbnailUrl() {
      const thumbnailUrlTemplate =
        "https://img.youtube.com/vi/%%/hqdefault.jpg";

      return thumbnailUrlTemplate.replace("%%", this.videoHash);
    }
  },
  methods: {
    getHash() {
      return this.videoUrl.split("?v=")[1];
    },
    setActive() {
      this.videoActive = true;
    }
  }
};
</script>

<style lang="less" scoped>
.video-theme {
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__thumb {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transform: scale(1.2);
    cursor: pointer;

    &:active {
      &::before {
        transform: scale(0.8);
      }
    }

    &::before {
      content: "";
      width: 100px;
      height: 100px;
      left: calc(~"50% - 50px");
      top: calc(~"50% - 50px");
      position: absolute;
      background-image: url("../../assets/img/play.svg");
      background-size: contain;
      background-repeat: no-repeat;
      transition: all 0.1s;
    }
  }

  &__frame {
    height: 200px;
  }
}
</style>
