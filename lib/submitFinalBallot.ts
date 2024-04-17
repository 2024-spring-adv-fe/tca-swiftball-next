"use server";

import type { ballotAnswers } from "@/lib/types/ballot";
import { auth } from "@clerk/nextjs/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { calculatePoints } from "./calculatePoints";

const { userId }: { userId: string | null } = auth();

export const submitFinalBallot = async (
   ballotAnswers: ballotAnswers,
   ballot_id: string,
) => {
   //const points = calculatePoints(ballot_id, ballotAnswers);
   calculatePoints(ballot_id, ballotAnswers);
   const points = 0;
   const accuracy = 0;
   const now = new Date().toISOString();

   const db = getRequestContext().env.DB;
   await db
      .prepare(
         `
      UPDATE BALLOTS SET
         points = ?,
         finished_at = ?,
         accuracy = ?,
         
         TAYLOR_lover_bodysuit = ?,
         TAYLOR_lover_themanjacket = ?,
         TAYLOR_lover_guitar_color = ?,
         TAYLOR_fearless_dress = ?,
         TAYLOR_evermore_dress = ?,
         TAYLOR_evermore_champagne_cheer = ?,
         TAYLOR_reputation_jumpsuit = ?,
         TAYLOR_speak_now_dress = ?,
         TAYLOR_red_22_shirt = ?,
         TAYLOR_folklore_dress = ?,
         TAYLOR_n1989_set = ?,
         TAYLOR_surprise_guitar_speech = ?,
         TAYLOR_surprise_guitar_album = ?,
         TAYLOR_surprise_guitar_song = ?,
         TAYLOR_surprise_piano_speech = ?,
         TAYLOR_surprise_piano_album = ?,
         TAYLOR_surprise_piano_song = ?,
         TAYLOR_midnights_tshirt_dress = ?,
         TAYLOR_midnights_midnight_rain_bodysuit = ?,
         TAYLOR_midnights_karma_jacket = ?,
         TAYLOR_misc_special_guest = ?,
         TAYLOR_misc_unhinged = ?

      WHERE ballot_id = ?
   `,
      )
      .bind(
         points,
         now,
         accuracy,

         ballotAnswers.TAYLOR_lover_bodysuit,
         ballotAnswers.TAYLOR_lover_themanjacket,
         ballotAnswers.TAYLOR_lover_guitar_color,
         ballotAnswers.TAYLOR_fearless_dress,
         ballotAnswers.TAYLOR_evermore_dress,
         ballotAnswers.TAYLOR_evermore_champagne_cheer,
         ballotAnswers.TAYLOR_reputation_jumpsuit,
         ballotAnswers.TAYLOR_speak_now_dress,
         ballotAnswers.TAYLOR_red_22_shirt,
         ballotAnswers.TAYLOR_folklore_dress,
         ballotAnswers.TAYLOR_n1989_set,
         ballotAnswers.TAYLOR_surprise_guitar_speech,
         ballotAnswers.TAYLOR_surprise_guitar_album,
         ballotAnswers.TAYLOR_surprise_guitar_song,
         ballotAnswers.TAYLOR_surprise_piano_speech,
         ballotAnswers.TAYLOR_surprise_piano_album,
         ballotAnswers.TAYLOR_surprise_piano_song,
         ballotAnswers.TAYLOR_midnights_tshirt_dress,
         ballotAnswers.TAYLOR_midnights_midnight_rain_bodysuit,
         ballotAnswers.TAYLOR_midnights_karma_jacket,
         ballotAnswers.TAYLOR_misc_special_guest,
         ballotAnswers.TAYLOR_misc_unhinged,

         ballot_id,
      )
      .run();
};
