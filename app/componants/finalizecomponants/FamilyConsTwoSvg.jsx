'use client'
import { color } from "framer-motion";
import * as React from "react";
import ReactDOMServer from "react-dom/server";

const scaleY = 1.0; // Adjust this value to increase the height

const FamilyConsTwoSvg = ({ familyName, familycon }) => (

  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 595.3 841.9"
    style={{
      enableBackground: "new 0 0 595.3 841.9", backgroundColor: "#fff"
    }}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:#FF8000;}\n\t.st1{fill:#36363A;}\n\t.st2{fill:#404041;}\n\t.st3{fill:#DDDDDD;}\n\t.st4{fill:#3D3D3D;}\n\t.st5{fill:#FEA00C;}\n\t.st6{fill:#F1F1F2;}\n\t.st7{fill:none;stroke:#E6E7E8;stroke-width:4;stroke-miterlimit:10;}\n\t.st8{opacity:0.58;}\n\t.st9{clip-path:url(#SVGID_12_);fill:#FFFFFF;}\n\t.st10{clip-path:url(#SVGID_12_);}\n\t.st11{fill:url(#SVGID_13_);}\n\t.st12{fill:url(#SVGID_14_);}\n\t.st13{fill:url(#SVGID_15_);}\n\t.st14{fill:url(#SVGID_16_);}\n\t.st15{fill:url(#SVGID_17_);}\n\t.st16{fill:url(#SVGID_18_);}\n\t.st17{fill:url(#SVGID_19_);}\n\t.st18{fill:url(#SVGID_20_);}\n\t.st19{fill:url(#SVGID_21_);}\n\t.st20{fill:url(#SVGID_22_);}\n\t.st21{fill:url(#SVGID_23_);}\n\t.st22{fill:url(#SVGID_24_);}\n\t.st23{fill:url(#SVGID_25_);}\n\t.st24{fill:url(#SVGID_26_);}\n\t.st25{fill:url(#SVGID_27_);}\n\t.st26{fill:url(#SVGID_28_);}\n\t.st27{fill:url(#SVGID_29_);}\n\t.st28{fill:none;}\n\t.st29{fill:url(#SVGID_30_);}\n\t.st30{fill:#212124;}\n\t.st31{fill:url(#SVGID_31_);}\n\t.st32{fill:url(#SVGID_32_);}\n\t.st33{fill:url(#SVGID_33_);}\n\t.st34{fill:url(#SVGID_34_);}\n\t.st35{fill:url(#SVGID_35_);}\n\t.st36{fill:url(#SVGID_36_);}\n\t.st37{fill:#7FAA3C;}\n\t.st38{fill:#698C32;}\n\t.st39{fill:#8CC63F;}\n\t.st40{fill:#E8A315;}\n\t.st41{fill:#B37D10;}\n\t.st42{fill:#FCB217;}\n\t.st43{fill:#3993C4;}\n\t.st44{fill:#2E779E;}\n\t.st45{fill:#40A5DD;}\n\t.st46{fill:#3E2E69;}\n\t.st47{fill:#0E0A17;}\n\t.st48{fill:#5A439A;}\n\t.st49{fill:#D9391F;}\n\t.st50{fill:#A12B17;}\n\t.st51{fill:#EF3E23;}\n\t.st52{opacity:0.6;fill:url(#SVGID_37_);}\n\t.st53{fill:url(#SVGID_38_);}\n\t.st54{fill:#B62025;}\n\t.st55{fill:#688DAF;}\n\t.st56{fill:#6CCAF3;}\n\t.st57{fill:#F37767;}\n\t.st58{fill:url(#SVGID_39_);}\n\t.st59{fill:#ADBAC8;}\n\t.st60{fill:#B73326;}\n\t.st61{fill:url(#SVGID_40_);}\n\t.st62{fill:#3D76BB;}\n\t.st63{fill:url(#SVGID_41_);}\n\t.st64{fill:#7E6AAF;}\n\t.st65{fill:url(#SVGID_42_);}\n\t.st66{fill:#E38625;}\n\t.st67{fill:url(#SVGID_43_);}\n\t.st68{fill:#76A440;}\n\t.st69{fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st70{font-family:'Poppins-SemiBold';}\n\t.st71{font-size:14px;}\n\t.st72{font-family:'AbhayaLibre-Bold';}\n\t.st73{font-size:32.3436px;}\n\t.st74{font-family:'Poppins-Regular';}\n\t.st75{font-size:15.6257px;}\n\t.st76{font-size:25.359px;}\n\t.st77{letter-spacing:5;}\n\t.st78{opacity:0.5;}\n\t.st79{font-family:'Poppins-Bold';}\n\t.st80{font-size:42.5977px;}\n\t.st81{fill:#FFFFFF;}\n\t.st82{font-family:'Poppins-Italic';}\n\t.st83{font-size:10.5562px;}\n\t.st84{fill:none;stroke:#36363A;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st85{fill:url(#SVGID_44_);}\n\t.st86{fill:url(#SVGID_45_);}\n\t.st87{fill:url(#SVGID_46_);}\n\t.st88{fill:url(#SVGID_47_);}\n\t.st89{fill:url(#SVGID_48_);}\n\t.st90{fill-rule:evenodd;clip-rule:evenodd;fill:#FF8000;}\n\t.st91{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n\t.st92{fill-rule:evenodd;clip-rule:evenodd;fill:#36363A;}\n\t.st93{clip-path:url(#SVGID_50_);}\n\t.st94{opacity:0.2;}\n\t.st95{opacity:0.9;}\n"
      }
    </style>
    {/* <g>
      <text transform="matrix(1 0 0 1 43.6893 247.748)">
        <tspan x={0} y={0} className="st1 st70 st71">
          {"So that we may continue to grow together to become"}
        </tspan>
        <tspan x={0} y={21.3} className="st1 st70 st71">
          {"all that God has created us to be"}
        </tspan>
      </text>
    </g> */}
    <text transform="matrix(1 0 0 1 43.942 176.1188)">
      <tspan x={0} y={0} className="st1 st72 st73">
        {"We the Members Of The"}
      </tspan>
      <tspan x={0} y={38.8} className="st1 st72 st73">
        {`${familyName} Handbook Family,`}
      </tspan>
    </text>
    {/* <g>
      <text
        transform="matrix(1 0 0 1 43.8112 309.252)"
        className="st1 st74 st75"
      >
        {"We hereby pledge to do the following:"}
      </text>
    </g> */}
    {/* <g>
      <text
        transform="matrix(1 0 0 1 159.4723 802.2049)"
        className="st1 st72 st76 st77"
      >
        {"Family Members:"}
      </text>
    </g> */}
    <g className="st78">
      <path
        className="st1"
        d="M485.1,153.7c-0.3-4.9-4.4-8.7-9.4-8.9c-0.8,0-1.3-0.4-1.2-1c0-0.6,0.4-1,1.3-1c0.1,0,0.3,0,0.4,0 c11.3,0,22.7,0,34,0c0.3,0,0.6,0,0.9,0c-0.9-3.3-1.8-6.5-2.5-9.8c-0.7-3.2-1.1-6.5-1.7-9.7c-1.4,0.9-2.8,1.8-4.2,2.7 c-0.6,0.4-1.2,0.2-1.5-0.3c-0.3-0.5-0.1-1.1,0.5-1.4c2.7-1.5,5-3.4,7.3-5.5c0.2-0.2,0.5-0.3,0.7-0.4c-1-0.5-1.9-0.7-2.8-1 c-0.5-0.1-1-0.3-1.1-0.9c-0.1-0.6,0.3-0.9,0.7-1.2c3.1-2.3,5.8-4.9,8.1-8c1.2-1.6,2.3-3.4,3.5-5.2c-1.6-0.5-3.1-0.9-4.5-1.4 c-0.4-0.1-0.8-0.5-0.8-0.9c-0.1-0.3,0.2-0.8,0.5-1c5.1-3.9,9.2-8.7,13.1-13.8c0.1-0.1,0.1-0.2,0.3-0.4c-0.3,0-0.6,0-0.8,0 c-1,0-2.1,0.1-3.1,0.1c-0.4,0-0.9-0.3-1.1-0.6c-0.3-0.4,0-0.9,0.3-1.2c0.2-0.2,0.4-0.4,0.6-0.6c3.5-3.9,5.1-8.5,5.4-13.7 c0.1-1.4,0-2.8,0-4.3c-3,1.1-5.6,2.4-8.1,3.9c-4.7,2.9-8.9,6.5-11.6,11.5c-0.2,0.3-0.7,0.6-1,0.5c-0.3-0.1-0.7-0.5-0.9-0.8 c-0.2-0.6-0.3-1.3-0.4-2c-0.2,0.2-0.3,0.3-0.3,0.4c-2,2.7-3.7,5.7-4.8,8.9c-0.9,2.6-1.5,5.3-1.3,8.1c0,0.6,0,1.1-0.5,1.4 c-0.6,0.3-1-0.1-1.4-0.4c-0.5-0.5-1.1-1-1.8-1.7c-0.3,1.8-0.6,3.3-0.7,4.9c-0.3,3.6,0.1,7.2,1.7,10.5c0.4,0.8,0,1.5-1,1.6 c-0.8,0-1.6,0-2.5,0c0.1,0.2,0.2,0.5,0.2,0.7c0.9,2.6,1.8,5.2,2.6,7.8c0.3,0.8,0,1.3-0.6,1.5c-0.6,0.2-1-0.1-1.3-0.9 c0,0,0-0.1,0-0.1c-0.1-0.7-0.5-0.9-1.2-0.9c-12.1,0-24.2,0-36.2,0c-0.2,0-0.5,0-0.7,0c-0.7,0-1.1-0.4-1.1-1c0-0.6,0.5-1,1.2-1 c0.3,0,0.5,0,0.8,0c11.8,0,23.6,0,35.4,0c0.3,0,0.5,0,0.9,0c-0.1-0.3-0.1-0.5-0.2-0.8c-0.5-1.4-1-2.8-1.4-4.3 c-0.2-0.7-0.5-0.9-1.2-0.9c-11.3,0-22.5,0-33.8,0c-0.3,0-0.5,0-0.8,0c-0.5-0.1-0.8-0.5-0.8-1c0-0.6,0.3-0.9,0.9-1 c0.2,0,0.4,0,0.6,0c12.5-0.2,25.1,0.4,37.6-0.3c0.1,0,0.1,0,0.1,0c-0.4-1.8-0.8-3.6-1.3-5.5c-0.2,0-0.4,0-0.7,0 c-11.9,0-23.8,0-35.7,0c-0.2,0-0.6,0.1-0.7,0c-0.3-0.2-0.8-0.6-0.8-0.9c0-0.3,0.3-0.8,0.6-1c0.2-0.2,0.7-0.1,1-0.1 c11.7,0,23.5,0,35.2,0c0.3,0,0.7,0,1,0c0.2-2,0.4-3.9,0.5-5.9c-0.3,0-0.6,0-0.8,0c-12.3,0-24.6,0-37,0c-0.2,0-0.4,0-0.7,0 c-0.6,0-0.9-0.4-0.9-0.9c0-0.6,0.3-1,0.9-1c0.3,0,0.5,0,0.8,0c12.4,0,24.8,0,37.3,0c0.3,0,0.6,0,0.9,0c0.1-0.4,0.2-0.8,0.4-1.2 c0.3-1,1.1-1.2,1.9-0.5c0.4,0.4,0.8,0.7,1.2,1.1c0.3-1.8,0.6-3.5,0.9-5.2c-0.3,0-0.6,0-0.9,0c-13.8,0-27.5,0-41.3,0 c-0.4,0-0.9,0-1.3-0.1c-0.5-0.1-0.8-0.5-0.8-1c0-0.6,0.3-0.9,0.9-1c0.2,0,0.5,0,0.7,0c9.3,0,18.5,0,27.8,0c5,0,10,0,15,0 c0.4,0,0.7,0,0.8-0.5c1.5-3.8,3.6-7.1,6.1-10.3c0.2-0.3,0.4-0.8,0.3-1.1c-0.2-1.5-0.5-3-0.8-4.6c-1.1-5.1-2.6-10-5.2-14.5 c-1.7-2.9-3.8-5.5-6.7-7.3c-1.5-0.9-3.1-1.6-4.9-1.6c-17.8,0-35.6,0-53.5,0c-0.2,0-0.4,0-0.8,0.1c2.4,1.7,4.2,3.7,5.7,6 c3,4.4,4.8,9.3,6.1,14.3c2.4,9.2,3.3,18.6,3.5,28c0.1,5.7-0.1,11.4-0.1,17.2c-0.1,8.9,0.5,17.8,2.5,26.5c1.3,5.5,3.2,10.9,6.4,15.7 c3,4.6,6.9,8.2,12.2,10c2.3,0.8,4.6,1.4,7.1,0.9C482.2,163.3,485.5,158.9,485.1,153.7z M448.8,56.8c-0.3,0-0.6,0-0.9,0 c-0.6-0.1-0.9-0.4-0.9-1c0-0.6,0.3-0.9,0.9-1c0.1,0,0.2,0,0.4,0c14.6,0,29.3,0,43.9,0c0.3,0,0.7,0,0.8,0.2c0.2,0.2,0.5,0.7,0.4,1 c0,0.3-0.4,0.6-0.7,0.8c-0.2,0.1-0.6,0.1-0.9,0.1c-7.2,0-14.4,0-21.6,0C463.1,56.8,455.9,56.8,448.8,56.8z M451.3,63.7 c-0.8,0-1.3-0.3-1.3-1c0-0.7,0.4-1,1.3-1c7.3,0,14.7,0,22,0c7.1,0,14.2,0,21.3,0c0.2,0,0.4,0,0.6,0c0.8,0,1.3,0.4,1.3,1 c0,0.6-0.5,1-1.3,1C480.6,63.7,465.9,63.7,451.3,63.7z M452,70.7c0-0.3,0.4-0.7,0.7-1c0.2-0.1,0.5-0.1,0.8-0.1c14.5,0,29,0,43.6,0 c0.2,0,0.5,0,0.7,0.1c0.5,0.1,0.8,0.6,0.7,1c-0.1,0.3-0.5,0.6-0.8,0.9c-0.1,0.1-0.4,0-0.6,0c-7.2,0-14.5,0-21.7,0 c-7.2,0-14.5,0-21.7,0c-0.2,0-0.6,0.1-0.7,0C452.5,71.4,452,71,452,70.7z M453,78.5c0-0.6,0.4-0.9,0.9-1c0.2,0,0.4,0,0.7,0 c7.2,0,14.4,0,21.6,0c7.2,0,14.5,0,21.7,0c0.2,0,0.4,0,0.7,0c0.6,0.1,0.9,0.4,0.9,1c0,0.6-0.3,1-0.9,1c-0.2,0-0.4,0-0.7,0 c-14.4,0-28.9,0-43.3,0c-0.2,0-0.4,0-0.7,0C453.3,79.4,452.9,79.1,453,78.5z M459.4,135c-0.1,0-0.3,0-0.4,0c-0.6,0-1-0.4-1.1-1 c0-0.6,0.4-1,1.1-1c1.6,0,3.3,0,4.9,0c10.7,0,21.3,0,32,0c0.2,0,0.4,0,0.6,0c0.1-1.9,0.3-3.9,0.4-5.9c-0.3,0-0.6,0-0.9,0 c-12.8,0-25.6,0-38.4,0c-0.2,0-0.4,0-0.7,0c-0.6,0-1-0.3-1-0.9c-0.1-0.6,0.4-1,1-1.1c0.2,0,0.4,0,0.7,0c13,0,26,0,38.9,0 c0.2,0,0.5,0,0.7,0c0.6-2.9,1.1-5.8,1.8-8.7c3-12.8,8.4-24.6,16-35.3c1.6-2.3,3.4-4.4,5.1-6.6c0.6-0.7,1.4-0.7,1.8,0 c0.3,0.5,0,1-0.3,1.4c-1.9,2.4-3.8,4.8-5.6,7.3c-7.6,11-12.8,23-15.6,36.1c-0.9,4.2-1.5,8.5-1.7,12.8c0,0.3,0,0.5,0,0.9 c1.2,0,2.4,0,3.6,0c0.4,0,0.8,0,1.2,0c0.6,0.1,1,0.4,1,1c0,0.6-0.4,0.9-1,1c-0.2,0-0.3,0-0.5,0C488.4,135,473.9,135,459.4,135z"
      />
      <path
        className="st1"
        d="M537,154c-0.5-5.4-4.6-9.2-9.9-9.2c-14.8,0-29.6,0-44.4,0c-0.2,0-0.4,0-0.6,0.1c6.5,4.8,6.8,14.5-0.1,19.7 c0.4,0,0.7,0,0.9,0c14.7,0,29.5,0,44.2,0c0.6,0,1.3,0,1.9-0.2C533.9,163.4,537.4,158.8,537,154z"
      />
      <path
        className="st0"
        d="M434.5,49.1c-1.2-1-2.6-1.9-3.9-2.7c-0.8-0.4-1.8-0.7-2.7-0.7c-4.7,0.1-9.1,4.5-9.4,9.3c6.9,0,13.7,0,20.6,0 C437.8,52.7,436.4,50.7,434.5,49.1z"
      />
    </g>
    <path
      className="st1"
      d="M0,748.9h414.4c23.4,0,45-17.9,56.7-47L524,520.2c11.7-29.1,11.7-64.9,0-94l-52.9-131.7 c-11.7-29.1-33.3-47-56.7-47H0V698.9z"
      transform={`scale(1.1, ${scaleY})`}
    />
    {/* <path
      className="st1"
      d="M0,978.7h414.4c23.4,0,45-13.8,56.7-36.3L524,540.8c11.7-22.5,11.7-50.1,0-72.6l-52.9-101.6
        c-11.7-22.5-33.3-36.3-56.7-36.3H0V678.7z"
      transform={`scale(1.1, ${scaleY})`}
    /> */}
    <g>
      <text transform="matrix(1 0 0 1 44.0289 71.4904)">
        <tspan x={0} y={0} className="st2 st79 st80">
          {"Family"}
        </tspan>
        <tspan x={0} y={46.5} className="st0 st79 st80">
          {"Consitution"}
        </tspan>
      </text>
    </g>
    <g>
        <g>
        <foreignObject
      xmlns="http://www.w3.org/2000/svg"
        className=" svg-note"
        x={43}
      y={240}
      width={450}
      height={600}
    >
      <p
        xmlns="http://www.w3.org/1999/xhtml"
        style={{ margin: 0, textAlign: "left", color:'#fff', overflowWrap: 'break-word' }}
        dangerouslySetInnerHTML={{ __html: familycon?.replaceAll("font-size: 20px;", "").replaceAll("<p><br></p>", "") }}
      >

      </p>
    </foreignObject>
        </g>
     
    </g>
    {/* <g>
      <line className="st84" x1={58.7} y1={784.3} x2={237.4} y2={784.3} />
      <line className="st84" x1={357.9} y1={784.3} x2={536.6} y2={784.3} />
    </g> */}
  </svg>

);

export const FamilyConsTwoSvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};
export default FamilyConsTwoSvg;