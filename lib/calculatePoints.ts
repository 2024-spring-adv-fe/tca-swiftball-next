import type { ballotAnswers, ballotGuesses } from "@/lib/types/ballot";
import { predictionPointValues } from "@/lib/types/predictionPointValues";

const calcPointsForPrediction = (
   guess: string,
   answer: string,
   points: number,
) => {
   if (guess === answer) {
      return points;
   }

   return 0;
};

export const calculatePoints = async (
   guesses: ballotGuesses,
   answers: ballotAnswers,
) => {
   let points = 0;

   points += calcPointsForPrediction(
      guesses.lover_bodysuit,
      answers.TAYLOR_lover_bodysuit,
      predictionPointValues.lover_bodysuit,
   );
   points += calcPointsForPrediction(
      guesses.lover_themanjacket,
      answers.TAYLOR_lover_themanjacket,
      predictionPointValues.lover_themanjacket,
   );
   points += calcPointsForPrediction(
      guesses.lover_guitar_color,
      answers.TAYLOR_lover_guitar_color,
      predictionPointValues.lover_guitar_color,
   );
   points += calcPointsForPrediction(
      guesses.fearless_dress,
      answers.TAYLOR_fearless_dress,
      predictionPointValues.fearless_dress,
   );
   points += calcPointsForPrediction(
      guesses.evermore_dress,
      answers.TAYLOR_evermore_dress,
      predictionPointValues.evermore_dress,
   );
   points += calcPointsForPrediction(
      guesses.evermore_champagne_cheer,
      answers.TAYLOR_evermore_champagne_cheer,
      predictionPointValues.evermore_champagne_cheer,
   );
   points += calcPointsForPrediction(
      guesses.reputation_jumpsuit,
      answers.TAYLOR_reputation_jumpsuit,
      predictionPointValues.reputation_jumpsuit,
   );
   points += calcPointsForPrediction(
      guesses.speak_now_dress,
      answers.TAYLOR_speak_now_dress,
      predictionPointValues.speak_now_dress,
   );
   points += calcPointsForPrediction(
      guesses.red_22_shirt,
      answers.TAYLOR_red_22_shirt,
      predictionPointValues.red_22_shirt,
   );
   points += calcPointsForPrediction(
      guesses.folklore_dress,
      answers.TAYLOR_folklore_dress,
      predictionPointValues.folklore_dress,
   );
   points += calcPointsForPrediction(
      guesses.n1989_set,
      answers.TAYLOR_n1989_set,
      predictionPointValues.n1989_set,
   );
   points += calcPointsForPrediction(
      guesses.surprise_guitar_speech,
      answers.TAYLOR_surprise_guitar_speech,
      predictionPointValues.surprise_speech,
   );
   points += calcPointsForPrediction(
      guesses.surprise_guitar_album,
      answers.TAYLOR_surprise_guitar_album,
      predictionPointValues.surprise_album,
   );
   points += calcPointsForPrediction(
      guesses.surprise_guitar_song,
      answers.TAYLOR_surprise_guitar_song,
      predictionPointValues.surprise_song,
   );
   points += calcPointsForPrediction(
      guesses.surprise_piano_speech,
      answers.TAYLOR_surprise_piano_speech,
      predictionPointValues.surprise_speech,
   );
   points += calcPointsForPrediction(
      guesses.surprise_piano_album,
      answers.TAYLOR_surprise_piano_album,
      predictionPointValues.surprise_album,
   );
   points += calcPointsForPrediction(
      guesses.surprise_piano_song,
      answers.TAYLOR_surprise_piano_song,
      predictionPointValues.surprise_song,
   );
   points += calcPointsForPrediction(
      guesses.midnights_tshirt_dress,
      answers.TAYLOR_midnights_tshirt_dress,
      predictionPointValues.midnights_tshirt_dress,
   );
   points += calcPointsForPrediction(
      guesses.midnights_midnight_rain_bodysuit,
      answers.TAYLOR_midnights_midnight_rain_bodysuit,
      predictionPointValues.midnights_midnight_rain_bodysuit,
   );
   points += calcPointsForPrediction(
      guesses.midnights_karma_jacket,
      answers.TAYLOR_midnights_karma_jacket,
      predictionPointValues.midnights_karma_jacket,
   );
   points += calcPointsForPrediction(
      guesses.misc_special_guest,
      answers.TAYLOR_misc_special_guest,
      predictionPointValues.misc_special_guest,
   );
   points += calcPointsForPrediction(
      guesses.misc_unhinged,
      answers.TAYLOR_misc_unhinged,
      predictionPointValues.misc_unhinged,
   );

   return points;
};
