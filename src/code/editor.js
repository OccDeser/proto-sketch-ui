import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';

import ace from 'ace-builds';

const CustomHighlightRules = ace.require('ace/mode/text_highlight_rules').TextHighlightRules;
class PSLHighlightRules extends CustomHighlightRules {
    constructor() {
        super();
        this.$rules = {
            start: [
                {
                    token: 'keyword',
                    regex: '\\b(if|while|actor|arrow|line|picture|protocol)\\b',
                },
                {
                    token: 'constant.numeric',
                    regex: /\d+|auto/,
                },
                {
                    token: 'buildin',
                    regex: /(<>)|(<-)|(>-)|(><)|(-<)|(->)/
                },
                {
                    token: 'string',
                    regex: /"/,
                    next: "string"
                },
            ],
            string: [
                {
                    token: "string",
                    regex: /\\"/,
                },
                {
                    token: "string",
                    regex: /"/,
                    next: "start"
                },
                {
                    token: 'string',
                    regex: /[^"]*/
                }
            ],
        };
    }
}

const TextMode = ace.require('ace/mode/text').Mode;
class PSLCustomMode extends TextMode {
    constructor() {
        super();
        this.HighlightRules = PSLHighlightRules;
    }
}

ace.define('ace/mode/psl', function (require, exports, module) {
    exports.Mode = PSLCustomMode;
});

const CodeEditor = (props) => {
    const { height, width, code, onCodeChange, theme, font } = props;

    return (
        <AceEditor
            name="ace-editor"
            mode="psl"
            theme={theme}
            value={code}
            onChange={onCodeChange}
            style={{ height: height, width: width }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                showPrintMargin: false,
                fontSize: `${font}pt` ,
            }}
        />
    );
}

export default CodeEditor;
