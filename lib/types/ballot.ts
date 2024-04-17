export type preBallot = {
   title: string;
   evermore_champagne_cheer: string;
   evermore_dress: string;
   fearless_dress: string;
   folklore_dress: string;
   lover_bodysuit: string;
   lover_guitar_color: string;
   lover_themanjacket: string;
   midnights_karma_jacket: string;
   midnights_midnight_rain_bodysuit: string;
   midnights_tshirt_dress: string;
   misc_special_guest: string;
   misc_unhinged: string;
   n1989_set: string;
   red_22_shirt: string;
   reputation_jumpsuit: string;
   speak_now_dress: string;
   surprise_guitar_album: string;
   surprise_guitar_song: string;
   surprise_guitar_speech: string;
   surprise_piano_album: string;
   surprise_piano_song: string;
   surprise_piano_speech: string;
};

export type ballotAnswers = {
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
};

export type Ballot = {
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
};
