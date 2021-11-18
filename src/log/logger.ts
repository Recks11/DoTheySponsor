enum LogLevels {
   ERROR = 'error',
   INFO = 'info',
   WARN = 'warn',
   DEBUG = 'debug',
   ALL = 'all'
}

interface AppLogger {
   info(...data: any[]): void;

   log(...data: any[]): void;

   warn(...data: any[]): void;

   info(...data: any[]): void;

   debug(...data: any[]): void;

   error(...data: any[]): void;
}

class ConsoleLogger implements AppLogger {
   private static nativeConsole: Console = console
   private readonly logHierarchy: Map<string, number> = new Map<string, number>()

   private constructor() {
      this.logHierarchy.set(LogLevels.WARN, 0)
      this.logHierarchy.set(LogLevels.ERROR, 1)
      this.logHierarchy.set(LogLevels.INFO, 2)
      this.logHierarchy.set(LogLevels.DEBUG, 3)
      this.logHierarchy.set(LogLevels.ALL, 4)
   }

   static loadLogger() {
      const logger = new ConsoleLogger()
      console = Object.create(logger)
      return logger
   }

   private static getTime() {
      return new Date()
   }

   log(...obj: any[]) {
      this.info(obj)
   }

   warn(...obj: any[]) {
      if (!this.checkLevel(LogLevels.WARN))
         return;
      ConsoleLogger.nativeConsole.warn('[WARNING]', ConsoleLogger.getTime().toISOString(), `[${this.getCaller()}]`, '\n', ...obj)
   }

   info(...obj: any[]) {
      if (!this.checkLevel(LogLevels.INFO))
         return;
      ConsoleLogger.nativeConsole.info('[INFO]', ConsoleLogger.getTime().toISOString(), `[${this.getCaller()}]`, '\n', ...obj)
   }

   debug(...obj: any[]) {
      if (!this.checkLevel(LogLevels.DEBUG))
         return;
      ConsoleLogger.nativeConsole.debug('[DEBUG]', ConsoleLogger.getTime().toISOString(), `[${this.getCaller()}]`, '\n', ...obj)
   }

   error(...obj: any[]) {
      if (!this.checkLevel(LogLevels.ERROR))
         return;
      ConsoleLogger.nativeConsole.error('[ERROR]', ConsoleLogger.getTime().toISOString(), `[${this.getCaller()}]`, '\n', ...obj)
   }

   getCaller() {
      let e = new Error();
      if (e.stack == undefined) return ''
      let frame = e.stack.split('\n')[3] // change to 3 for grandparent func
      let ting = frame.split('/').reverse()
      let folder = ting[1]
      let file = ting[0].replace(')', '')
      let fileName = file
      const fileParamIndex = file.indexOf('?')
      const fileSectionIndex = file.indexOf(':')

      if (fileParamIndex > 0) {
         fileName = file.substring(0, fileParamIndex)

         if (fileSectionIndex > 0) {
            fileName = `${fileName}${file.substring(fileSectionIndex, file.length)}`
         }
      }

      return `${folder}/${fileName}`
   }

   clear() {
      ConsoleLogger.nativeConsole.clear()
   }

   private static systemLogLevel() {
      return import.meta.env.LOG_LEVEL ?? LogLevels.INFO
   }

   private checkLevel(level: LogLevels) {
      const systemLevel = this.logHierarchy.get(ConsoleLogger.systemLogLevel()) ?? 1
      const logLevel = this.logHierarchy.get(level) ?? 1
      return logLevel <= systemLevel
   }
}

export const LOG = ConsoleLogger.loadLogger()
