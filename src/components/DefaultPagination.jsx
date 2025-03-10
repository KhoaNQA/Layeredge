import React from "react";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination() {
  const [active, setActive] = React.useState(1);
  const totalPages = 10;
  const visiblePages = 5;

  const next = () => {
    if (active < totalPages) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  const jumpToFirst = () => setActive(1);
  const jumpToLast = () => setActive(totalPages);

  // Dynamically generate visible page numbers
  const getVisiblePages = () => {
    let start = Math.max(1, active - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (end - start + 1 < visiblePages) {
      start = Math.max(1, end - visiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex items-center w-full justify-center gap-2 bg-[#0b0b0c] px-6 py-3 rounded-lg mt-2 my-auto">
      {/* Jump to First Page */}
      <Button
        variant="text"
        className="px-2 py-1 text-white text-opacity-25 hover:text-purple-600"
        onClick={jumpToFirst}
        disabled={active === 1}
      >
        {"<<"}
      </Button>

      {/* Previous Page */}
      <Button
        variant="text"
        className="px-2 py-1 text-white text-opacity-25 hover:text-purple-600"
        onClick={prev}
        disabled={active === 1}
      >
        {"<"}
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getVisiblePages().map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded-lg transition-all ${
              active === page
                ? "bg-purple-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActive(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Page */}
      <Button
        variant="text"
        className="px-2 py-1 text-white text-opacity-25 hover:text-purple-600"
        onClick={next}
        disabled={active === totalPages}
      >
        {">"}
      </Button>

      {/* Jump to Last Page */}
      <Button
        variant="text"
        className="px-2 py-1 text-white text-opacity-25 hover:text-purple-600"
        onClick={jumpToLast}
        disabled={active === totalPages}
      >
        {">>"}
      </Button>
    </div>
  );
}
