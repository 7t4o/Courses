export default function Icon({ num }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                <rect width="40" height="40" rx="5" fill="#2405F2"/>
            </mask>
            <g mask="url(#mask0)">
                <rect width="40" height="40" rx="5" fill="#2405F2"/>
                <rect x="31" y="14" width="40" height="40" rx="5" fill="#FCD980"/>
            </g>
            <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="white" fontWeight="bold">
                {num}
            </text>
        </svg>
    );
};