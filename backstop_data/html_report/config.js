report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\layout_hello_world_Hello_World_Page_0_body_0_desktop.png",
        "test": "..\\bitmaps_test\\20251127-173955\\layout_hello_world_Hello_World_Page_0_body_0_desktop.png",
        "selector": "body",
        "fileName": "layout_hello_world_Hello_World_Page_0_body_0_desktop.png",
        "label": "Hello World Page",
        "requireSameDimensions": 0.1,
        "misMatchThreshold": 0.01,
        "url": "https://jk-npc.github.io/layout_hello-world/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "layout_hello_world"
});