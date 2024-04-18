"use client";

import { useState, useEffect } from "react";
import NewBallotForm from "@/components/newBallot";
import FinishBallotForm from "@/components/finishBallot";
import { redirect } from "next/navigation";

export default function Play() {
   const [isBallotCreated, setIsBallotCreated] = useState(false);
   const [ballotId, setBallotId] = useState("");
   const [isBallotFinished, setIsBallotFinished] = useState(false);

   useEffect(() => {
      if (isBallotCreated) {
         window.scrollTo(0, 0);
      }

      if (isBallotFinished) {
         redirect(`/`);
      }
   }, [isBallotCreated, isBallotFinished]);

   return (
      <main>
         {isBallotFinished ?
            null
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
