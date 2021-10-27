import { createApp } from 'vue'
import App from './App.vue'
import useEvent from './state/useEvent'
import { Events } from "@/state/events";

import '@/css/global.css'

const { on } = useEvent()

on(Events.PING, (data) => console.log('pinged server', data))
on(Events.ERROR, (data) => console.error('an error occured', data))

createApp(App).mount('#app')
