# Stars block
1. Replace `<your_account>` with your Github username in the links
    - [DEMO LINK](https://<your_account>.github.io/layout_stars/) <br>
    - [TEST REPORT LINK](https://<your_account>.github.io/layout_stars/report/html_report/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)

> Disable `Multiplayer Cursors` in figma to hide other cursors ([Learn how](https://mate-academy.github.io/layout_task-guideline/figma.html#multiplayer-cursors))
___

## The task
Implement the `stars` block used in [the card](https://www.figma.com/file/bS8N1lTT0Ew0Brf1Nfl36iMV/Product-Cards?node-id=0%3A1).
You DON'T need to implement the card now, just the stars block.

- You can find star images in `images` folder
- Reset browser's default `margin`
- Implement 6 blocks with `stars` class
  - The first should have `stars--0` class
  - The next 5 blocks should have an extra class `stars--1`, `stars--2` ... `stars--5` (one extra class per block)
- Each block should have exactly 5 stars styled as in the card design
- The number of atcive (yellow) stars should be different for all 6 blocks depending on modifier class
  - The first block (with just `stars` class) don't have active stars
  - The other 5 blocks have exactly N fisrt stars active where N is a numbers in an additional css class (modifier) `stars--N`
- Each star in a block should have a class `stars__star` and no extra classes or inline styles
  - The star size is fixed (see in the design)
  - The distance between the stars is also fixed 
  - Use `display: flex` for the `stars` block to avoid an issue with extra spaces between individual stars
---
![Stars](./reference/stars.png)
