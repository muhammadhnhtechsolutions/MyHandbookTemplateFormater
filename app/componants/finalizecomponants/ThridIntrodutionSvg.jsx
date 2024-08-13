import * as React from "react";
import ReactDOMServer from "react-dom/server";

const ThridIntrodutionSvg = ({ familyName, note, introduction }) => (
    
  <svg
    id="_x30_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 612 792"
    enableBackground="new 0 0 612 792"
    xmlSpace="preserve"
    style={{backgroundColor: "#fff"}}
  >
    <g id="_x32_">
      <defs>
        <rect id="SVGID_9_" x={0.7} y={-0.3} width={611.3} height={792.3} />
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_9_" overflow="visible" />
      </clipPath>
      <rect
        x={0.7}
        clipPath="url(#SVGID_2_)"
        fill="#FFFFFF"
        width={611.3}
        height={852.6}
      />
      <ellipse
        opacity={0.57}
        clipPath="url(#SVGID_2_)"
        fill="#D0D2D3"
        cx={0.7}
        cy={2}
        rx={206.2}
        ry={203.3}
      />
      <ellipse
        clipPath="url(#SVGID_2_)"
        fill="#00ADEE"
        cx={641.1}
        cy={820.7}
        rx={177.1}
        ry={174.6}
      />
    </g>
    <g>
      <defs>
        <circle id="SVGID_15_" cx={-325} cy={349.9} r={189.2} />
      </defs>
      <clipPath id="SVGID_4_">
        <use xlinkHref="#SVGID_15_" overflow="visible" />
      </clipPath>
      <g transform="matrix(1 0 0 1 6.103516e-05 0)" clipPath="url(#SVGID_4_)">
        <image
          overflow="visible"
          width={5540}
          height={3693}
          xlinkHref="B49611EF.jpg"
          transform="matrix(0.1729 0 0 0.1729 -799.1152 35.2857)"
        />
      </g>
      <use
        xlinkHref="#SVGID_15_"
        overflow="visible"
        fill="none"
        stroke="#00ADEE"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
    </g>

     <foreignObject
        x={43}
        y={180}
        width={517}
        className="st7 st12 svg-note"
        height={650}
      >
        {/* <p xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 15 }} dangerouslySetInnerHTML={{ __html: introduction }} >
   
  </p> */}

        <p xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 17 }} dangerouslySetInnerHTML={{ __html: introduction?.replaceAll("<p><br></p>", "") }} >

        </p>
      </foreignObject>
    <g>
      <defs>
        <rect id="SVGID_17_" x={632} y={-27.4} width={612} height={819.4} />
      </defs>
      <clipPath id="SVGID_6_">
        <use xlinkHref="#SVGID_17_" overflow="visible" />
      </clipPath>
      <path
        clipPath="url(#SVGID_6_)"
        fill="#00ADEE"
        d="M464.4,859.3c0-219.9,211.4-398.1,472.1-398.1s472.1,178.3,472.1,398.1"
      />
    </g>
    <g id="_x35_">
      <g opacity={0.3}>
        <defs>
          <rect
            id="SVGID_31_"
            x={650}
            y={947.4}
            opacity={0.3}
            width={792}
            height={612}
          />
        </defs>
        <clipPath id="SVGID_8_">
          <use xlinkHref="#SVGID_31_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#SVGID_8_)">
          <image
            overflow="visible"
            width={3901}
            height={2600}
            xlinkHref="B49611ED.jpg"
            transform="matrix(0.4396 0 0 0.4396 94.2067 704.5714)"
          />
        </g>
      </g>
    </g>
    <g opacity={0.3}>
      <defs>
        <rect
          id="SVGID_35_"
          x={-196}
          y={947.4}
          opacity={0.3}
          width={792}
          height={612}
        />
      </defs>
      <clipPath id="SVGID_10_">
        <use xlinkHref="#SVGID_35_" overflow="visible" />
      </clipPath>
      <g clipPath="url(#SVGID_10_)">
        <image
          overflow="visible"
          width={3901}
          height={2600}
          xlinkHref="B49611F3.jpg"
          transform="matrix(0.4396 0 0 0.4396 -751.7933 704.5714)"
        />
      </g>
    </g>
    <g>
      <text
        transform="matrix(1 0 0 1 72.0752 166.3859)"
        fontFamily="'Georgia'"
        fontSize="27.37px"
      >
        {"A Letter to the family..."}
      </text>
    </g>
    <text
      transform="matrix(1 0 0 1 7.8594 123.255)"
      fill="none"
      stroke="#00ADEE"
      strokeMiterlimit={10}
      fontFamily="'ArialRoundedMTBold'"
      fontSize="66.098px"
    >
      {"Introduction"}
    </text>
    <g>
      <text
        transform="matrix(0.9615 0 0 1 61.3301 50.3458)"
        fontFamily="'Georgia-Bold'"
        fontSize="35.3347px"
      >
        {`${familyName} Family`}
      </text>
    </g>
  </svg>
);
export const ThridIntrodutionSvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};
export default ThridIntrodutionSvg;
