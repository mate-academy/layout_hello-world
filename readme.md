# Stars block
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_stars/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_stars/report/html_report/)

> Follow [this instructions](https://mate-academy.github.io/layout_task-guideline)
___

> Disable `Multiplayer Cursors` in figma to hide other cursors ([Learn how](https://mate-academy.github.io/layout_task-guideline/figma.html#multiplayer-cursors))
___

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_stars/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

## The task
Implement the [`stars` block](https://www.figma.com/file/EIBkG1dy1jnK88YPO34Qir/Moyo-Catalog-updated) used in card and catalog.
You DON'T need to implement the card now, just the stars block.

![Stars](./reference/stars.png)
___
- You can find star images in `images` folder
- Reset browser's default `margin`
- Implement 6 blocks with `stars` class
  - Each block should have an extra class `stars--0`, `stars--1`, `stars--2` ... `stars--5` (one extra class per block)
- Each block should have exactly 5 stars styled as in the card design
- The number of active (yellow) stars should be different for all 6 blocks depending on modifier class
  - The first block (with `stars--0` modifier) don't have active stars
  - The other 5 blocks have exactly N fisrt stars active where N is a numbers in an additional css class (modifier) `stars--N`
  - Add stars as background-images, not as "img" or "svg" tags
- Each star in a block should have a class `stars__star` and no extra classes or inline styles
  - The star size is fixed (see in the design)
  - The distance between the stars is also fixed
  - Use `display: flex` for the `stars` block to avoid an issue with extra spaces between individual stars
---
--> [CHECKLIST](https://github.com/mate-academy/layout_stars/blob/master/checklist.md)

## Tips & Hints
- Check the design again. See the difference in size between star image and its
container?
- There's no need to add vertical margins between rows of stars.
- !!! DON'T use `gap` property because it does not work in tests
