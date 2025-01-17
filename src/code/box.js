import React, { useState } from "react";
import CodeEditor from "./editor";
import ToolBar from "./toolbar";

const CodeBox = (props) => {
    const { height, code, onCodeChange } = props;

    const [theme, setTheme] = useState("xcode");
    const [fontSize, setFontSize] = useState(14);

    return (
        <div>
            <ToolBar
                height='30px'
                width="100%"
                theme={theme}
                onThemeChange={setTheme}
                font={fontSize}
                onFontChange={setFontSize}
            />
            <CodeEditor
                height={`calc(${height} - 30px)`}
                width="100%"
                code={code}
                onCodeChange={onCodeChange}
                theme={theme}
                font={fontSize}
            />
        </div>
    );
}


export default CodeBox;
