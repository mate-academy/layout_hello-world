1. [STYLES] - Get used to style all elements using classes. And don't increase
selectors specificity unless completely necessary

```html
<!--index.html:-->
<nav
  class="nav"
>
  <ul class="nav__list">
    ...
  </ul>
</nav>
```
GOOD example:
```css
/* style.css */
.nav__list {
  list-style: none;
}
```

BAD example:
```css
/* style.css */
ul {
  list-style: none;
}
```

BAD example:
```css
/* style.css */
nav ul {
  list-style: none;
}
```

2. [CODE STYLE] - Don't use simple tag names or specific styles in class names.
Exception - specific semantic tags, like `header`, `nav`, `footer` etc. Try to
describe the content of the tag.

GOOD example:
```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#apple" class="nav__link">Apple</a>
    </li>
    ...
  </ul>
</nav>
```
BAD example:
```html
<nav class="no-padding">
  <ul class="ul">
    ...
    <li class="li">
      <a href="#apple" class="a-last-no-decoration">Apple</a>
    </li>
  </ul>
</nav>
```

3. [STYLES] - Remember to use fallback fonts - alternative font-family in case the main one doesn't work [like this](https://www.w3schools.com/cssref/pr_font_font-family.asp)
4. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll.
5. [CODE STYLE] - Remember about correct indentation between parent and child
elements. Each level of nesting, including text, contained inside the element,
requires 2-space offset.

GOOD example:
```html
<!--index.html:-->
<div>
  <p>
    some text
  </p>
</div>
```

BAD example:
```html
<!--index.html:-->
<div>
<p>
some text
</p>
</div>
```

6. [CODE STYLE] - Don't use spaces in links. Have you seen any link with literal
space in it on the Internet? Remember, anchor links start with `#`.
7. [CODE STYLE] - Make sure you have `alt` attribute for images, they must be
present
([find out more](https://osric.com/chris/accidental-developer/2012/01/when-should-alt-text-be-blank/)
and
[even more](https://9clouds.com/blog/the-importance-of-alt-attributes-aka-alt-text/))
8. [LAYOUT] - Logo should be a link to the main page of the website, but not
part of navigation menu
9. [TESTS] - Don't forget to add correct style on `:hover`
10. [TESTS] - Remember that links should have `cursor: pointer` and clickable
zone on 100% of header height
11. [TESTS] - Check the [mockup](https://www.figma.com/file/KAV1NnDp7hgQtPnaD6XdOcnG/Moyo-Header?node-id=0%3A1)
again and see the distance between `О` in `ВИДЕО` to right screen side. Link has
no margin on the right.
