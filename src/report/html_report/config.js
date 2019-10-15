report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20191015-102154\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.21",
          "analysisTime": 18
        }
      },
      "status": "pass"
    }
  ]
});