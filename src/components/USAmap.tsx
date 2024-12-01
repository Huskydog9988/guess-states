import { type FC } from "react";
import { motion } from "motion/react";
import { type State, USStates } from "~/utils/states";

interface USAMapInputProps {
  guesses: State[];
}

interface StateInputProps {
  state: State;
}

const StateComp: FC<StateInputProps> = ({ state }) => {
  return (
    <motion.path
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      id={state}
      // data-info="<div>State: Hawaii</div><div>Capital: Honolulu</div>"
      fill="#D3D3D3"
      d={USStates[state]}
    />
  );
};

// https://codepen.io/colinrei/pen/MWeXgLz
const USAMap: FC<USAMapInputProps> = ({ guesses }) => {
  return (
    <div>
      <div id="info-box"></div>
      {/* <?xml version="1.0" encoding="utf-8"?> */}
      <svg
        // xmlns:cc="http://creativecommons.org/ns#"
        // xmlns:dc="http://purl.org/dc/elements/1.1/"
        // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        // xmlns:svg="http://www.w3.org/2000/svg"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="us-map"
        preserveAspectRatio="xMinYMin meet"
        // sodipodi:docname="Republican_Party_presidential_primaries_results,_2016.svg"
        // inkscape:version="0.91 r13725"
        x="0px"
        y="0px"
        width="959px"
        height="593px"
        viewBox="174 100 959 593"
        enableBackground="new 174 100 959 593"
        // xml:space="preserve"
      >
        {/* <sodipodi:namedview bordercolor="#666666" objecttolerance="10" pagecolor="#ffffff" borderopacity="1" gridtolerance="10" guidetolerance="10" inkscape:cx="509.19152" inkscape:cy="282.2353" inkscape:zoom="1.2137643" showgrid="false" id="namedview71" inkscape:current-layer="g5" inkscape:window-maximized="1" inkscape:window-y="-8" inkscape:window-x="-8" inkscape:pageopacity="0" inkscape:window-height="1017" inkscape:window-width="1920" inkscape:pageshadow="2">
      </sodipodi:namedview> */}
        <g id="g5">
          {guesses.map((state, i) => {
            return <StateComp key={i} state={state} />;
          })}

          {/* {guesses.includes("dc") ? (
            <g id="DC">
              <path
                id="path58"
                fill="#D3D3D3"
                d="M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z"
              />
              <circle
                id="circle60"
                data-info="<div>Washington DC</div>"
                fill="#D3D3D3"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                cx="975.3"
                cy="351.8"
                r="5"
              />
            </g>
          ) : null} */}
        </g>
        {/* <path
          id="path67"
          fill="none"
          stroke="#A9A9A9"
          strokeWidth="2"
          d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"
        /> */}
      </svg>
    </div>
  );
};

export default USAMap;
