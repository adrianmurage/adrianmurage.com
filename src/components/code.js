import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import rangeParser from "parse-numeric-range";
import {
  codeBox,
  codeBoxHead,
  codeBoxLanguageLabel,
  codeBoxFileName,
  codeBoxCopyButton,
  codeBoxCodeSnippet,
} from "./code.module.css";

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = (str) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};

const Code = (props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const className = props.children.props.className || "";
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, "");
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  );

  return (
    <div className={codeBox}>
      <div className={codeBoxHead}>
        <div className={codeBoxLanguageLabel}>{`${language}`}</div>
        <div className={codeBoxFileName}>{file && `${file}`}</div>
        <button
          onClick={() => {
            copyToClipboard(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
          }}
          className={codeBoxCopyButton}
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </button>
      </div>
      <div className={codeBoxCodeSnippet}>
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? "#00f5c426" : "transparent",
                    display: "block",
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
