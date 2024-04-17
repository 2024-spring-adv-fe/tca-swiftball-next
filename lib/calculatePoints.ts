import type { ballotAnswers, ballotGuesses } from "@/lib/types/ballot";
import { getRequestContext } from "@cloudflare/next-on-pages";

const fetchGuesses = async (ballot_id: string) => {
   const db = getRequestContext().env.DB;

   const { results: guesses } = await db
      .prepare(
         `
      SELECT
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
      FROM ballots WHERE ballot_id = '${ballot_id}';`,
      )
      .all<ballotGuesses>();

   return guesses;
};

export const calculatePoints = (ballot_id: string, answers: ballotAnswers) => {
   console.log(fetchGuesses(ballot_id));
};
