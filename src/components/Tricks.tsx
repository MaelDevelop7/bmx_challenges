import React, { useState, JSX } from "react";
import { AddTrick } from "./UI";
import { UI } from "./Classes/UI"; // pour showToast()
import './styles/Tricks.css';

type Trick = {
  id: string;
  name: string;
  difficulty: "facile" | "moyen" | "difficile";
  completed: boolean;
};

export default function Tricks(): JSX.Element {
  const [tricks, setTricks] = useState<Trick[]>([
    { id: "1", name: "Bunny Hop", difficulty: "facile", completed: false },
    { id: "2", name: "Manual", difficulty: "moyen", completed: true },
  ]);

  const ui = UI.getInstance();

  const handleAddTrick = (trick: Omit<Trick, "id" | "completed">) => {
    const newTrick: Trick = {
      ...trick,
      id: Date.now().toString(),
      completed: false,
    };
    setTricks(prev => [...prev, newTrick]);
    ui.showToast(`✅ Trick ajouté : ${newTrick.name}`);
  };

  const toggleComplete = (id: string) => {
    setTricks(prev =>
      prev.map(trick =>
        trick.id === id ? { ...trick, completed: !trick.completed } : trick
      )
    );
  };

  return (
    <div className="tricks">
      <h2>📋 Liste des Tricks</h2>
      <AddTrick onAdd={handleAddTrick} />
      <ul>
        {tricks.map(trick => (
          <li key={trick.id}>
            <span style={{ textDecoration: trick.completed ? "line-through" : "none" }}>
              {trick.name} ({trick.difficulty})
            </span>
            <button onClick={() => toggleComplete(trick.id)}>
              {trick.completed ? "Annuler" : "Réussi"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
