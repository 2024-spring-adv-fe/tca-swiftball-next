import { Ballot } from "@/lib/types/ballot";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const fetchBallot = async (ballot_id: string, user_id: string | null) => {
   if (!user_id) {
      return null;
   }

   const db = getRequestContext().env.DB;

   const ballot = await db
      .prepare(
         `
         SELECT * FROM ballots WHERE ballot_id = '${ballot_id}' AND user_id = '${user_id}';
      `,
      )
      .first<Ballot>();

   return ballot;
};
