<script setup lang="ts">
import { ref } from 'vue'
import useEvent from '@/state/useEvent'
import Events from '@/events'
import { AppNotification, getNotificationStyle } from '@/util/notifier'

const { MODAL_SHOW, MODAL_HIDE } = Events
const { on } = useEvent()

const message = ref('Loading Data ...')
const isHidden = ref(false)

on(MODAL_SHOW, (msg: AppNotification) => {
   const n = getNotificationStyle(msg.type);
   document.getElementById('modal-sec')!.className = `modal ${n}`
   message.value = msg.message
   isHidden.value = false
})

on(MODAL_HIDE, closeModal)

function closeModal() {
   message.value = ''
   isHidden.value = true
}

function parseNotification(notif: AppNotification) {
   var el = document.getElementById('modal-sec')
   if (el === undefined || el === null) return;
   console.log(el)
}

</script>

<template>
   <div id="modal-sec" class="modal" :class="{ 'hide': isHidden }">
      <p class="modal-message">{{ message }}</p>
      <span class="close" @click="closeModal()">X</span>
   </div>
</template>

<style scoped>
.hide {
   display: none;
}
.modal {
   z-index: 10001;
   position: fixed;
   max-width: 300px;
   min-width: 150px;
   border-radius: 5px;
   box-shadow: var(--button-shadow);
   background-color: var(--color-primary);
   min-height: 3rem;
   top: 20px;
   right: 20px;
   margin: 0;
   padding: 13px;
}
.modal-message {
   color: var(--text-color-alt);
   margin: 0;
}

.close {
   position: absolute;
   top: 8px;
   right: 8px;
   cursor: pointer;
}

.error {
   background-color: rgb(185, 32, 32);
   color: white;
}

.warning {
   background-color: rgb(185, 114, 32);
   color: white;
}

@media screen and (max-width: 767px) {
   .modal {
      max-width: unset;
      left: 20px;
      right: 20px;
   }
}
</style>
