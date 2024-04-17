"use server";

import { auth } from "@clerk/nextjs/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

const { userId }: { userId: string | null } = auth();

const fetchIndividualBallotStats = async (ballot_id: string) => {
   const db = getRequestContext().env.DB;

   const ballots = await db
      .prepare(
         `
      SELECT
         points,
         accuracy
      FROM ballots WHERE user_id = '${userId}';`,
      )
      .all();

   return ballots;
};
