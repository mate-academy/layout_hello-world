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
Implement the [`stars` block](https://www.figma.com/file/EIBkG1dy1jnK88YPO34Qir/Moyo-Catalog-updated) used in a card and catalog.
You DON'T need to implement the card now, just the stars block.

![Stars](./reference/stars.png)
___
- You can find star images in the `images` folder
- Reset browser's default `margin`
- Implement 6 blocks with `stars` class. Each block should have 5 elements inside with the class `stars__star`.
  - Stars should be added as centered background-images, not as "img" or "svg" tags
  - The star size and the distance should be taken from Figma
  - Use `display: flex` for the `stars` block to avoid an issue with extra spaces between individual stars
- Add one of the next extra classes (a `modifier`) `stars--0`, `stars--1`, `stars--2` ... `stars--5` to each block
- The block with `stars--N` modifier should have exactly `N` first stars active

---
--> [CHECKLIST](https://github.com/mate-academy/layout_stars/blob/master/checklist.md)

## Tips & Hints
- Check the design again. See the difference in size between star image and its
container?
- There's no need to add vertical margins between rows of stars.
- !!! DON'T use `gap` property for `flex` container because it does not work in tests
