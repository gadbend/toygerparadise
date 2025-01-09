import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generateKittenSlug } from "@/lib/utils";

interface CatCardProps {
  id?: string;
  name?: string;
  images?: string[];
  age?: string;
  gender?: string;
  color?: string;
  description?: string;
  traits?: string[];
  breed?: string;
}

const CatCard = ({
  id = "default",
  name = "Tiger Lily",
  breed = "Toyger",
  images = ["https://images.unsplash.com/photo-1552933529-e359b2477252"],
  age = "2 years",
  gender = "Female",
  color = "Golden Brown",
  description = "A beautiful Toyger with striking markings and a friendly personality.",
  traits = ["Playful", "Social", "Intelligent"],
}: CatCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const slug = generateKittenSlug(name, breed);

  return (
    <Link to={`/cats/${slug}`} className="block transition-transform hover:scale-[1.02] duration-200">
      <Card className="w-full max-w-[380px] min-h-[480px] bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative w-full aspect-[4/3]">
          <img
            src={images[currentImageIndex]}
            alt={`${name} - ${gender} ${color} ${breed} Cat, ${age} old`}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white touch-manipulation"
                onClick={previousImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white touch-manipulation"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-amber-800 truncate">
              {name}
            </h3>
            <div className="flex gap-1">
              <Badge variant="secondary" className="text-xs">
                {gender}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {age}
              </Badge>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-1">
            {traits.map((trait) => (
              <Badge key={trait} variant="outline" className="text-xs">
                {trait}
              </Badge>
            ))}
          </div>
          <Button
            onClick={() => navigate("/contact")}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-2"
          >
            Adopt
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CatCard;
