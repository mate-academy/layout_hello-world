report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20251220-011715\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -29
          },
          "rawMisMatchPercentage": 13.575949367088608,
          "misMatchPercentage": "13.58",
          "analysisTime": 4
        },
        "diffImage": "..\\bitmaps_test\\20251220-011715\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    }
  ]
});