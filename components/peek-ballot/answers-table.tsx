import { TabsContent } from "@/components/ui/tabs";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Ballot } from "@/lib/types/ballot";

export function AnswersTable(ballot: Ballot) {
   return (
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
                  <TableCell>{ballot.TAYLOR_evermore_champagne_cheer}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">reputation</TableCell>
                  <TableCell>Jumpsuit</TableCell>
                  <TableCell>{ballot.TAYLOR_reputation_jumpsuit}</TableCell>
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
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Guitar speech</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_guitar_speech}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Guitar album</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_guitar_album}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Guitar song</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_guitar_song}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Piano speech</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_piano_speech}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Piano album</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_piano_album}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Surprise songs</TableCell>
                  <TableCell>Piano song</TableCell>
                  <TableCell>{ballot.TAYLOR_surprise_piano_song}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Midnights</TableCell>
                  <TableCell>T-shirt dress</TableCell>
                  <TableCell>{ballot.TAYLOR_midnights_tshirt_dress}</TableCell>
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
                  <TableCell>{ballot.TAYLOR_midnights_karma_jacket}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Miscellaneous</TableCell>
                  <TableCell>Special guest</TableCell>
                  <TableCell>{ballot.TAYLOR_misc_special_guest}</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">Miscellaneous</TableCell>
                  <TableCell>Unhinged</TableCell>
                  <TableCell>{ballot.TAYLOR_misc_unhinged}</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </TabsContent>
   );
}
