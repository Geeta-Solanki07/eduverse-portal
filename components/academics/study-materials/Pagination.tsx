"use client";

export default function Pagination() {
  return (
    <div className="flex justify-center mt-12 gap-3">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`px-4 py-2 rounded-md border ${
            num === 1
              ? "bg-orange-600 text-white"
              : "hover:text-white text-gray-600 hover:bg-orange-600"
          }`}
        >
          {num}
        </button>
      ))}
      <button className="px-4 py-2 rounded-md border hover:bg-orange-600 text-gray-600 hover:text-white">
        &gt;
      </button>
    </div>
  );
}
