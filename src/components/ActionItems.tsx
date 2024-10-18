import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const actionItemsData = [
  { id: 1, task: 'Improve application process documentation', completed: false },
  { id: 2, task: 'Create FAQ section for eligibility criteria', completed: false },
  { id: 3, task: 'Implement user feedback system', completed: true },
  { id: 4, task: 'Organize community webinar', completed: false },
];

const ActionItems = () => {
  return (
    <ul className="space-y-4">
      {actionItemsData.map((item) => (
        <li key={item.id} className="flex items-center space-x-2">
          <Checkbox id={`task-${item.id}`} checked={item.completed} />
          <Label htmlFor={`task-${item.id}`} className={item.completed ? 'line-through text-gray-500' : ''}>
            {item.task}
          </Label>
        </li>
      ))}
    </ul>
  );
};

export default ActionItems;