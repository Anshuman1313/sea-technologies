import { Card, CardContent } from "@/components/ui/card";

type IndustryCardProps = {
  title: string;
  description: string;
  x: number;
  y: number;
};

export const IndustryCard = ({ title, description, x, y }: IndustryCardProps) => (
  <div className="absolute" style={{ left: x, top: y }}>
    <Card className="w-40 shadow-md rounded-2xl">
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  </div>
);
