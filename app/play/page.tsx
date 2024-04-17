"use client";

import { useState } from "react";
import NewBallotForm from "@/components/newBallot";
import FinishBallotForm from "@/components/finishBallot";

export default function Play() {
   const [isBallotCreated, setIsBallotCreated] = useState(false);
   const [ballotId, setBallotId] = useState("");
   const [isBallotFinished, setIsBallotFinished] = useState(false);

   return (
      <main>
         {isBallotFinished ?
            <h1>Ballot Finished</h1>
         : isBallotCreated ?
            <FinishBallotForm
               setIsBallotFinished={setIsBallotFinished}
               ballot_id={ballotId}
            />
         :  <NewBallotForm
               setIsBallotCreated={setIsBallotCreated}
               setBallotId={setBallotId}
            />
         }
      </main>
   );
}
