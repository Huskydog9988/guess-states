import React, {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type FormEvent,
} from "react";
import { motion } from "motion/react";

interface StateInputProps {
  onSubmit: (stateName: string) => void;
  feedbackClass: string;
}

const StateInput: React.FC<StateInputProps> = ({ onSubmit, feedbackClass }) => {
  const [stateName, setStateName] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStateName(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (event?: FormEvent): void => {
    if (event) {
      event.preventDefault();
    }
    if (stateName.trim()) {
      onSubmit(stateName);
      setStateName(""); // Clear the input field after submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-2">
        <label htmlFor="state-input" className="mb-2 block text-lg">
          Enter a state name:
        </label>
        <input
          id="state-input"
          type="text"
          value={stateName}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Guess"
          className="mb-4 max-w-64 rounded border border-gray-300 p-2"
        />
        <div className="grid grid-cols-2">
          <button
            type="submit"
            className="col-end-1 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
          <motion.p
            className={`content-center text-xl font-semibold ${feedbackClass}`}
          >
            {feedbackClass.includes("green")
              ? "Valid state!"
              : feedbackClass.includes("red")
                ? "Invalid state!"
                : ""}
          </motion.p>
        </div>
      </form>
    </div>
  );
};

export default StateInput;
