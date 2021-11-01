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
