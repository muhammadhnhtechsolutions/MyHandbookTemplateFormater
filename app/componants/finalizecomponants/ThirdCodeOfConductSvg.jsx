import * as React from "react";
import ReactDOMServer from "react-dom/server";

const ThirdCodeOfConductSvg = ({ codeconduct1, codeconduct, inputValue1, familyName, imagecover }) => (

      <svg
        id="_x30_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 612 792"
        enableBackground="new 0 0 612 792"
        xmlSpace="preserve"
        style={{ backgroundColor: "#fff"}}
      >
        <g opacity={0.25}>
          <defs>
            <rect id="SVGID_7_" y={-0.4} opacity={0.25} width={612} height={792} />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_7_" overflow="visible" />
          </clipPath>
          <g clipPath="url(#SVGID_2_)">
            <image
              overflow="visible"
              width={1380}
              height={920}
              xlinkHref="9CCF6313.jpg"
              transform="matrix(0 -0.663 0.663 0 0 872.5714)"
            />
          </g>
        </g>
        <g id="_x35_">
          <g opacity={0.3}>
            <defs>
              <rect
                id="SVGID_31_"
                x={-847.1}
                y={90}
                opacity={0.3}
                width={792}
                height={612}
              />
            </defs>
            <clipPath id="SVGID_4_">
              <use xlinkHref="#SVGID_31_" overflow="visible" />
            </clipPath>
            <g clipPath="url(#SVGID_4_)">
              <image
                overflow="visible"
                width={3901}
                height={2600}
                xlinkHref="9CCF6311.jpg"
                transform="matrix(0.4396 0 0 0.4396 -1402.9362 -152.8571)"
              />
            </g>
          </g>
        </g>
        <g id="_x36_">
          {/* <g>
            <defs>
              <rect id="SVGID_39_" x={-0.1} y={648.1} width={144} height={144} />
            </defs>
            <clipPath id="SVGID_6_">
              <use xlinkHref="#SVGID_39_" overflow="visible" />
            </clipPath>
            <path
              clipPath="url(#SVGID_6_)"
              fill="#36363A"
              d="M-1.1,669.3l1,149.8c65.1,0,116.8,33.1,116.8-32S63.9,669.3-1.1,669.3z"
            />
          </g> */}
          <g>
            <text transform="matrix(1 0 0 1 72.2849 89.8348)">
              <tspan
                x={0}
                y={0}
                fill="#00ADEE"
                fontFamily="'Georgia-Bold'"
                fontSize="46px"
              >
                {"CODE OF"}
              </tspan>
              <tspan
                x={0}
                y={53}
                fill="#00ADEE"
                fontFamily="'Georgia-Bold'"
                fontSize="46px"
              >
                {"CONDUCT"}
              </tspan>
            </text>
          </g>
          <g style={{ transform: "translateY(-95px)" }}>

{codeconduct1 &&
  [...codeconduct1,...inputValue1].map((item, index) => (
    <g
      className="bullet_one"
      key={index}
      style={{ transform: "translateY(0px)" }}
    >
      <rect
        x={77}
        y={261 + index * 45}
        transform={`rotate(45, 0, ${259 + index * 45})`}
        className="st12"
        width={10.8}
        height={10.8}
      />
      <rect
        x={77}
        y={261 + index * 45}
        transform={`rotate(45, 0, ${259 + index * 45})`}
        className="st13"
        width={9.1}
        height={9.1}
      />
      <foreignObject
        xmlns="http://www.w3.org/2000/svg"
        x={73}
        y={309 + index * 45}
        width={500}
        height={90}
      >
        <p
          xmlns="http://www.w3.org/1999/xhtml"
          className="st10 st11 statement_one"
          style={{ margin: 0 }}
        >
          {`\n        ${item}\n    `}
        </p>
      </foreignObject>
    </g>
  ))}
{/* {inputValue1 &&
  inputValue1.map((item, index) => (
    <g key={index} className="input-with-rect">
      <g className="bullet_one">
        <rect
          x={0}
          y={580 + codeconduct.length * 39 + index * 30}
          transform={`rotate(45, 0, ${
            658 + codeconduct.length * 39 + index * 30
          })`}
          className="st7"
          width={10.8}
          height={10.8}
        />
        <rect
          x={0}
          y={580 + codeconduct.length * 39 + index * 30}
          transform={`rotate(45, 0, ${
            658 + codeconduct.length * 39 + index * 30
          })`}
          className="st8"
          width={9.1}
          height={9.1}
        />
      </g>
      <foreignObject
        xmlns="http://www.w3.org/2000/svg"
        x={73}
        y={597 + codeconduct.length * 39 + index * 30}
        width={450}
        className="st13 st15"
        height={60}
      >
        <p
          xmlns="http://www.w3.org/1999/xhtml"
          className="statement_eight"
          style={{ margin: 0, textAlign: "justify" }}
        >
          {`\n        ${item}\n    `}
        </p>
      </foreignObject>
    </g>
  ))} */}

</g>
         
          <g>
            <defs>
              <path
                id="SVGID_41_"
                d="M559.8,226.1h-80.2c-17.1,0-31-13.9-31-31V59.5c0-17.1,13.9-31,31-31h80.2c17.1,0,31,13.9,31,31v135.6 C590.8,212.2,576.9,226.1,559.8,226.1z"
              />
            </defs>
            <clipPath id="SVGID_8_">
              <use xlinkHref="#SVGID_41_" overflow="visible" />
            </clipPath>
            <g clipPath="url(#SVGID_8_)">
              <image
                overflow="visible"
                width={3264}
                height={4928}
                xlinkHref={`data:image/png;base64,${imagecover}`}
                transform="matrix(-7.077206e-02 0 0 7.077206e-02 628.8571 -15.7885)"
              />
            </g>
            <use
              xlinkHref="#SVGID_41_"
              overflow="visible"
              fill="none"
              stroke="#00ADEE"
              strokeWidth={4}
              strokeMiterlimit={10}
            />
          </g>
        </g>
      </svg>
);
export const ThirdCodeOfConductSvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};

export default ThirdCodeOfConductSvg;
