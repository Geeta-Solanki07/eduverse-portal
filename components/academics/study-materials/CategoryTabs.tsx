"use client";

interface Props {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => (
        <div
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full cursor-pointer border ${
            activeCategory === cat
              ? "bg-orange-600 text-white"
              : "hover:text-white text-gray-700 hover:bg-orange-600"
          }`}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
