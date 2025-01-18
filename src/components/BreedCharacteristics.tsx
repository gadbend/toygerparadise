import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface BreedCharacteristicsProps {
  characteristics?: Array<{
    title: string;
    description: string;
    position: { x: number; y: number };
  }>;
}

const BreedCharacteristics = ({
  characteristics = [
    {
      title: "Muscular Build",
      description: "Strong, athletic body type resembling a small tiger",
      position: { x: 30, y: 40 },
    },
    {
      title: "Distinctive Markings",
      description:
        "Bold, vertical stripes creating a unique tiger-like pattern",
      position: { x: 60, y: 30 },
    },
    {
      title: "Head Shape",
      description: "Long, broad head with small, rounded ears",
      position: { x: 45, y: 20 },
    },
    {
      title: "Coat Texture",
      description: "Short, soft, and luxurious coat with rich coloring",
      position: { x: 70, y: 60 },
    },
  ],
}: BreedCharacteristicsProps) => {
  return (
    <Card className="p-8 bg-white w-full max-w-[1200px] h-[800px] mx-auto relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-amber-800 mb-4">
          Toyger Breed Characteristics
        </h2>
        <p className="text-gray-600">
          Discover the unique features that make Toygers special
        </p>
      </div>

      <div className="relative w-full h-[600px] bg-amber-50 rounded-lg">
        {/* Large central cat silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=toyger"
            alt="Toyger Silhouette"
            className="w-[400px] h-[400px] opacity-20"
          />
        </div>

        <TooltipProvider>
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${characteristic.position.x}%`,
                top: `${characteristic.position.y}%`,
              }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="cursor-pointer bg-amber-600 hover:bg-amber-700 transition-colors">
                    {characteristic.title}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[200px] text-sm">
                    {characteristic.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </TooltipProvider>

        {/* Connecting lines (decorative) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <marker
              id="dot"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5"
            >
              <circle cx="5" cy="5" r="2" fill="#d97706" />
            </marker>
          </defs>
          {characteristics.map((_, index) => (
            <line
              key={index}
              x1="50%"
              y1="50%"
              x2={`${characteristics[index].position.x}%`}
              y2={`${characteristics[index].position.y}%`}
              stroke="#d97706"
              strokeWidth="1"
              strokeDasharray="4 4"
              markerEnd="url(#dot)"
              className="opacity-30"
            />
          ))}
        </svg>
      </div>
    </Card>
  );
};

export default BreedCharacteristics;
