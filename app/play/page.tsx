"use client";

import NewBallotForm from "@/components/newBallot";
import { useState } from "react";

export default function Play() {
   const [isBallotCreated, setIsBallotCreated] = useState(false);
   const [ballotId, setBallotId] = useState("");

   return (
      <main>
         {isBallotCreated ?
            <p>{ballotId}</p>
         :  <NewBallotForm
               setIsBallotCreated={setIsBallotCreated}
               setBallotId={setBallotId}
            />
         }
      </main>
   );
}
