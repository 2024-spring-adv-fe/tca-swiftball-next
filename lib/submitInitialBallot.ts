"use server";

import type { preBallot } from "@/lib/types/ballot";
import { auth } from "@clerk/nextjs/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { nanoid } from "nanoid";

const { userId }: { userId: string | null } = auth();

export const submitInitialBallot = async (preBallot: preBallot) => {
   const ballot_id = nanoid(13);
   const now = new Date().toISOString();

   const db = getRequestContext().env.DB;
   await db
      .prepare(
         `
      INSERT INTO ballots (
         ballot_id,
         user_id,
         title,
         created_at,

         lover_bodysuit,
         lover_themanjacket,
         lover_guitar_color,
         fearless_dress,
         evermore_dress,
         evermore_champagne_cheer,
         reputation_jumpsuit,
         speak_now_dress,
         red_22_shirt,
         folklore_dress,
         n1989_set,
         surprise_guitar_speech,
         surprise_guitar_album,
         surprise_guitar_song,
         surprise_piano_speech,
         surprise_piano_album,
         surprise_piano_song,
         midnights_tshirt_dress,
         midnights_midnight_rain_bodysuit,
         midnights_karma_jacket,
         misc_special_guest,
         misc_unhinged
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
   `,
      )
      .bind(
         ballot_id,
         userId,
         preBallot.title,
         now,

         preBallot.lover_bodysuit,
         preBallot.lover_themanjacket,
         preBallot.lover_guitar_color,
         preBallot.fearless_dress,
         preBallot.evermore_dress,
         preBallot.evermore_champagne_cheer,
         preBallot.reputation_jumpsuit,
         preBallot.speak_now_dress,
         preBallot.red_22_shirt,
         preBallot.folklore_dress,
         preBallot.n1989_set,
         preBallot.surprise_guitar_speech,
         preBallot.surprise_guitar_album,
         preBallot.surprise_guitar_song,
         preBallot.surprise_piano_speech,
         preBallot.surprise_piano_album,
         preBallot.surprise_piano_song,
         preBallot.midnights_tshirt_dress,
         preBallot.midnights_midnight_rain_bodysuit,
         preBallot.midnights_karma_jacket,
         preBallot.misc_special_guest,
         preBallot.misc_unhinged,
      )
      .run();

   return ballot_id;
};
