# Moyo header
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_moyo-header/report/html_report/)

> Follow [these instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)

## The task
Create HTML page with the header using `flexbox` basing on [this mockup](https://www.figma.com/file/1sog2rmfyCjnVxkeZ3ptnc/MOYO-%2F-Header?node-id=0%3A1).

The page should match the design Pixel Perfect: all the sizes, colors and distanced MUST be the same as on the design.

### Requirements:
- use semantic tags: `<header>`, `<img>`, `<nav>`, `<ul>`, `<li>` and `<a>`
- use images from [src/images](src/images)
- reset browser default margins.
- Use [Roboto font](https://fonts.google.com/specimen/Roboto)
- the header should stretch the full page width
- the height should be set for nav links (not the header), take it from the design.
- header content should be vertically centered.
- Logo should also be a link with an image inside. But it should not be a part of the `<nav>`.
- ❗️ the blue link with a line below should have a class `is-active` in addition to any other classes you add.
- link color should be changed on `:hover`
- ❗️ add `data-qa="hover"` attribute to the 4th link for testing (`Laptops & computers`)
- Use the `::after` and position it relative to a link with `is-active` class

### Tips & Hints
- Check one more time if you added `data-qa="hover"` and `class="is-active"` required for tests
- Don't use `gap` property for indents. It's not supported in tests, use `margin` instead.
- There should not be margins before the first and after the last list items
- Use `2 spaces` for indentation in your file (not a `tab` character).
- Don't just copy all styles from Figma. Think, which of them are relevant.
Uneven sizes (e.g. `line-height: 14.6px`) are definitely useless.
- Nav Links should not have any padding, but have text centered
- Uppercase letters for `nav__list` are made with styles, not hardcoded into
html (you should have usual text with first uppercase letter in html)
- Don't set height for `header` explicitly. Let the content (links) dictate it.


## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_moyo-header/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

