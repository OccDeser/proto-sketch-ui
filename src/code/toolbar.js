import { Select, InputNumber, Slider } from 'antd';

const ToolBar = (props) => {
    const { height, width, theme, onThemeChange, font, onFontChange } = props;

    return (
        <div style={{ height: height, width: width, backgroundColor: "#cdd1d3", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <Slider
                min={6}
                max={36}
                step={1}
                value={font}
                onChange={onFontChange}
                style={{ width: 100, marginRight: 10 }}
            />
            <InputNumber
                min={6}
                max={36}
                size="small"
                value={font}
                onChange={onFontChange}
                style={{ width: 60, marginRight: 10 }}
            />
            <Select
                defaultValue="github"
                size="small"
                style={{ width: 120, marginRight: 10 }}
                onChange={onThemeChange}
                value={theme}
                options={[
                    {
                        value: 'github',
                        label: 'Github',
                    },
                    {
                        value: 'tomorrow',
                        label: 'Tomorrow',
                    },
                    {
                        value: 'xcode',
                        label: 'Xcode',
                    }
                ]}
            />
        </div>
    )
}

export default ToolBar;