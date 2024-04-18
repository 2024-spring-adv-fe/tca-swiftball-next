import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import * as FormValues from "@/lib/types/possibleFormValues";

import { submitInitialBallot } from "@/lib/submitInitialBallot";

const FormSchema = z.object({
   title: z.string().min(2, {
      message: "Name your ballot",
   }),
   lover_bodysuit: z.enum(FormValues.LOVER_BODYSUIT, {
      required_error: "Guess which bodysuit will Taylor will wear",
   }),
   lover_themanjacket: z.enum(FormValues.LOVER_THEMANJACKET, {
      required_error: "Guess which The Man jacket Taylor will wear",
   }),
   lover_guitar_color: z.enum(FormValues.LOVER_GUITAR_COLOR, {
      required_error: "Guess which guitar Taylor will play",
   }),
   fearless_dress: z.enum(FormValues.FEARLESS_DRESS, {
      required_error: "Guess which dress Taylor will wear",
   }),
   evermore_dress: z.enum(FormValues.EVERMORE_DRESS, {
      required_error: "Guess which dress Taylor will wear",
   }),
   evermore_champagne_cheer: z.enum(FormValues.EVERMORE_CHAMPAGNE_CHEER, {
      required_error: "Guess how long the Champagne Problems cheer will last",
   }),
   reputation_jumpsuit: z.enum(FormValues.REPUTATION_JUMPSUIT, {
      required_error: "Guess which jumpsuit Taylor will wear",
   }),
   speak_now_dress: z.enum(FormValues.SPEAK_NOW_DRESS, {
      required_error: "Guess which dress Taylor will wear",
   }),
   red_22_shirt: z.enum(FormValues.RED_22_SHIRT, {
      required_error: "Guess which 22 shirt Taylor will wear",
   }),
   folklore_dress: z.enum(FormValues.FOLKLORE_DRESS, {
      required_error: "Guess which dress Taylor will wear",
   }),
   n1989_set: z.enum(FormValues.N1989_SET, {
      required_error: "Guess which set Taylor will wear",
   }),
   surprise_guitar_speech: z.enum(FormValues.SURPRISE_SPEECH, {
      required_error: "Guess whether Taylor will give a guitar speech",
   }),
   surprise_guitar_album: z.enum(FormValues.SURPRISE_ALBUM, {
      required_error: "Guess the surprise guitar album",
   }),
   surprise_guitar_song: z.string().min(2, {
      message: "Guess the surprise guitar song",
   }),
   surprise_piano_speech: z.enum(FormValues.SURPRISE_SPEECH, {
      required_error: "Guess whether Taylor will give a piano speech",
   }),
   surprise_piano_album: z.enum(FormValues.SURPRISE_ALBUM, {
      required_error: "Guess the surprise piano album",
   }),
   surprise_piano_song: z.string().min(2, {
      message: "Guess the surprise piano song",
   }),
   midnights_tshirt_dress: z.enum(FormValues.MIDNIGHTS_TSHIRT_DRESS, {
      required_error: "Guess which tshirt dress Taylor will wear",
   }),
   midnights_midnight_rain_bodysuit: z.enum(
      FormValues.MIDNIGHTS_MIDNIGHT_RAIN_BODYSUIT,
      {
         required_error: "Guess which bodysuit Taylor will wear",
      },
   ),
   midnights_karma_jacket: z.enum(FormValues.MIDNIGHTS_KARMA_JACKET, {
      required_error: "Guess which jacket Taylor will wear",
   }),
   misc_special_guest: z.enum(FormValues.MISC_SPECIAL_GUEST, {
      required_error: "Guess whether there will be a special guest",
   }),
   misc_unhinged: z.enum(FormValues.MISC_UNHINGED, {
      required_error: "Guess whether something unhinged (planned!) will happen",
   }),
});

interface NewBallotFormProps {
   setIsBallotCreated: React.Dispatch<React.SetStateAction<boolean>>;
   setBallotId: React.Dispatch<React.SetStateAction<string>>;
}

const NewBallotForm: React.FC<NewBallotFormProps> = ({
   setIsBallotCreated,
   setBallotId,
}) => {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         title: "",
         surprise_guitar_song: "",
         surprise_piano_song: "",
      },
   });

   const handleInitialBallot = async (data: z.infer<typeof FormSchema>) => {
      const ballotId = await submitInitialBallot(data);
      setBallotId(ballotId);
   };

   function onSubmit(data: z.infer<typeof FormSchema>) {
      handleInitialBallot(data);
      setIsBallotCreated(true);
   }

   return (
      <>
         <h1 className="mb-5 text-2xl font-bold">Enter your predictions</h1>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="w-2/3 space-y-6"
            >
               <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                           <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="lover_bodysuit"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Bodysuit</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_BODYSUIT[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Pink and blue
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_BODYSUIT[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Blue and gold
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_BODYSUIT[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Barbie pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_BODYSUIT[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New bodysuit
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="lover_themanjacket"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>The Man jacket</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_THEMANJACKET[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Black
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_THEMANJACKET[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Silver
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_THEMANJACKET[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Purple-ish
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_THEMANJACKET[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Barbie
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_THEMANJACKET[4]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New jacket
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="lover_guitar_color"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Guitar color</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_GUITAR_COLOR[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.LOVER_GUITAR_COLOR[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Blue
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="fearless_dress"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Dress</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FEARLESS_DRESS[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Fringe
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FEARLESS_DRESS[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Gold noodle
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FEARLESS_DRESS[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Silver noodle
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FEARLESS_DRESS[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New dress
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="evermore_dress"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Dress</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.EVERMORE_DRESS[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Orange with flowers
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.EVERMORE_DRESS[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Bronze
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.EVERMORE_DRESS[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New dress
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="evermore_champagne_cheer"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Champagne Problems cheer</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.EVERMORE_CHAMPAGNE_CHEER[0]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Less than 1 minute
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.EVERMORE_CHAMPAGNE_CHEER[1]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    More than 1, but less than 2 minutes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.EVERMORE_CHAMPAGNE_CHEER[2]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    More than 2, but less than 3 minutes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.EVERMORE_CHAMPAGNE_CHEER[3]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    More than 3 minutes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.EVERMORE_CHAMPAGNE_CHEER[4]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Record breaker
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="reputation_jumpsuit"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Jumpsuit</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.REPUTATION_JUMPSUIT[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Black and red snake jumpsuit
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.REPUTATION_JUMPSUIT[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New jumpsuit
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="speak_now_dress"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Dress</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Pink ball gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Champange gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Tissue flower gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Silver gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[4]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Cupcake wrapper gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[5]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Elsa gown
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SPEAK_NOW_DRESS[6]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New dress
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="red_22_shirt"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>22 Shirt</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.RED_22_SHIRT[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    We are never ever getting back together
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.RED_22_SHIRT[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Who's Taylor Swift anyway
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.RED_22_SHIRT[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    A lot going on at the moment
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.RED_22_SHIRT[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New shirt
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="folklore_dress"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Dress</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Purple
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Cream
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Pink lace
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Green
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[4]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Blue fairy
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.FOLKLORE_DRESS[5]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New dress
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="n1989_set"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Set</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.N1989_SET[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Aquamarine green
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.N1989_SET[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Sunrise Boulevard orange
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.N1989_SET[2]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Rose garden pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.N1989_SET[3]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Crystal skies blue
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.N1989_SET[4]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New set
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_guitar_speech"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Guitar speech</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SURPRISE_SPEECH[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Yes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SURPRISE_SPEECH[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    No
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_guitar_album"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Guitar surprise album</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Guess an album" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[0]}>
                                 Debut
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[1]}>
                                 Fearless
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[2]}>
                                 Speak Now
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[3]}>
                                 Red
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[4]}>
                                 1989
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[5]}>
                                 reputation
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[6]}>
                                 Lover
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[7]}>
                                 folklore
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[8]}>
                                 evermore
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[9]}>
                                 Midnights
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[10]}>
                                 Non-album single
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_guitar_song"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Surprise guitar song</FormLabel>
                        <FormControl>
                           <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_piano_speech"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Piano speech</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SURPRISE_SPEECH[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Yes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.SURPRISE_SPEECH[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    No
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_piano_album"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Piano surprise album</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Guess an album" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[0]}>
                                 Debut
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[1]}>
                                 Fearless
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[2]}>
                                 Speak Now
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[3]}>
                                 Red
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[4]}>
                                 1989
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[5]}>
                                 reputation
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[6]}>
                                 Lover
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[7]}>
                                 folklore
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[8]}>
                                 evermore
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[9]}>
                                 Midnights
                              </SelectItem>
                              <SelectItem value={FormValues.SURPRISE_ALBUM[10]}>
                                 Non-album single
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="surprise_piano_song"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Surprise piano song</FormLabel>
                        <FormControl>
                           <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="midnights_tshirt_dress"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>T-shirt dress</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[0]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Light blue
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[1]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[2]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Purple
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[3]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Silver sequin
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[4]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Elusive blue purple pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_TSHIRT_DRESS[5]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New dress
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="midnights_midnight_rain_bodysuit"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Bodysuit</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues
                                             .MIDNIGHTS_MIDNIGHT_RAIN_BODYSUIT[0]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Navy starbust pattern
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues
                                             .MIDNIGHTS_MIDNIGHT_RAIN_BODYSUIT[1]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Blurple scallop pattern
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues
                                             .MIDNIGHTS_MIDNIGHT_RAIN_BODYSUIT[2]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Rorshach cutout
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues
                                             .MIDNIGHTS_MIDNIGHT_RAIN_BODYSUIT[3]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New bodysuit
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="midnights_karma_jacket"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Jacket</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[0]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Light pink
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[1]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Multicolor
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[2]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Magenta red
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[3]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Blue
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[4]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    No jacket
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={
                                          FormValues.MIDNIGHTS_KARMA_JACKET[5]
                                       }
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    New jacket
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="misc_special_guest"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Special guest</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.MISC_SPECIAL_GUEST[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Yes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.MISC_SPECIAL_GUEST[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    No
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="misc_unhinged"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>Unhinged moment</FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.MISC_UNHINGED[0]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Yes
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem
                                       value={FormValues.MISC_UNHINGED[1]}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    No
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type="submit">Start Swiftball</Button>
            </form>
         </Form>
      </>
   );
};

export default NewBallotForm;
