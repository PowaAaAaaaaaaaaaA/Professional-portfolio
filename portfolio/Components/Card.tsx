// components/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  color?: string;
};

export default function Card({ title, description, icon, color = "bg-slate-50 border-slate-100 text-slate-600" }: CardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2 fade-in-left-normal">
      <h2 className="text-[1.5rem] font-semibold flex gap-3 items-center text-black">
        {icon && (
          <span className={`p-2 rounded-lg border shadow-sm ${color}`}>
            {icon}
          </span>
        )}
        {title}
      </h2>
      <div className="text-[0.85rem] text-gray-600 leading-relaxed">{description}</div>
    </div>
  );
}