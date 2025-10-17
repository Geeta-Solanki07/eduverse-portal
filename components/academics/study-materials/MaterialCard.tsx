"use client";

import Image from "next/image";
import { FileText, Star, Download, ShoppingCart } from "lucide-react";

interface Material {
  id: number;
  title: string;
  pages: string;
  rating: string;
  description: string;
  image: string;
  price: string;
  type: string;
}

export default function MaterialCard({ item }: { item: Material }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          {item.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

        {/* Meta Info */}
        <div className="flex justify-between text-gray-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <FileText size={16} /> {item.pages}
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} /> {item.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Price & Action Button */}
        <div className="flex justify-between items-center">
          <div
            className={`font-semibold ${
              item.price === "Free" ? "text-green-600" : "text-gray-900"
            }`}
          >
            {item.price}
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600`}
          >
            {item.price === "Free" ? (
              <>
                <Download size={16} /> Download
              </>
            ) : (
              <>
                <ShoppingCart size={16} /> Buy Now
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
