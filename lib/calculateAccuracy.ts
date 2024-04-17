import type { ballotAnswers, ballotGuesses } from "@/lib/types/ballot";

let totalPredictions = 0;

const calcAccuracyForPrediction = (guess: string, answer: string) => {
   totalPredictions += 1;

   if (guess === answer) {
      return 1;
   }

   return 0;
};

export const calculateAccuracy = async (
   guesses: ballotGuesses,
   answers: ballotAnswers,
) => {
   let accuracy = 0;

   accuracy += calcAccuracyForPrediction(
      guesses.lover_bodysuit,
      answers.TAYLOR_lover_bodysuit,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.lover_themanjacket,
      answers.TAYLOR_lover_themanjacket,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.lover_guitar_color,
      answers.TAYLOR_lover_guitar_color,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.fearless_dress,
      answers.TAYLOR_fearless_dress,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.evermore_dress,
      answers.TAYLOR_evermore_dress,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.evermore_champagne_cheer,
      answers.TAYLOR_evermore_champagne_cheer,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.reputation_jumpsuit,
      answers.TAYLOR_reputation_jumpsuit,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.speak_now_dress,
      answers.TAYLOR_speak_now_dress,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.red_22_shirt,
      answers.TAYLOR_red_22_shirt,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.folklore_dress,
      answers.TAYLOR_folklore_dress,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.n1989_set,
      answers.TAYLOR_n1989_set,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_guitar_speech,
      answers.TAYLOR_surprise_guitar_speech,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_guitar_album,
      answers.TAYLOR_surprise_guitar_album,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_guitar_song,
      answers.TAYLOR_surprise_guitar_song,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_piano_speech,
      answers.TAYLOR_surprise_piano_speech,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_piano_album,
      answers.TAYLOR_surprise_piano_album,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.surprise_piano_song,
      answers.TAYLOR_surprise_piano_song,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.midnights_tshirt_dress,
      answers.TAYLOR_midnights_tshirt_dress,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.midnights_midnight_rain_bodysuit,
      answers.TAYLOR_midnights_midnight_rain_bodysuit,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.midnights_karma_jacket,
      answers.TAYLOR_midnights_karma_jacket,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.misc_special_guest,
      answers.TAYLOR_misc_special_guest,
   );
   accuracy += calcAccuracyForPrediction(
      guesses.misc_unhinged,
      answers.TAYLOR_misc_unhinged,
   );

   return accuracy / totalPredictions;
};
