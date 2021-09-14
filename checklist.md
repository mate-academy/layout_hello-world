1. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll.

2. [CODE STYLE] - Remember about correct indentation between parent and child
elements. Each level of nesting, including text, contained inside the element,
requires 2-space offset.

GOOD example:
```html
<div>
  <p>
    some text
  </p>
</div>
```
BAD example:
```html
<div>
<p>
some text
</p>
</div>
```

3. [CODE STYLE] - If the HTML-element has long attribute values or number of
attributes is more than 3 - start each one, including the first, on the new
line with 2-space indentation related to tag. Tag’s closing bracket should be
on the same level as opening one.

GOOD example:
```html
<input
  type="text"
  name="surname"
  id="surname"
  required
>
```
BAD example:
```html
<input type="text" name="surname"
id="surname" required>
```
BAD example:
```html
<input type="text"
  name="surname"
  id="surname"
  required>
```
BAD example:
```html
<input
type="text"
name="surname"
id="surname"
required>
```
Still BAD example:
```html
<input
  type="text"
  name="surname"
  id="surname"
  required>
```

4. [CODE STYLE] - Use camelCase for values of name attribute - they should be
valid as JavaScript object keys. It should not contain spaces, “-” or other
special characters.

GOOD example:
```html
<input
  type="date"
  name="dateOfBirth"
  id="dateOfBirth"
  required
>
```
BAD example:
```html
<input
  type="date"
  name="date of birth"
  id="dateOfBirth"
  required
>
```

5. [CODE STYLE] - No need to provide empty value="" attribute for inputs. Add
it only if a certain value is specified from the start, or use placeholders.
6. [FUNCTIONAL] - You need to use a label tag for each input, so that every
input could be activated by clicking on the corresponding label.
7. [TESTS] - Remember, you need to add a certain distance BETWEEN inputs and
BETWEEN blocks with inputs. It means that, for example, the last input in
the group of inputs should not have a set bottom margin.
8. [TESTS] - Remember, any other styles besides margins, should be browser
default.

