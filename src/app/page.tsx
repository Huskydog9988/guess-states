"use client";
import Link from "next/link";
import { FC, FormEvent, useEffect, useState } from "react";
import StateInput from "~/components/state-input";
import USAMap from "~/components/USAmap";

const USStates = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new hampshire",
  "new jersey",
  "new mexico",
  "new york",
  "north carolina",
  "north dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming",
];

export default function HomePage() {
  const [feedbackClass, setFeedbackClass] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);

  const onSubmit = (state: string) => {
    state = state.toLocaleLowerCase().trim();

    const isValid = USStates.includes(state);
    if (isValid) {
      setFeedbackClass("text-green-500 animate-pulse");

      setGuesses([...guesses, state]);
    } else {
      setFeedbackClass("text-red-500 animate-pulse");
    }

    setTimeout(() => setFeedbackClass(""), 1000); // Remove flash effect after 1 second
  };

  return (
    <div>
      <StateInput onSubmit={onSubmit} feedbackClass={feedbackClass} />
      {`${guesses.length}/50`}
      <USAMap guesses={guesses} />
    </div>
  );
}
