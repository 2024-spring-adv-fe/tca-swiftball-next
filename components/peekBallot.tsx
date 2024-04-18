"use server";

import { Ballot } from "@/lib/types/ballot";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

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
      <>
         <h1 className="text-center text-2xl font-bold">{ballot.title}</h1>
         <Tabs defaultValue="both" className="mt-4 w-full">
            <TabsList className="grid w-full grid-cols-3">
               <TabsTrigger value="guesses">You</TabsTrigger>
               <TabsTrigger value="both">Both</TabsTrigger>
               <TabsTrigger value="answers">Taylor</TabsTrigger>
            </TabsList>
            <TabsContent value="guesses">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Era</TableHead>
                        <TableHead>Question</TableHead>
                        <TableHead>Prediction</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Bodysuit</TableCell>
                        <TableCell>{ballot.lover_bodysuit}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>The Man jacket</TableCell>
                        <TableCell>{ballot.lover_themanjacket}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Guitar color</TableCell>
                        <TableCell>{ballot.lover_guitar_color}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Fearless</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.fearless_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.evermore_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>champagne problems cheer</TableCell>
                        <TableCell>{ballot.evermore_champagne_cheer}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">reputation</TableCell>
                        <TableCell>Jumpsuit</TableCell>
                        <TableCell>{ballot.reputation_jumpsuit}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Speak Now</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.speak_now_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Red</TableCell>
                        <TableCell>22 shirt</TableCell>
                        <TableCell>{ballot.red_22_shirt}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">folklore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.folklore_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">1989</TableCell>
                        <TableCell>Set</TableCell>
                        <TableCell>{ballot.n1989_set}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar speech</TableCell>
                        <TableCell>{ballot.surprise_guitar_speech}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar album</TableCell>
                        <TableCell>{ballot.surprise_guitar_album}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar song</TableCell>
                        <TableCell>{ballot.surprise_guitar_song}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano speech</TableCell>
                        <TableCell>{ballot.surprise_piano_speech}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano album</TableCell>
                        <TableCell>{ballot.surprise_piano_album}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano song</TableCell>
                        <TableCell>{ballot.surprise_piano_song}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>T-shirt dress</TableCell>
                        <TableCell>{ballot.midnights_tshirt_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Midnight Rain bodysuit</TableCell>
                        <TableCell>
                           {ballot.midnights_midnight_rain_bodysuit}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Karma jacket</TableCell>
                        <TableCell>{ballot.midnights_karma_jacket}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Special guest</TableCell>
                        <TableCell>{ballot.misc_special_guest}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Unhinged</TableCell>
                        <TableCell>{ballot.misc_unhinged}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TabsContent>
            <TabsContent value="answers">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Era</TableHead>
                        <TableHead>Question</TableHead>
                        <TableHead>Prediction</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Bodysuit</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_bodysuit}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>The Man jacket</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_themanjacket}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Guitar color</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_guitar_color}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Fearless</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.TAYLOR_fearless_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.TAYLOR_evermore_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>champagne problems cheer</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_evermore_champagne_cheer}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">reputation</TableCell>
                        <TableCell>Jumpsuit</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_reputation_jumpsuit}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Speak Now</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.TAYLOR_speak_now_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Red</TableCell>
                        <TableCell>22 shirt</TableCell>
                        <TableCell>{ballot.TAYLOR_red_22_shirt}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">folklore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.TAYLOR_folklore_dress}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">1989</TableCell>
                        <TableCell>Set</TableCell>
                        <TableCell>{ballot.TAYLOR_n1989_set}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar speech</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_speech}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar album</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_album}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar song</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_song}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano speech</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_speech}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano album</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_album}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano song</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_song}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>T-shirt dress</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_tshirt_dress}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Midnight Rain bodysuit</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_midnight_rain_bodysuit}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Karma jacket</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_karma_jacket}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Special guest</TableCell>
                        <TableCell>{ballot.TAYLOR_misc_special_guest}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Unhinged</TableCell>
                        <TableCell>{ballot.TAYLOR_misc_unhinged}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TabsContent>
            <TabsContent value="both">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Era</TableHead>
                        <TableHead>Question</TableHead>
                        <TableHead>You</TableHead>
                        <TableHead>Taylor</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.lover_bodysuit ===
                              ballot.TAYLOR_lover_bodysuit,
                           "bg-red-50":
                              ballot.lover_bodysuit !==
                              ballot.TAYLOR_lover_bodysuit,
                        })}
                     >
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Bodysuit</TableCell>
                        <TableCell>{ballot.lover_bodysuit}</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_bodysuit}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.lover_themanjacket ===
                              ballot.TAYLOR_lover_themanjacket,
                           "bg-red-50":
                              ballot.lover_themanjacket !==
                              ballot.TAYLOR_lover_themanjacket,
                        })}
                     >
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>The Man jacket</TableCell>
                        <TableCell>{ballot.lover_themanjacket}</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_themanjacket}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.lover_guitar_color ===
                              ballot.TAYLOR_lover_guitar_color,
                           "bg-red-50":
                              ballot.lover_guitar_color !==
                              ballot.TAYLOR_lover_guitar_color,
                        })}
                     >
                        <TableCell className="font-medium">Lover</TableCell>
                        <TableCell>Guitar color</TableCell>
                        <TableCell>{ballot.lover_guitar_color}</TableCell>
                        <TableCell>{ballot.TAYLOR_lover_guitar_color}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.fearless_dress ===
                              ballot.TAYLOR_fearless_dress,
                           "bg-red-50":
                              ballot.fearless_dress !==
                              ballot.TAYLOR_fearless_dress,
                        })}
                     >
                        <TableCell className="font-medium">Fearless</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.fearless_dress}</TableCell>
                        <TableCell>{ballot.TAYLOR_fearless_dress}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.evermore_dress ===
                              ballot.TAYLOR_evermore_dress,
                           "bg-red-50":
                              ballot.evermore_dress !==
                              ballot.TAYLOR_evermore_dress,
                        })}
                     >
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.evermore_dress}</TableCell>
                        <TableCell>{ballot.TAYLOR_evermore_dress}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.evermore_champagne_cheer ===
                              ballot.TAYLOR_evermore_champagne_cheer,
                           "bg-red-50":
                              ballot.evermore_champagne_cheer !==
                              ballot.TAYLOR_evermore_champagne_cheer,
                        })}
                     >
                        <TableCell className="font-medium">evermore</TableCell>
                        <TableCell>champagne problems cheer</TableCell>
                        <TableCell>{ballot.evermore_champagne_cheer}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_evermore_champagne_cheer}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.reputation_jumpsuit ===
                              ballot.TAYLOR_reputation_jumpsuit,
                           "bg-red-50":
                              ballot.reputation_jumpsuit !==
                              ballot.TAYLOR_reputation_jumpsuit,
                        })}
                     >
                        <TableCell className="font-medium">reputation</TableCell>
                        <TableCell>Jumpsuit</TableCell>
                        <TableCell>{ballot.reputation_jumpsuit}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_reputation_jumpsuit}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.speak_now_dress ===
                              ballot.TAYLOR_speak_now_dress,
                           "bg-red-50":
                              ballot.speak_now_dress !==
                              ballot.TAYLOR_speak_now_dress,
                        })}
                     >
                        <TableCell className="font-medium">Speak Now</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.speak_now_dress}</TableCell>
                        <TableCell>{ballot.TAYLOR_speak_now_dress}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.red_22_shirt === ballot.TAYLOR_red_22_shirt,
                           "bg-red-50":
                              ballot.red_22_shirt !== ballot.TAYLOR_red_22_shirt,
                        })}
                     >
                        <TableCell className="font-medium">Red</TableCell>
                        <TableCell>22 shirt</TableCell>
                        <TableCell>{ballot.red_22_shirt}</TableCell>
                        <TableCell>{ballot.TAYLOR_red_22_shirt}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.folklore_dress ===
                              ballot.TAYLOR_folklore_dress,
                           "bg-red-50":
                              ballot.folklore_dress !==
                              ballot.TAYLOR_folklore_dress,
                        })}
                     >
                        <TableCell className="font-medium">folklore</TableCell>
                        <TableCell>Dress</TableCell>
                        <TableCell>{ballot.folklore_dress}</TableCell>
                        <TableCell>{ballot.TAYLOR_folklore_dress}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.n1989_set === ballot.TAYLOR_n1989_set,
                           "bg-red-50":
                              ballot.n1989_set !== ballot.TAYLOR_n1989_set,
                        })}
                     >
                        <TableCell className="font-medium">1989</TableCell>
                        <TableCell>Set</TableCell>
                        <TableCell>{ballot.n1989_set}</TableCell>
                        <TableCell>{ballot.TAYLOR_n1989_set}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_guitar_speech ===
                              ballot.TAYLOR_surprise_guitar_speech,
                           "bg-red-50":
                              ballot.surprise_guitar_speech !==
                              ballot.TAYLOR_surprise_guitar_speech,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar speech</TableCell>
                        <TableCell>{ballot.surprise_guitar_speech}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_speech}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_guitar_album ===
                              ballot.TAYLOR_surprise_guitar_album,
                           "bg-red-50":
                              ballot.surprise_guitar_album !==
                              ballot.TAYLOR_surprise_guitar_album,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar album</TableCell>
                        <TableCell>{ballot.surprise_guitar_album}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_album}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_guitar_song ===
                              ballot.TAYLOR_surprise_guitar_song,
                           "bg-red-50":
                              ballot.surprise_guitar_song !==
                              ballot.TAYLOR_surprise_guitar_song,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Guitar song</TableCell>
                        <TableCell>{ballot.surprise_guitar_song}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_guitar_song}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_piano_speech ===
                              ballot.TAYLOR_surprise_piano_speech,
                           "bg-red-50":
                              ballot.surprise_piano_speech !==
                              ballot.TAYLOR_surprise_piano_speech,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano speech</TableCell>
                        <TableCell>{ballot.surprise_piano_speech}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_speech}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_piano_album ===
                              ballot.TAYLOR_surprise_piano_album,
                           "bg-red-50":
                              ballot.surprise_piano_album !==
                              ballot.TAYLOR_surprise_piano_album,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano album</TableCell>
                        <TableCell>{ballot.surprise_piano_album}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_album}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.surprise_piano_song ===
                              ballot.TAYLOR_surprise_piano_song,
                           "bg-red-50":
                              ballot.surprise_piano_song !==
                              ballot.TAYLOR_surprise_piano_song,
                        })}
                     >
                        <TableCell className="font-medium">
                           Surprise songs
                        </TableCell>
                        <TableCell>Piano song</TableCell>
                        <TableCell>{ballot.surprise_piano_song}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_surprise_piano_song}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.midnights_tshirt_dress ===
                              ballot.TAYLOR_midnights_tshirt_dress,
                           "bg-red-50":
                              ballot.midnights_tshirt_dress !==
                              ballot.TAYLOR_midnights_tshirt_dress,
                        })}
                     >
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>T-shirt dress</TableCell>
                        <TableCell>{ballot.midnights_tshirt_dress}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_tshirt_dress}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.midnights_midnight_rain_bodysuit ===
                              ballot.TAYLOR_midnights_midnight_rain_bodysuit,
                           "bg-red-50":
                              ballot.midnights_midnight_rain_bodysuit !==
                              ballot.TAYLOR_midnights_midnight_rain_bodysuit,
                        })}
                     >
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Midnight Rain bodysuit</TableCell>
                        <TableCell>
                           {ballot.midnights_midnight_rain_bodysuit}
                        </TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_midnight_rain_bodysuit}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.midnights_karma_jacket ===
                              ballot.TAYLOR_midnights_karma_jacket,
                           "bg-red-50":
                              ballot.midnights_karma_jacket !==
                              ballot.TAYLOR_midnights_karma_jacket,
                        })}
                     >
                        <TableCell className="font-medium">Midnights</TableCell>
                        <TableCell>Karma jacket</TableCell>
                        <TableCell>{ballot.midnights_karma_jacket}</TableCell>
                        <TableCell>
                           {ballot.TAYLOR_midnights_karma_jacket}
                        </TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.misc_special_guest ===
                              ballot.TAYLOR_misc_special_guest,
                           "bg-red-50":
                              ballot.misc_special_guest !==
                              ballot.TAYLOR_misc_special_guest,
                        })}
                     >
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Special guest</TableCell>
                        <TableCell>{ballot.misc_special_guest}</TableCell>
                        <TableCell>{ballot.TAYLOR_misc_special_guest}</TableCell>
                     </TableRow>
                     <TableRow
                        className={clsx({
                           "bg-green-50":
                              ballot.misc_unhinged ===
                              ballot.TAYLOR_misc_unhinged,
                           "bg-red-50":
                              ballot.misc_unhinged !==
                              ballot.TAYLOR_misc_unhinged,
                        })}
                     >
                        <TableCell className="font-medium">
                           Miscellaneous
                        </TableCell>
                        <TableCell>Unhinged</TableCell>
                        <TableCell>{ballot.misc_unhinged}</TableCell>
                        <TableCell>{ballot.TAYLOR_misc_unhinged}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TabsContent>
         </Tabs>
      </>
   );
};

export default PeekBallot;

export type Ballot_demo = {
   ballot_id: string;
   user_id: string;
   title: string;
   points: number;
   created_at: string;
   finished_at: string;

   lover_bodysuit: string;
   lover_themanjacket: string;
   lover_guitar_color: string;
   fearless_dress: string;
   evermore_dress: string;
   evermore_champagne_cheer: string;
   reputation_jumpsuit: string;
   speak_now_dress: string;
   red_22_shirt: string;
   folklore_dress: string;
   n1989_set: string;
   surprise_guitar_speech: string;
   surprise_guitar_album: string;
   surprise_guitar_song: string;
   surprise_piano_speech: string;
   surprise_piano_album: string;
   surprise_piano_song: string;
   midnights_tshirt_dress: string;
   midnights_midnight_rain_bodysuit: string;
   midnights_karma_jacket: string;
   misc_special_guest: string;
   misc_unhinged: string;

   TAYLOR_lover_bodysuit: string;
   TAYLOR_lover_themanjacket: string;
   TAYLOR_lover_guitar_color: string;
   TAYLOR_fearless_dress: string;
   TAYLOR_evermore_dress: string;
   TAYLOR_evermore_champagne_cheer: string;
   TAYLOR_reputation_jumpsuit: string;
   TAYLOR_speak_now_dress: string;
   TAYLOR_red_22_shirt: string;
   TAYLOR_folklore_dress: string;
   TAYLOR_n1989_set: string;
   TAYLOR_surprise_guitar_speech: string;
   TAYLOR_surprise_guitar_album: string;
   TAYLOR_surprise_guitar_song: string;
   TAYLOR_surprise_piano_speech: string;
   TAYLOR_surprise_piano_album: string;
   TAYLOR_surprise_piano_song: string;
   TAYLOR_midnights_tshirt_dress: string;
   TAYLOR_midnights_midnight_rain_bodysuit: string;
   TAYLOR_midnights_karma_jacket: string;
   TAYLOR_misc_special_guest: string;
   TAYLOR_misc_unhinged: string;

   accuracy: number;
   ballot_finished: number;
};
