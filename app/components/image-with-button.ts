"use client";

import Image from "next/image"; // 1️⃣ Next.js optimized Image

export default function ImageWithButton() {
  return (
    <div className="flex flex-col items-center gap-4"> {/** 2️⃣ Layout */}

      <Image
        src="/image.jpg"        // 3️⃣ public image
        alt="Image description" // 4️⃣ a11y
        width={300}               // 5️⃣ width
        height={200}              // 6️⃣ height
        className="rounded-lg"
      />

      <button
        className="px-4 py-2 bg-black text-white rounded-md hover:opacity-80"
        onClick={() => alert("Clicked")} // 7️⃣ action
      >
        Click Me
      </button>

    </div>
  );
}