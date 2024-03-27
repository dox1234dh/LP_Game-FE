<template>
  <div class="w-full h-full grid grid-cols-10">
    <audio class="hidden" controls autoplay loop>
      <source src="~/public/BGFishing.mp3" type="audio/mpeg">
    </audio>
    <iframe v-on:load="onLoadIframe" class="w-full h-full col-span-7" id="game" ref="gameRef"
            :src="'/game.html'"></iframe>
    <a-card class="col-span-3 space-y-6" title="Bảng câu hỏi">
      <div class="space-y-4">
        <!--     Câu hỏi -->
        <div class="text-lg">
          {{ questionCurrent['question'] }}
        </div>
        <!--     Danh sách các câu trả lời -->
        <div class="flex flex-col space-y-2 overflow-y-auto">
          <div v-for="(item,idx) in questionCurrent?.listAnswers" :key="idx"
               class="w-full break-words text-wrap text-black border rounded bg-[#bdbdbd] text-base">
            {{ keyQuestion[idx] + ': ' + item?.answer }}
          </div>
        </div>
      </div>
    </a-card>
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
  data() {
    return {
      questionCurrent: {},
      keyQuestion: [
        'A', 'B', 'C', 'D'
      ]
    }
  },
  mounted() {
    this.questionCurrent = this.data[0];
  },
  methods: {
    onLoadIframe() {
      // transfer data to iframe
      const self = this;
      document.getElementById('game').contentWindow.initDataProp(this.data)
      window.addEventListener('message', function (event) {
        console.log(event.data); // Message received from child
        if (event.data?.currentQuestionIndex !== undefined) {
          self.questionCurrent = self.data[Number(event.data?.currentQuestionIndex)]
        } else {
          //  Nhận được điểm số, bắt đầu gọi api để lưu
          self.callApiPlayLog(event.data?.score, event.data?.status)
        }
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
