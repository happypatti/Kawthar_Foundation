function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 241.43425445405683 243.80894801303657"
      width={482.86850890811365}
      height={487.61789602607314}
      className={className}
    >
      <defs>
        {/* TODO: Load fonts locally */}
        <style>
          {
            "@font-face{font-family:&quot;Virgil&quot;;src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:&quot;Cascadia&quot;;src:url(https://excalidraw.com/Cascadia.woff2)}"
          }
        </style>
      </defs>
      <path fill="#fff" d="M0 0H241.43425445405683V243.80894801303657H0z" />
      <g strokeLinecap="round">
        <path
          d="M32 0h157.43l7.5.5 6.5 1.5 5.5 2.5 4.5 3.5 3.5 4.5 2.5 5.5 1.5 6.5.5 7.5v159.81l-.5 7.5-1.5 6.5-2.5 5.5-3.5 4.5-4.5 3.5-5.5 2.5-6.5 1.5-7.5.5H32l-7.5-.5-6.5-1.5-5.5-2.5-4.5-3.5-3.5-4.5-2.5-5.5-1.5-6.5-.5-7.5L.5 24.5 2 18l2.5-5.5L8 8l4.5-3.5L18 2 24.5.5 32 0"
          strokeWidth={0}
          fill="#172554"
          transform="translate(10 10)"
        />
        <path
          d="M32 0h157.43M32 0h157.43m0 0c21.34 0 32 10.67 32 32m-32-32c21.34 0 32 10.67 32 32m0 0v159.81m0-159.81v159.81m0 0c0 21.33-10.66 32-32 32m32-32c0 21.33-10.66 32-32 32m0 0H32m157.43 0H32m0 0c-21.33 0-32-10.67-32-32m32 32c-21.33 0-32-10.67-32-32m0 0V32m0 159.81V32m0 0C0 10.67 10.67 0 32 0M0 32C0 10.67 10.67 0 32 0"
          stroke="#1971c2"
          fill="none"
          transform="translate(10 10)"
        />
      </g>
      <path
        d="M32 0c31.02 2.72 60.47-.08 135.81 0M32 0c45.75-.62 90.7-2.59 135.81 0m0 0c17.59-3.97 30.75 13.08 32 32m-32-32c16.89 1.29 31.08 13.47 32 32m0 0c-2.54 44.89-.5 95.48 0 139.72m0-139.72c-1.68 31.44-.54 58.64 0 139.72m0 0c-1.06 24.6-9.89 34.13-32 32m32-32c2.61 19.31-13.17 27.7-32 32m0 0c-46.94-.51-87.23.89-135.81 0m135.81 0c-33.52-3.01-67.38-.95-135.81 0m0 0c-18.91-1.44-32.64-7.96-32-32m32 32c-20.66-.97-36.45-11.88-32-32m0 0C-1.11 133.8 6.08 94.37 0 32m0 139.72C1.17 124.66.32 79.33 0 32m0 0C-2.88 10.34 14.2-2.7 32 0M0 32C-1.44 11.12 6.55-1.86 32 0"
        stroke="#60b0f4"
        strokeWidth={4}
        fill="none"
        transform="translate(21.975 19.902)"
        strokeLinecap="round"
      />
      <text
        x={52.28411865234375}
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="130.06411584538043px"
        fill="#4dabf7"
        textAnchor="middle"
        style={{
          whiteSpace: "pre",
        }}
        dominantBaseline="text-before-edge"
        transform="translate(73.848 20.548)"
      >
        {"T"}
      </text>
      <text
        x={41.87931823730469}
        fontFamily="Virgil, Segoe UI Emoji"
        fontSize="130.06411584538046px"
        fill="#4dabf7"
        textAnchor="middle"
        style={{
          whiteSpace: "pre",
        }}
        dominantBaseline="text-before-edge"
        transform="translate(75.613 63.271)"
      >
        {"N"}
      </text>
    </svg>
  );
}

export default Logo;
