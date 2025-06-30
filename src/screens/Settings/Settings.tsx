import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import type { DragEndEvent } from "@dnd-kit/core";
import type { UniqueIdentifier } from "@dnd-kit/core";

const carers = ["Alice", "Bob", "Charlie"];
const serviceUsers = ["John", "Emma", "Liam"];

function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 border rounded bg-white shadow mb-2">
      {id}
    </div>
  );
}

type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Rota {
  [day: string]: string[];
}

export default function RotaManager() {
  const [rota, setRota] = useState<Rota>({
    Monday: ["Alice - John", "Bob - Emma"],
    Tuesday: ["Charlie - Liam"],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const [selectedDay, setSelectedDay] = useState<Day>("Monday");

function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
        setRota((prev: Rota) => {
            const activeId = String(active.id);
            const overId = String(over.id);
            const oldIndex = prev[selectedDay].indexOf(activeId);
            const newIndex = prev[selectedDay].indexOf(overId);
            if (oldIndex === -1 || newIndex === -1) return prev;
            const newList = arrayMove(
                prev[selectedDay],
                oldIndex,
                newIndex
            );
            return { ...prev, [selectedDay]: newList };
        });
    }
}

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Carer Rota Manager</h1>

      <div className="flex gap-2 mb-4">
        {Object.keys(rota).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day as Day)}
            className={
              selectedDay === day
                ? "bg-blue-500 text-white px-4 py-2 rounded"
                : "bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded"
            }
          >
            {day}
          </button>
        ))}
      </div>

      <div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{selectedDay}</h2>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={rota[selectedDay]} strategy={verticalListSortingStrategy}>
              {rota[selectedDay].map((entry: string) => (
                <SortableItem key={entry} id={entry} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
