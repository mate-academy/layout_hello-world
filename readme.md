# Moyo header
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_moyo-header/report/html_report/)

> Follow [these instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_moyo-header/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

## The task
Create HTML page with the header using `flexbox` basing on [this mockup](https://www.figma.com/file/1sog2rmfyCjnVxkeZ3ptnc/MOYO-%2F-Header?node-id=0%3A1).

![screenshot](./references/header-example.png)

### Requirements:
- pay attention the mock is adaptive. Develop the layout to fit on 1024px and 1200px the same as on the mock.
- reset browser default margins
- use images from [src/images](src/images)
- use semantic tags: `<header>`, `<nav>`, `ul`
- change links styles on `:hover`
- follow styles from the mock
- the link with `blue` color and line below is an active link. It should have `class="is-active"` and relevant styles.
- the link with only `blue` color is an example of `:hover` styles. Every link in the row should have `blue` color on `:hover`.
- add `data-qa="hover"` attribute to the 4th link for testing (`Laptops & computers`)
---
--> [CHECKLIST](https://github.com/mate-academy/layout_moyo-header/blob/master/checklist.md)

### Tips & Hints
- Don't use `gap` property for indents. It's not supported in tests, use `margin` instead.
- Check one more time if you added `data-qa="hover"` and `class="is-active"`
required for tests
- Do not use `tabs`. Use `2 spaces` for indentation.
- Don't use repeated styles.
- Don't just copy all styles from Figma. Think, which of them are relevant.
Uneven sizes (e.g. `line-height: 14.6px`) are definitely useless.
- Don't use extra elements for blue line. Figure out how to work with `::after`
and positioning
- Check font styles. Use [google fonts](https://fonts.google.com/)
- Links in `nav` should have clickable area above and below the text
- Uppercase letters for `nav__list` are made with styles, not hardcoded into
html (you should have usual text with first uppercase letter in html)
- Don't set height for `header` explicitly. Let the content (links) dictate it.
- Logo should also be a link to the main page of the website (#home). But it
should not be part of `nav`.
