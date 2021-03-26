# Moyo header
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_moyo-header/report/html_report/)

> Follow [this instructions](https://github.com/mate-academy/layout_task-guideline#how-to-solve-the-layout-tasks-on-github)

## The task
Create HTML page with the header using `flexbox` basing on [this mockup](https://www.figma.com/file/KAV1NnDp7hgQtPnaD6XdOcnG/Moyo-Header?node-id=0%3A1).

![screenshot](./references/header-example.png)

### Requirements:
- pay attention the mock is adaptive. Develop the layout to fit on 1024px and 1200px the same as on the mock.
- reset browser default margins
- use images from [src/images](src/images)
- Use semantic tags. `<header>`, `<nav>`
- change links styles on `:hover`
- follow styles from the mock
- the link with `blue` color and line below is an active link. It should have `class="is-active"` and relevant styles.
- the link with only `blue` color is an example of `:hover` styles. Every link in the row should have `blue` color on `:hover`. 
- add `data-qa="hover"` attribute to the 4th link for testing (`Ноутбуки и компьютеры`)


### Common mistakes
- Check is you added `data-qa="hover"` and `class="is-active"` required for tests
- Do not use `tabs`. Use `2 spaces` for indentation.
- Don't use repeated styles.
- Don't use extra elements for blue line. Figure out how to work with `::after`
- Check font styles. Use [google fonts](https://fonts.google.com/)
