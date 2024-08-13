import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
// family mamber svg state start
// const parentspreview2 = useAppSelector((state) => state.api.parentspreview2);
// const parentspreview1 = useAppSelector((state) => state.api.parentspreview1);
// const parentspreview = useAppSelector((state) => state.api.parentspreview);
// family mamber svg state start
const ThirdFamilyMamberSvg = ({ familyName, parentsDataPreview, imagecover, familyMembers, isFaimlymember }) => (
  <>
    {familyMembers.status &&
  <svg
    id="_x30_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 612 792"
    style={{
      enableBackground: "new 0 0 612 792",
    }}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {
        "\n\t.st0{opacity:0.25;}\n\t.st1{clip-path:url(#SVGID_10_);fill:#FFFFFF;}\n\t.st2{opacity:0.57;clip-path:url(#SVGID_10_);fill:#D0D2D3;}\n\t.st3{clip-path:url(#SVGID_10_);fill:#00ADEE;}\n\t.st4{clip-path:url(#SVGID_12_);}\n\t.st5{display:none;}\n\t.st6{display:inline;}\n\t.st7{display:inline;clip-path:url(#SVGID_14_);fill:#36363A;}\n\t.st8{display:inline;clip-path:url(#SVGID_14_);}\n\t.st9{fill:#00ADEE;}\n\t.st10{display:inline;clip-path:url(#SVGID_14_);fill:#00ADEE;}\n\t.st11{fill:#36363A;}\n\t.st12{clip-path:url(#SVGID_18_);fill:#00ADEE;}\n\t.st13{font-family:'Georgia';}\n\t.st14{font-size:31px;}\n\t.st15{fill:none;}\n\t.st16{font-size:14px;}\n\t.st17{font-size:12px;}\n\t.st18{font-size:26.8725px;}\n\t.st19{clip-path:url(#SVGID_26_);fill:#00ADEE;}\n\t.st20{opacity:0.38;}\n\t.st21{opacity:0.87;fill:#FFFFFF;}\n\t.st22{fill:#1E1B1B;}\n\t.st23{opacity:0.3;}\n\t.st24{opacity:3.000000e-02;fill:#FFFFFF;}\n\t.st25{fill:#FFFFFF;}\n\t.st26{opacity:0.74;clip-path:url(#SVGID_34_);fill:#FFFFFF;}\n\t.st27{clip-path:url(#SVGID_34_);}\n\t.st28{fill:none;stroke:#000000;stroke-width:3.1849;stroke-miterlimit:10;}\n\t.st29{opacity:0.74;clip-path:url(#SVGID_38_);fill:#FFFFFF;}\n\t.st30{clip-path:url(#SVGID_38_);}\n\t.st31{clip-path:url(#SVGID_40_);fill:#36363A;}\n\t.st32{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n\t.st33{fill:url(#SVGID_43_);}\n\t.st34{fill:url(#SVGID_44_);}\n\t.st35{fill:url(#SVGID_45_);}\n\t.st36{fill:url(#SVGID_46_);}\n\t.st37{fill:url(#SVGID_47_);}\n\t.st38{fill-rule:evenodd;clip-rule:evenodd;fill:#36363A;}\n\t.st39{fill:none;stroke:#36363A;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st40{clip-path:url(#SVGID_49_);fill:#00ADEE;}\n\t.st41{clip-path:url(#SVGID_49_);fill:#D0D2D3;}\n\t.st42{fill:#404041;}\n\t.st43{font-family:'Poppins-Light';}\n\t.st44{font-size:8.5971px;}\n\t.st45{letter-spacing:1;}\n\t.st46{font-family:'Georgia-Bold';}\n\t.st47{font-size:35.3347px;}\n"
      }
    </style>
    <g>
      <text
        transform="matrix(1 0 0 1 202.4109 120.0265)"
        className="st13 st14"
        style={{
          textDecoration: "underline",
        }}
      >
        {"Family Members"}
      </text>
    </g>
    <g id="_x32_">
      <defs>
        <rect id="SVGID_9_" x={-631.3} y={-0.3} width={611.3} height={792.3} />
      </defs>
      <clipPath id="SVGID_2_">
        <use
          xlinkHref="#SVGID_9_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <ellipse
        style={{
          clipPath: "url(#SVGID_2_)",
          fill: "#00ADEE",
        }}
        cx={9.1}
        cy={820.7}
        rx={177.1}
        ry={174.6}
      />
    </g>
    <g>
      <defs>
        <rect id="SVGID_17_" y={-27.4} width={612} height={819.4} />
      </defs>
      <clipPath id="SVGID_4_">
        <use
          xlinkHref="#SVGID_17_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <path
        style={{
          clipPath: "url(#SVGID_4_)",
          fill: "#00ADEE",
        }}
        d="M-167.6,859.3c0-219.9,211.4-398.1,472.1-398.1s472.1,178.3,472.1,398.1"
      />
    </g>
      <g id="_x35_">
      <g className="st23">
        <defs>
          <rect
            id="SVGID_31_"
            x={18}
            y={947.4}
            className="st23"
            width={792}
            height={612}
          />
        </defs>
        <clipPath id="SVGID_10_">
          <use
            xlinkHref="#SVGID_31_"
            style={{
              overflow: "visible",
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_10_)",
          }}
        >
          <image
            style={{
              overflow: "visible",
            }}
            width={3901}
            height={2600}
            xlinkHref="EC4ACE89.jpg"
            transform="matrix(0.4396 0 0 0.4396 -537.7933 704.5714)"
          />
        </g>
      </g>
    </g>
    <g className="st23">
      <defs>
        <rect
          id="SVGID_35_"
          x={-828}
          y={947.4}
          className="st23"
          width={792}
          height={612}
        />
      </defs>
      <clipPath id="SVGID_12_">
        <use
          xlinkHref="#SVGID_35_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <g className="st4">
        <image
          style={{
            overflow: "visible",
          }}
          width={3901}
          height={2600}
          xlinkHref="EC4ACE8B.jpg"
          transform="matrix(0.4396 0 0 0.4396 -1383.7932 704.5714)"
        />
      </g>
    </g>
    {familyMembers.status &&
            familyMembers?.book?.family_bios?.parent_members?.map((parentspreview, index) => (
  <g key={index} style={{ transform: `translateY(${index === 0 ? -35 : 300 + (index == 1 ? 0 : index * 300)}px)` }} className="member-1 parent">
      <g>
        <defs>
          <path
            id="SVGID_19_"
            d="M157.7,372.8H77.5c-17.1,0-31-13.9-31-31V206.3c0-17.1,13.9-31,31-31h80.2c17.1,0,31,13.9,31,31v135.6 C188.6,359,174.8,372.8,157.7,372.8z"
          />
        </defs>
        <clipPath id="SVGID_6_">
          <use
            xlinkHref="#SVGID_19_"
            style={{
              overflow: "visible",
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_6_)",
          }}
        >
          <image
            style={{
              overflow: "visible",
            }}
            width={3648}
            height={5472}
            xlinkHref={parentspreview.image}
            transform="matrix(4.580462e-02 0 0 4.580462e-02 34.0236 122.9239)"
          />
        </g>
        <use
          xlinkHref="#SVGID_19_"
          style={{
            overflow: "visible",
            fill: "none",
            stroke: "#00ADEE",
            strokeWidth: 4,
            strokeMiterlimit: 10,
          }}
        />
      </g>
      <g>
        <text
          transform="matrix(1.1612 0 0 1 211.7275 192.7638)"
          style={{
            fontFamily: "'ComicSansMS'",
            fontSize: "26.8725px",
          }}
        >
          {parentspreview.full_name}
        </text>
      </g>
      <g>
        <g>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={215}
            y={215}
            width={130}
            height={40}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
              <span
                className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}
              >
                {"Family Role: "}
              </span>
              <br />
              <span className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
              { parentspreview.relation !== null  ? parentspreview.relation : parentspreview?.other_relation }
              </span>
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={390}
            y={215}
            width={140}
            height={40}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
              <span
                className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}>
                      {"Birthday:"}
                    </span>
                    <br />
                    <span className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
                    {parentspreview.dob}
                    </span>
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={215}
            y={250}
            width={130}
            height={50}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
              >
              <span
              className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}
              >
                {"Lives in: "}
              </span>
              <br />
              <span className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
                  {parentspreview.city}
              </span>
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={390}
            y={250}
            width={140}
            height={50}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
              <span
                 className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}>
                       {"Birth Place :"}
                     </span>
                     <br />
                     <span className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
                     {parentspreview.birth_city}
                     </span>
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={215}
            y={300}
            width={130}
            height={50}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
                   <span x={0} y={78} className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}>
       {"Favorite Food:"}
     </span>
  <br />
     <span x={0} y={91} className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
     {parentspreview.favourite_food !== "" ? parentspreview.favourite_food : parentspreview.other_favourite_food}
     </span>
              {/* <span
                style={{
                  color: "#00ADEE",
                }}
              >
                {"Favorite Food: "}
              </span>
              <br />
              <span className="st5 st8 st7 food-1">
                {
                  ' {{($parent_one->favourite_food == "other") ? $parent_one->other_favourite_food : $parent_one->favourite_food}}'
                }
              </span> */}
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={390}
            y={300}
            width={140}
            height={50}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
              
              <span
                className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}>
                       {"My Profession:"}
                     </span>
                     <br />
                     <span className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
                     {parentspreview.profession}
                     </span>
            </p>
          </foreignObject>
          <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            x={215}
            y={350}
            width={140}
            height={50}
          >
            <p
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                // lineHeight: 15,
                margin: 0,
              }}
            >
               <span x={0} y={117} className={`${index%2==0 ? "st9 st13 st16":"textColor"}`}>
         {"Favorite Holiday:"}
       </span>
       <br />
       <span x={0} y={130} className={`${index%2==0 ?  "textColor" : "st25 st13 st17"}`}>
       {parentspreview.favourite_holiday !== "" ? parentspreview.favourite_holiday : parentspreview.other_favourite_holiday}
       </span>
              {/* <span
                style={{
                  color: "#00ADEE",
                }}
              >
                {"Favorite Holiday: "}
              </span>
              <br />
              <span className="st5 st8 st7 food-1">
                {
                  ' {{($parent_one->favourite_holiday == "other") ? $parent_one->other_favourite_holiday : $parent_one->favourite_holiday}}'
                }
              </span> */}
            </p>
          </foreignObject>
        </g>
      </g>
      <rect
        x={215.7}
        y={404.8}
        style={{
          fill: "none",
        }}
        width={332.3}
        height={40.4}
      />

      <foreignObject
        xmlns="http://www.w3.org/2000/svg"
        x={215}
        y={412.1513}
        width={260}
        height={75}
      >
        <p
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            // lineHeight: 15,
            margin: 0,
            fill: "#404041",
            // fontFamily: "'Poppins-Light'",
            // fontSize: 10,
          }}
        >
          <span className="st15">
          {parentspreview.afraid_of !== "" ? parentspreview.afraid_of : parentspreview.other_afraid_of}
          </span>
        </p>
      </foreignObject>
    </g>
    
            ))}
    <g>
      <text
        transform="matrix(0.9615 0 0 1 61.3301 72.3458)"
        className="st46 st47"
      >
        {`THE ${familyName ? familyName : ""} FAMILY`}
      </text>
    </g>
  </svg>

        }
  </>
);
export const ThirdFamilyMamberSvgToDataUrl = (svgComponent) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svgComponent);
  const buffer = Buffer.from(svgString);
  return `data:image/svg+xml;base64,${buffer.toString('base64')}`;
};
export default ThirdFamilyMamberSvg;