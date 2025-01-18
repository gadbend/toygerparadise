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
  "breeds": "Cat Breeds",
  "toyger": "Toyger",
  "bengal": "Bengal",
  "login": "Login"
};

export function Breadcrumb(): JSX.Element | null {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const label = routeLabels[value] || value;

    return {
      label,
      path: to,
      isCategory: !last,
    };
  });

  return (
    <div className="py-4">
      <div className="container mx-auto">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-amber-500 transition-colors px-3 py-1 rounded-md hover:bg-white/5"
            >
              Home
            </Link>
          </li>
          {breadcrumbs.map((item, index) => {
            return (
              <li key={item.path} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {item.isCategory ? (
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-amber-500 transition-colors px-3 py-1 rounded-md hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-amber-500 px-3 py-1">{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
