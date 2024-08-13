import * as React from "react";
import ReactDOMServer from "react-dom/server";

const ThridSummarySvg = ({ familyName, summarycomp, signatureImage }) => (
  
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
        <style type="text/css">
          {
            "\n\t.stusa{fill:none;stroke:#36363A;stroke-linecap:round;stroke-miterlimit:10;}\n"
          }
        </style>
        <g opacity={0.25}>
          <defs>
            <rect id="SVGID_1_" y={-0.4} opacity={0.25} width={612} height={792} />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" overflow="visible" />
          </clipPath>
          <g clipPath="url(#SVGID_2_)">
            <image
              overflow="visible"
              width={1380}
              height={920}
              xlinkHref="CAFA5FEC.jpg"
              transform="matrix(0 -0.663 0.663 0 0 872.5714)"
            />
          </g>
        </g>
        <g id="_x39_">
          <g>
            <defs>
              <rect id="SVGID_48_" x={-0.1} y={0.4} width={612} height={792} />
            </defs>
            <clipPath id="SVGID_4_">
              <use xlinkHref="#SVGID_48_" overflow="visible" />
            </clipPath>
            <circle
              clipPath="url(#SVGID_4_)"
              fill="#00ADEE"
              cx={0.6}
              cy={790.1}
              r={142.9}
            />
            <circle
              clipPath="url(#SVGID_4_)"
              fill="#D0D2D3"
              cx={602.9}
              cy={5.8}
              r={142.9}
            />
          </g>
          <rect
            x={67}
            y={173.5}
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            width={478}
            height={498.9}
          />
      
                <foreignObject
        xmlns="http://www.w3.org/2000/svg"
        x={40}
        y={190}
        width={525}
        className="st13 st16 svg-note"
        height={570}
        style={{ textAlign: "justify", lineHeight:'30px' }}
      >
        <p xmlns="http://www.w3.org/1999/xhtml" dangerouslySetInnerHTML={{ __html: summarycomp?.replaceAll('<br>','') }} style={{ margin: 0 }}>
          {/* {`\n            ${summarycomp}\n            `} */}
        
        </p>
      </foreignObject>
      {signatureImage?.book?.summary?.signature !== 
"null" ? (
    <image
      style={{ overflow: "visible", color:'#000' }}
      width={700}
      height={200}
      id="Footer_Black_xA0_Image_5_"
      xlinkHref={`data:image/png;base64,${signatureImage?.book?.summary?.signature}`}
      transform="matrix(0.2652 0 0 0.24 366 700)"
    />
    ):(<foreignObject
      xmlns="http://www.w3.org/2000/svg"
      x={366}
      y={620}
      width={525}
      height={200}
      style={{ textAlign: "center" }}
    >
      {signatureImage?.book?.summary?.signature && (
        <img 
          src={`data:image/png;base64,${signatureImage?.book?.summary?.signature}`} 
          alt="Signature" 
          className='object-contain'
          style={{  width: 500, height: 200, }} 
        />
      )}

    </foreignObject>)}
     <g>
      <line className="st39" style={{fill:'none',stroke:'#36363A',strokeLinecap:'round',strokeMiterlimit:'10',}} x1={67} y1={750.3} x2={245.7} y2={750.3} />
      <line className="st39" x1={366.3} y1={750.3} x2={545} y2={750.3} style={{fill:'none',stroke:'#36363A',strokeLinecap:'round',strokeMiterlimit:'10',}} />
    </g>
    <foreignObject
              xmlns="http://www.w3.org/2000/svg"
              x={426}
              y={763}
              width={700}
              className="st10"
              height={100}
            >
              <p
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  color: "#000",
                  marginTop: 0,
                  fontSize: 18,
                  marginBottom: 0,
                  // lineHeight: 25,
                  marginRight: 7,
                }}
              >
                signature
              </p>
            </foreignObject>
          <g>
            <text transform="matrix(1 0 0 1 66.8282 87.6219)">
              <tspan
                x={0}
                y={0}
                fill="#404041"
                fontFamily="'Georgia-Bold'"
                fontSize="38.5977px"
              >
                {`The ${familyName}`}
              </tspan>
              <tspan
                x={0}
                y={46.5}
                fill="#404041"
                fontFamily="'Georgia-Bold'"
                fontSize="38.5977px"
              >
                {"Family Handbook"}
              </tspan>
              <tspan
                x={0}
                y={86.5}
                fill="#00ADEE"
                fontFamily="'Georgia-Bold'"
                fontSize="38.5977px"
              >
                {"Summary"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
);
export const ThridSummarySvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};
export default ThridSummarySvg;