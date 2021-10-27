const events = new Map<String, Function[]>()

export default function useEvent() {

   function on(key: string, callback: Function) {
      if (events.has(key)) {
         events.get(key)?.concat(callback)
         return;
      }
      events.set(key, [callback])
   }

   function off(key: string) {
      events.delete(key)
   }

   function emit(key: string, data?: any) {
      if (!events.has(key)) return;
      const fns = events.get(key)
      if (fns != undefined) {
         try {
            fns.forEach((fn) => data === undefined ? fn() : fn(data))
         } catch (err) {
            console.error(err)
         }
      }
   }

   function clear() {
      events.clear()
   }

   return {
      on,
      off,
      emit,
      clear
   }
}