"use client";
import { useState } from "react";
import NumberFlow, { useCanAnimate } from "@number-flow/react";

import StateInput from "~/components/state-input";
import USAMap from "~/components/USAmap";
import { type State, USStates } from "~/utils/states";

export default function HomePage() {
  const [feedbackClass, setFeedbackClass] = useState<string>("");
  const [guesses, setGuesses] = useState<Set<State>>(new Set());

  const onSubmit = (state: string) => {
    state = state.toLocaleLowerCase().trim();

    if (state in USStates) {
      setFeedbackClass("text-green-500 animate-pulse");

      setGuesses(new Set([...guesses, state as State]));
    } else {
      setFeedbackClass("text-red-500 animate-pulse");
    }

    setTimeout(() => setFeedbackClass(""), 1000); // Remove flash effect after 1 second
  };

  return (
    <div>
      <StateInput onSubmit={onSubmit} feedbackClass={feedbackClass} />
      <NumberFlow
        value={guesses.size}
        format={{
          minimumIntegerDigits: 2,
        }}
        suffix="/50"
        className="ml-2"
      />
      <USAMap guesses={[...guesses]} />
    </div>
  );
}
