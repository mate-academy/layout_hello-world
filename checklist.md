1. [STYLES] - Get used to style all elements using classes. And don't increase
selectors specificity unless completely necessary
       <details>
         <summary>HTML example</summary>
           ![css-classes-html-example-2](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-html-2.png)
       </details>
       <details>
         <summary>BAD CSS examples</summary>
           ![css-classes-bad-example-4](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-bad-4.png)
           ![css-classes-bad-example-5](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-bad-5.png)
       </details>
       <details>
         <summary>GOOD CSS example</summary>
           ![css-classes-good-example-2](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-good-2.png)
       </details>


2. [CODE STYLE] - Don't use simple tag names or specific styles in class names.
Exception - specific semantic tags, like `header`, `nav`, `footer` etc. Try to
describe the content of the tag.
       <details>
         <summary>BAD example</summary>
           ![html-class-names-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-class-names/example-bad-1.png)
       </details>
       <details>
         <summary>GOOD example</summary>
           ![html-class-names-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-class-names/example-good-1.png)
       </details>


3. [STYLES] - Remember to use fallback fonts - alternative font-family in case the main one doesn't work [like this](https://www.w3schools.com/cssref/pr_font_font-family.asp)


4. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll. But do not break the line if it cannot be broken (ex., long links).


5. [CODE STYLE] - Remember about correct indentation between parent and child
elements. Each level of nesting, including text, contained inside the element,
requires 2-space offset. Also blank line shouldn't be between parent and child elements.
       <details>
         <summary>BAD examples</summary>
           ![html-indentations-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-bad-1.png)
       </details>
       <details>
         <summary>GOOD example</summary>
           ![html-indentations-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-good-1.png)
       </details>


6. [CODE STYLE] - Don't use spaces in links. Have you seen any link with literal
space in it on the Internet? Remember, anchor links start with `#`.


7. [CODE STYLE] - Make sure you have `alt` attribute for images, they must be
present
([find out more](https://osric.com/chris/accidental-developer/2012/01/when-should-alt-text-be-blank/)
and
[even more](https://9clouds.com/blog/the-importance-of-alt-attributes-aka-alt-text/))


8. [LAYOUT] - Logo should be a link to the main page of the website, but not
part of navigation menu

9. [CODE KNOWLEDGE] - Don't use `*` selector for zeroing out your margins or paddings. It's still inefficient for browser to read your web document


10. [TESTS] - Don't forget to add correct style on `:hover`


11. [TESTS] - Remember that links should have `cursor: pointer` and clickable
zone on 100% of header height


12. [TESTS] - Check the [mockup](https://www.figma.com/file/KAV1NnDp7hgQtPnaD6XdOcnG/Moyo-Header?node-id=0%3A1)
again and see the distance between `О` in `VIDEO` to right screen side. Link has
no margin on the right.
