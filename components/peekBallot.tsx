"use server";

import { Ballot } from "@/lib/types/ballot";
import { getRequestContext } from "@cloudflare/next-on-pages";

const fetchBallot = async (ballot_id: string, user_id: string) => {
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

type PeekBallotProps = {
   ballot_id: string;
   user_id: string;
};

const PeekBallot = async ({ ballot_id, user_id }: PeekBallotProps) => {
   if (!ballot_id || !user_id) {
      return;
   }

   const ballot = await fetchBallot(ballot_id, user_id);

   if (!ballot) {
      return;
   }

   return (
      <div>
         <h1>{ballot.title}</h1>

         <h2>Your predictions</h2>
         <p>{ballot.lover_bodysuit}</p>
         <p>{ballot.lover_themanjacket}</p>
         <p>{ballot.lover_guitar_color}</p>
         <p>{ballot.fearless_dress}</p>
         <p>{ballot.evermore_dress}</p>
         <p>{ballot.evermore_champagne_cheer}</p>
         <p>{ballot.reputation_jumpsuit}</p>
         <p>{ballot.speak_now_dress}</p>
         <p>{ballot.red_22_shirt}</p>
         <p>{ballot.folklore_dress}</p>
         <p>{ballot.n1989_set}</p>
         <p>{ballot.surprise_guitar_speech}</p>
         <p>{ballot.surprise_guitar_album}</p>
         <p>{ballot.surprise_guitar_song}</p>
         <p>{ballot.surprise_piano_speech}</p>
         <p>{ballot.surprise_piano_album}</p>
         <p>{ballot.surprise_piano_song}</p>
         <p>{ballot.midnights_tshirt_dress}</p>
         <p>{ballot.midnights_midnight_rain_bodysuit}</p>
         <p>{ballot.midnights_karma_jacket}</p>
         <p>{ballot.misc_special_guest}</p>
         <p>{ballot.misc_unhinged}</p>

         <h2>Taylor</h2>
         <p>{ballot.TAYLOR_lover_bodysuit}</p>
         <p>{ballot.TAYLOR_lover_themanjacket}</p>
         <p>{ballot.TAYLOR_lover_guitar_color}</p>
         <p>{ballot.TAYLOR_fearless_dress}</p>
         <p>{ballot.TAYLOR_evermore_dress}</p>
         <p>{ballot.TAYLOR_evermore_champagne_cheer}</p>
         <p>{ballot.TAYLOR_reputation_jumpsuit}</p>
         <p>{ballot.TAYLOR_speak_now_dress}</p>
         <p>{ballot.TAYLOR_red_22_shirt}</p>
         <p>{ballot.TAYLOR_folklore_dress}</p>
         <p>{ballot.TAYLOR_n1989_set}</p>
         <p>{ballot.TAYLOR_surprise_guitar_speech}</p>
         <p>{ballot.TAYLOR_surprise_guitar_album}</p>
         <p>{ballot.TAYLOR_surprise_guitar_song}</p>
         <p>{ballot.TAYLOR_surprise_piano_speech}</p>
         <p>{ballot.TAYLOR_surprise_piano_album}</p>
         <p>{ballot.TAYLOR_surprise_piano_song}</p>
         <p>{ballot.TAYLOR_midnights_tshirt_dress}</p>
         <p>{ballot.TAYLOR_midnights_midnight_rain_bodysuit}</p>
         <p>{ballot.TAYLOR_midnights_karma_jacket}</p>
         <p>{ballot.TAYLOR_misc_special_guest}</p>
         <p>{ballot.TAYLOR_misc_unhinged}</p>
      </div>
   );
};

export default PeekBallot;
