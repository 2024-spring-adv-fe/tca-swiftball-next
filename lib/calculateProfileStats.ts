"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";

type Ballot = {
   points: number;
   accuracy: number;
};

const fetchIndividualBallotStats = async (userId: string) => {
   const db = getRequestContext().env.DB;

   const { results: ballots } = await db
      .prepare(
         `SELECT points, accuracy FROM ballots WHERE user_id = '${userId}';`,
      )
      .all<Ballot>();

   return ballots;
};

export const calculateProfileStats = async (userId: string) => {
   const ballots = await fetchIndividualBallotStats(userId);

   const totalBallots = ballots.length;
   let totalPoints: number = 0;
   let accuracies: number = 0;

   ballots.forEach((ballot) => {
      totalPoints += Number(ballot.points);
      console.log(totalPoints);
      accuracies += Number(ballot.accuracy);
      console.log(accuracies);
   });

   const avgPoints = totalPoints / totalBallots;
   const totalAccuracy = accuracies / totalBallots;

   const db = getRequestContext().env.DB;

   await db
      .prepare(
         `
         INSERT OR IGNORE INTO user_stats (user_id, total_ballots, total_points, avg_points, total_accuracy)
         VALUES (?, 0, 0, 0, 0)
      `,
      )
      .bind(userId)
      .run();

   await db
      .prepare(
         `
         UPDATE user_stats SET
            total_ballots = ?,
            total_points = ?,
            avg_points = ?,
            total_accuracy = ?

         WHERE user_id = ?
      `,
      )
      .bind(
         totalBallots,
         totalPoints,
         avgPoints,
         totalAccuracy,

         userId,
      )
      .run();
};
