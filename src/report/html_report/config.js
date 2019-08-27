report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/607995408_Elementary_test_0_document_0_custom-size.png",
        "test": "../bitmaps_test/20190827-132518/607995408_Elementary_test_0_document_0_custom-size.png",
        "selector": "document",
        "fileName": "607995408_Elementary_test_0_document_0_custom-size.png",
        "label": "Elementary test",
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
          "misMatchPercentage": "3.20",
          "analysisTime": 11
        },
        "diffImage": "../bitmaps_test/20190827-132518/failed_diff_607995408_Elementary_test_0_document_0_custom-size.png"
      },
      "status": "fail"
    }
  ]
});