# Moyo header
Create HTML page with the header using `flexbox` based on the [Figma Mockup](https://www.figma.com/file/1sog2rmfyCjnVxkeZ3ptnc/MOYO-%2F-Header?node-id=0%3A1&mode=dev).

The page should match the design Pixel Perfect: all the sizes, colors and distanced MUST be the same as on the design.

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

## Requirements:

- reset browser default margins.
- use [Roboto font](https://fonts.google.com/specimen/Roboto).
- use semantic tags: `<header>`, `<img>`, `<nav>`, `<ul>`, `<li>` and `<a>`.
- the header should stretch the full page width (don't use horizontal margin).
- the height should be set for nav links (not the header), take it from the design.
- header content should be vertically centered.
- Logo should also be a link with an image inside (from [src/images](src/images)). But it should not be a part of the `<nav>`.
- ❗️ the blue link with a line below should have a class `is-active` in addition to any other classes you add.
- ❗️ add `data-qa="hover"` attribute to the 4th link for testing (`Laptops & computers`)
- link color should be changed on `:hover`
- Use the `::after` and position it relative to a link with `is-active` class
- Don't use flex `gap` property for indents. It's not supported in tests, use `margin` instead.
- There should not be margins before the first and after the last list items
- Don't just copy all styles from Figma. Think, which of them are relevant. Uneven sizes (e.g. `line-height: 14.6px`) are definitely useless.
- Nav Links should not have any padding, but have text centered

## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:

- [DEMO LINK](https://<your_account>.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_moyo-header/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] Header height is set in 1 place (for the links)
- [ ] Content is vertically centered (for any header height)
- [ ] CSS is used to show all letters in Uppercase (don't type them in HTML)
- [ ] Logo is an image wrapped with a link
- [ ] **CSS Variable** is used for a blue color
- [ ] Pseudo-element is used for a blue line below the active link
- [ ] Code follows all the [Code Style Rules ❗️](./checklist.md)
