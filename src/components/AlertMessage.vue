<template>
  <div class="alert-message">
    <div
      class="alert alert-strong alert-dismissible rounded-0 border-0"
      :class="`text-${item.status}`"
      v-for="(item, i) in messages"
      :key="i"
    >
      <i class="fas fa-check-circle me-1" v-if="item.status === 'success'"></i>
      <i class="fas fa-exclamation-triangle me-1" v-if="item.status === 'danger'"></i>
      {{ item.message }}

      <button
        type="button"
        class="btn-sm btn-close"
        @click="removeMessage(i)"
        aria-label="Close"
      ></button>

    </div>
  </div>
</template>





































<script>
export default {
  name: 'AlertMessage',
  data () {
    return {
      messages: []
    }
  },
  methods: {
    // 執行函式with值
      //並以自訂的messages陣列包裹自訂的物件with值
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 1000)
      
      this.messages.push({
        message:message,
        status:status,
        timestamp:timestamp
      })
      
      // 將值從物件帶出來，帶入另一個函式
      this.removeMessageWithTiming(timestamp);
    },
    
    removeMessage (num) {
      this.messages.splice(num, 1)
    },

    // 執行函式with值
    removeMessageWithTiming (timestamp) {
      
      setTimeout(() => {
        this.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            this.messages.splice(i, 1)
          }
        })
      }, 3000)
    }
  },
  
  created () {
    // 生命週期時執行this.emitter.on
    // 將值從物件帶出來，帶入另一個函式
    this.emitter.on('message:push', apple => {
      const { message, status = 'warning' } = apple
      
      this.updateMessage(message, status);
      
    })
    
  }
}
</script>








<style scope>
.alert-message {
  position: fixed;
  max-width: 50%;
  top: 90px;
  right: 30px;
  z-index: 1100;
}
</style>
