module.exports = {
    "id": "backstop_default",
    "viewports": [
        {
            "label": "phone",
            "width": 320,
            "height": 480
        },
        {
            "label": "tablet",
            "width": 768,
            "height": 1024
        },
        {
            "label": "desktop",
            "width": 1280,
            "height": 800
        }
    ],
    "scenarios": [
        {
            "label": "Hello World Page",
            "url": "http://localhost:3000",
            "selectors": ["document"],
            "delay": 500
        }
    ],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
        "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
};

