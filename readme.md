# Product cards
1. Replace `<your_account>` with your Github username in the links
    - [DEMO LINK](https://<your_account>.github.io/layout_stars/) <br>
    - [TEST REPORT LINK](https://<your_account>.github.io/layout_stars/report/html_report/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)

> Disable `Multiplayer Cursors` in figma to hide other cursors ([Learn how](https://mate-academy.github.io/layout_task-guideline/figma.html#multiplayer-cursors))
___

## The task
Implement the `stars` block used in [the card](https://www.figma.com/file/bS8N1lTT0Ew0Brf1Nfl36iMV/Product-Cards?node-id=0%3A1).
Do not need to implement card in this task, just stars.

- Reset browser's default `margin`
- Implement 6 `stars` blocks
  - The first one is general
  - Add 5 more blocks with a modifier per block from `stars--1` to `stars--5`
  - Each block should have a given number of active stars without adding any special class for an individual star. (Use `nth-child`)
- The star size is fixed
- The distance between the stars is also fixed
---
![Stars](./reference/stars.png)
