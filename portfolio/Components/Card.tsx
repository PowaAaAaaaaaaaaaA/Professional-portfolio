// components/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
      <h2 className="text-[1.5rem] font-semibold flex gap-2 items-center text-black">
        <span>{icon}</span>{title}
      </h2>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
}