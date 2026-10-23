import { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  children: ReactNode;
}

export default function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">{title}</h2>
      <div className="text-gray-700 space-y-4">
        {children}
      </div>
    </div>
  );
}