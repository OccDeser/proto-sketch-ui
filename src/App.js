import React, { useState, useEffect } from "react";
import { Splitter } from 'antd';
import './App.css';
import CodeBox from './code/box';
import Picture from "./picture";
import { getDrawProto } from "./service";

const DRAW_INTERVAL = 100;

const DEMO_CODE = String.raw`protocol demo

actor A
actor B

A -> B:
"Hello"
`;

const App = () => {
    const [code, setCode] = useState(DEMO_CODE);
    const [imageLink, setImageLink] = useState(null);
    const [updatets, setUpdatets] = useState(null);
    const [drawTimeout, setDrawTimeout] = useState(null);

    const drawProto = async (code) => {
        let result = await getDrawProto(code);
        if (result && result.link) {
            setImageLink(result.link);
        }
    }

    const handleCodeChange = (newCode) => {
        setCode(newCode);

        let now = Date.now();
        if (now - updatets < DRAW_INTERVAL) {
            clearTimeout(drawTimeout);
        }

        setUpdatets(now);
        let newTimeout = setTimeout(() => drawProto(newCode), DRAW_INTERVAL);
        setDrawTimeout(newTimeout);
    }

    useEffect(() => {
        drawProto(code);
    }, []);

    return (
        <div className="App">
            <Splitter
                style={{
                    height: "100vh",
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Splitter.Panel defaultSize="50%" min="15%" max="80%">
                    <Picture link={imageLink} />
                </Splitter.Panel>
                <Splitter.Panel>
                    <CodeBox
                        height="100vh"
                        code={code}
                        onCodeChange={handleCodeChange}
                    />
                </Splitter.Panel>
            </Splitter>
        </div>
    );
}

export default App;
