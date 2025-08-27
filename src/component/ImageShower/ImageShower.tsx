import { bridge } from "../../images";

<div>
  <div
    className="relative w-64 h-40 bg-gray-200 flex items-center
                justify-center group overflow-hidden rounded-xl shadow-md"
  >
    {/* Text (default visible) */}
    <span className="text-xl font-bold text-gray-800 group-hover:hidden">
      Hover Me
    </span>

    {/* Image (hidden until hover) */}
    <img
      src={bridge}
      alt="Bridge"
      className="absolute inset-0 w-full h-full object-cover opacity-0
                    group-hover:opacity-100 transition duration-500"
    />
  </div>
</div>;
