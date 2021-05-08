import React from "react";
// import "./styles.css";
import { scaleLinear } from "d3-scale";
const linescale = scaleLinear().domain([0, 40]).range([3, 30]);

const linelengths = [80, 75, 70];
const linespace = 8;
const linkRowLength = 5;
const linkSize = 15;
const linkXSpace = 15;
const linkYSpace = 15;
const linesY = 4.5 * linkYSpace;

const chunkArray = (arr, chunkArraySize) => {
  if (chunkArraySize <= 0) throw "Invalid chunkArray size";
  var R = [];
  for (var i = 0, len = arr.length; i < len; i += chunkArraySize) R.push(arr.slice(i, i + chunkArraySize));
  return R;
};

export const ArticleIcon = ({ textlength, linksin, linksout, linktype }) => {
  const linecount = linescale(textlength);
  return (
    <svg width="100px" height="400px" className="ArticleIcon">
      {linksin && (
        <g transform={`translate(0,${linkSize})`}>
          <Links type={linktype} count={linksin} />
        </g>
      )}
      <g transform={`translate(0,${linesY})`}>
        {[...Array(Math.round(linecount))].map((m, i) => (
          <line
            x1={0}
            x2={linelengths[i % 2 === 0 ? 0 : i % 3 === 0 ? 1 : 2]}
            y1={i * linespace}
            y2={i * linespace}
            className="ai_textlength"
          />
        ))}
      </g>
      {linksin && (
        <g transform={`translate(0,${linesY + linecount * linespace + linkYSpace})`}>
          <Links type={linktype} count={linksin} />
        </g>
      )}
    </svg>
  );
};

const Links = ({ type, count }) => {
  const triangles = [...Array(count)].map((m, i) => (
    <path d={`M0,0 L${linkSize / 2},${linkSize * 0.8} L${linkSize * 0.8},0 L0,0`} />
  ));

  const circles = [...Array(count)].map((m, i) => <circle cx={linkSize * 0.4} r={linkSize * 0.4} />);

  const rows = chunkArray(type === "circles" ? circles : triangles, linkRowLength).map(m =>
    m.map((el, i) => <g transform={`translate(${i * linkXSpace},0)`}>{el}</g>)
  );

  return (
    <g>
      {rows.map((row, i) => (
        <g transform={`translate(0,${i * linkYSpace})`} >{row}</g>
      ))}
    </g>
  );
};
