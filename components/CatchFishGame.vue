<template>
  <div class="w-full h-full">
    <iframe v-on:load="onLoadIframe" class="w-full h-full" id="game" ref="gameRef" :src="'/game.html'"></iframe>
  </div>
</template>

<script lang="js">
export default {
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    onLoadIframe() {
      // transfer data to iframe
      const self = this;
      document.getElementById('game').contentWindow.initDataProp(this.data)
      window.addEventListener('message', function (event) {
        console.log(event.data); // Message received from child
        //  Nhận được điểm số, bắt đầu gọi api để lưu
        console.log(event.data, "===")
        self.callApiPlayLog(event.data.score, event.data.status)
      },);
    },
    callApiPlayLog(score, status) {
      if (score !== undefined && status !== undefined) {
        this.$emit('callback', {score, status})
      }
    }
  }
};
</script>

<style scoped>

</style>
