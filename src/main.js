import '@/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import useEvent from '@/state/useEvent'
import Events from "@/events"
import { LOG } from "./log/logger"


const { on } = useEvent()
on(Events.PING, (data) => LOG.info('pinged server', data))
on(Events.ERROR, (error) => LOG.error('an error occured:', error))

createApp(App).mount('#app')
