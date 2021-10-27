import { Api } from "@/service/api";
import { Events } from "@/state/events";
import useState from "@/state/useState";
import useEvent from "@/state/useEvent";

const { PING, FOUND, ERROR, SEARCH_ERROR } = Events

export default function useMutation() {
   const { setSponsorCount, setSponsors } = useState()
   const { emit } = useEvent()

   async function ping() {
      const response = await Api.ping();
      emit(PING, response)
      setSponsorCount(response.length)
   }

   async function findSponsor(name: string) {
      try {
         const res = await Api.getSponsor(name);
         emit(FOUND, res.length)
         setSponsors(res)
      } catch (err) {
         emit(ERROR, err as string)
         emit(SEARCH_ERROR)
      }
   }

   async function fetchSponsorByType(type: string) {
      try {
         const res = await Api.findSponsorsByType(type)
         setSponsors(res)
         emit(FOUND, res.length)
      } catch (error) {
         emit(ERROR, error as string)
      }
   }

   return {
      findSponsor,
      fetchSponsorByType,
      ping
   }
}