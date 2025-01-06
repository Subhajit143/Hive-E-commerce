import React from 'react'

const Pages = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Hidden Checkbox Input */}
        <input
          type="checkbox"
          id="cbx-46"
          className="peer hidden"
        />
        {/* Label */}
        <label
          htmlFor="cbx-46"
          className="flex items-center cursor-pointer select-none"
        >
          {/* Outer Box */}
          <span
            className="relative flex items-center justify-center w-5 h-5 border border-gray-400 rounded-sm transition-all duration-200 ease-linear peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:border-blue-500"
          >
            {/* SVG Checkmark */}
            <svg
              viewBox="0 0 12 10"
              className="absolute w-3 h-3 stroke-white fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round stroke-dasharray-[16px] stroke-dashoffset-[16px] peer-checked:stroke-dashoffset-0 transition-all duration-300 ease-linear"
            >
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
            {/* Background Ripple */}
            <span className="absolute w-full h-full bg-blue-500 rounded-full scale-0 opacity-100 transition-transform duration-600 ease-in-out peer-checked:scale-350 peer-checked:opacity-0"></span>
          </span>
          {/* Label Text */}
          <span className="ml-2 text-gray-700">Checkbox</span>
        </label>
      </div>
    </div>
  )
}

export default Pages