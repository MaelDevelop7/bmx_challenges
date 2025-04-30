import React, { useState, JSX } from "react";

type Trick = {
    id: string;
    name: string;
    difficulty: "facile" | "moyen" | "difficile";
    completed: boolean;
  };
  
  type AddTrickProps = {
    onAdd: (trick: Trick) => void;
  };
  
  export function AddTrick({ onAdd }: AddTrickProps): JSX.Element {
    const [form, setForm] = useState({ name: "", difficulty: "facile" });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.name.trim()) return;
  
      const newTrick: Trick = {
        id: Date.now().toString(),
        name: form.name,
        difficulty: form.difficulty as Trick["difficulty"],
        completed: false,
      };
  
      onAdd(newTrick); // ⬅️ envoie le trick au parent
      setForm({ name: "", difficulty: "facile" });
    };
  
    return (
      <form className="form-addTrick" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du trick"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
  
        <select
          value={form.difficulty}
          onChange={e => setForm({ ...form, difficulty: e.target.value })}
        >
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>
  
        <button type="submit">Ajouter</button>
      </form>
    );
  }
  