import * as React from "react";
import ReactDOMServer from "react-dom/server";

const MissionSvg = ({ missionstate, missionstate1 }) => (
    
    <svg
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 841.9 595.3"
  style={{ enableBackground: "new 0 0 841.9 595.3", userSelect: 'none', backgroundColor: "#fff" }}
  xmlSpace="preserve"
>
    <style type="text/css">
      {
        "\n\t.st0{fill:#FFFFFF;color:#FFFFFF;}\n\t.st1{opacity:0.79;fill:#FFFFFF;color:#FFFFFF;}\n\t.st2{font-family:'TimesNewRomanPSMT';}\n\t.st3{font-size:23.8506px;}\n\t.st4{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n\t.st5{fill:#165E86;color:#165E86;}\n\t.st6{fill:#00416C;color:#00416C;}\n\t.st7{font-family:'TimesNewRomanPS-BoldMT';}\n\t.st8{font-size:40.4879px;}\n\t.st9{fill:#0B8384;color:#0B8384;}\n\t.st10{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n\t.st11{fill:#0071BC;color:#0071BC;}\n\t.st12{fill:#000205;color:#000205;}\n\t.st13{fill:none;stroke:#155D85;stroke-width:3;stroke-miterlimit:10;}\n\tp span { width:inherit; }\n"
      }
    </style>
    <g>
      <defs>
        <rect id="SVGID_1_" x={0} width={841.9} height={595.3} />
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
      </clipPath>
      <g transform="matrix(1 0 0 1 0 0)" style={{ clipPath: "url(#SVGID_2_)" }}>
        <image
          style={{ overflow: "visible" }}
          width={2472}
          height={1213}
          transform="matrix(0.4907 0 0 0.4907 -151.6596 0)"
        />
      </g>
    </g>
    <rect x={19.7} y={22} className="st1" width={802.4} height={551.2} />
  <rect
    x={140}
    y={222.4}
    className="st4"
    style={{ stroke: "#005e83" }}
    width={561.8}
    height={295}
  />
  <rect x={0} y={137} className="st5" width={841.9} height={63.9} />
  <foreignObject
    x={70}
    y={35}
    width={700}
    height={200}
    className="st6 st7 st8"
    style={{ textTransform: "uppercase", textAlign: "center", overflowWrap: "break-word" }}
  >
    <p
      xmlns="http://www.w3.org/1999/xhtml"
      style={{ margin: 0 }}
      dangerouslySetInnerHTML={{ __html: missionstate }}
    />
  </foreignObject>
  <foreignObject
    x={20}
    y={144}
    width={800}
    height={50}
    className="st0 st2 st8"
    style={{ textTransform: "uppercase", textAlign: "center" }}
  >
    <p xmlns="http://www.w3.org/1999/xhtml" style={{ margin: 0 }}>
      {"Mission Statement"}
    </p>
  </foreignObject>
  <foreignObject
    x={190}
    y={240}
    width={460}
    height={260}
    className="st2 st3 svg-note"
    style={{ textAlign: "center", lineHeight: 1.2 }}
  >
    <p
      xmlns="http://www.w3.org/1999/xhtml"
      style={{
        margin: "5px 0px",
        width: 460,
        minHeight: 200,
        alignItems: "center",
        color: "#005e83",
        overflowWrap: "break-word",
      }}
      dangerouslySetInnerHTML={{ __html: missionstate1 }}
    />
  </foreignObject>
</svg>
);
export const MissionSvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};
export default MissionSvg;