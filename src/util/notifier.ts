import Events from '@/events';
import useEvent from '@/state/useEvent';

let timeout: number;
const { MODAL_SHOW, MODAL_HIDE } = Events;
const { emit } = useEvent();


export interface AppNotification {
   type: NotificationType;
   message: string;
}

export enum NotificationType {
   INFO,
   WARNING,
   ERROR
}

export function getNotificationStyle(type: NotificationType) {
   switch (type) {
      case NotificationType.INFO: return 'info'
      case NotificationType.ERROR: return 'error'
      case NotificationType.WARNING: return 'warning'
      default: return 'info'
   }
}

function createNotification(message: string, type: NotificationType): AppNotification {
   return {
      type,
      message
   }
}

export function notify(message: string, type: NotificationType) {
   emit(MODAL_SHOW, createNotification(message, type))
   timeout = setTimeout(() => {
      emit(MODAL_HIDE)
   }, 2000)
}

export function notifyError(message: string) {
   return notify(message, NotificationType.ERROR)
}

export function notifyWarining(message: string) {
   return notify(message, NotificationType.WARNING)
}

export function notifyInfo(message: string) {
   return notify(message, NotificationType.INFO)
}

export function clearNotifications() {
   if (timeout) clearTimeout(timeout)
   emit(MODAL_HIDE)
}

