import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
  isCategory?: boolean;
}

const routeLabels: Record<string, string> = {
  "adoption": "Available Kittens",
  "about-us": "About Us",
  "contact": "Contact",
  "breeds": "Our Breeds",
  "toyger": "Toyger Breed",
  "bengal": "Bengal Breed",
};

export function Breadcrumb(): JSX.Element | null {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
    ...pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = routeLabels[name] || name;
      return { 
        label, 
        path,
        isCategory: name === "breeds"
      };
    }),
  ];

  return (
    <div role="navigation" aria-label="Breadcrumb" className="w-full bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <ol className="flex items-center h-12 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    className="h-4 w-4 mx-2 text-amber-500" 
                    aria-hidden="true" 
                  />
                )}
                {isLast || item.isCategory ? (
                  <span 
                    className="text-white font-medium px-3 py-1 rounded-md bg-white/5" 
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-amber-500 transition-colors px-3 py-1 rounded-md hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
