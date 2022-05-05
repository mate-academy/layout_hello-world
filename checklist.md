1. [CODE STYLE] - Add empty lines between multiline sibling blocks of HTML.
But don't add empty lines between parent and child elements

GOOD example:
```html
<ul>
  <li class="nav__item">
    <a href="#home">Home</a>
  </li>

  <li class="nav__item">
    <a href="#shop">Shop</a>
  </li>

  <li class="nav__item">
    <a href="#contacts">Contacts</a>
  </li>
</ul>
```
BAD example:
```html
<ul>

  <li class="nav__item">
    <a href="#home">Home</a>
  </li>
  <li class="nav__item">
    <a href="#shop">Shop</a>
  </li>
  <li class="nav__item">
    <a href="#contacts">Contacts</a>
  </li>

</ul>
```

2. [CODE STYLE] - If several selectors MUST always have the same styles, group them using `,` to prevent accidental out ot sync in future

GOOD example:
```css
.block--1,
.block--2,
.block--3 {
  background-color: yellowgreen;
}
```

BAD example:
```css
.block--1 {
  background-color: yellowgreen;
}

.block--2 {
  background-color: yellowgreen;
}

.block--3 {
  background-color: yellowgreen;
}
```

3. [STYLE] - Don't set fixed container size. Let the content size dictate it.
4. [TESTS] - Don't add vertical margin between rows of stars.
