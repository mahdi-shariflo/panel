import clsx from "clsx";
import { SVGProps } from "react-html-props";

const OrdersSVG = ({ className, ...props }: SVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("w-full h-full fill-current", className)}
            viewBox="0 0 18.456 18.455"
            {...props}
        >
            <path d="M17.62 18.031a.847.847 0 00.618-.277.867.867 0 00.218-.569V.852A.852.852 0 0017.603 0H6.944a1.919 1.919 0 01.471.75h.629a.854.854 0 01.851.788h2.1a1.372 1.372 0 011.371 1.369v15.13l5.253-.006z" />
            <path d="M6.337 1.355a.746.746 0 00-1.492 0 .593.593 0 01-.592.581h-.788v.649h4.254v-.649h-.788a.593.593 0 01-.594-.581z" />
            <path d="M11 2.724H8.9v.124a.924.924 0 01-.923.923H3.2a.924.924 0 01-.923-.923v-.124H.186A.185.185 0 000 2.907v15.365a.185.185 0 00.186.183H11a.185.185 0 00.186-.183V2.907A.185.185 0 0011 2.724zM1.3 6.192a.6.6 0 01.843-.042l.293.266 1.098-1.251a.6.6 0 01.9.786L2.938 7.658a.614.614 0 01-.849.049l-.743-.672a.6.6 0 01-.042-.843zm8.129 10.922H1.7a.6.6 0 010-1.193h7.729a.6.6 0 010 1.193zM1.3 13.031a.6.6 0 01.843-.042l.293.266 1.095-1.25a.6.6 0 01.9.786l-1.493 1.706a.614.614 0 01-.849.049l-.743-.672a.6.6 0 01-.042-.843zm8.129 1.644H6.075a.6.6 0 110-1.193h3.354a.6.6 0 110 1.193zm0-4.362H1.7a.6.6 0 010-1.193h7.729a.6.6 0 110 1.193zm0-2.475H6.075a.6.6 0 010-1.193h3.354a.6.6 0 110 1.193z" />
        </svg>
    );
};

export default OrdersSVG;