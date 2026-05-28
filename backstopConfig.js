{
  "id": "hello_world",
  "viewports": [
    {
      "name": "desktop",
      "width": 1280,
      "height": 800
    }
  ],
  "scenarios": [
    {
      "label": "Home page",
      "url": "http://localhost:3000",
      "delay": 500
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "html_report": "backstop_data/html_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox", "--disable-setuid-sandbox"]
  }
}
