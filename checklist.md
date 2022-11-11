- make sure all links work and test is present
- make sure there is an empty line at the end of the file ([find out why](https://evanhahn.com/newline-necessary-at-the-end-of-javascript-files/))
- elements of type block (e.g. `div`) are already 100% wide, there is no need to write this in styles
- after you open the tag, you have to add at least one more level of indentation before you close this tag 

 GOOD example:
```
<div>
  <div>
    some text
  </div
</div>
```

 BAD example:
```
<div>
<div>
some text
</div
</div>
```
- do not add extra files to the PR, use `git add <file_name>` instead of `git add .` or use `.gitignore` file ([gitignore](https://git-scm.com/docs/gitignore))
- check the [style guide](https://mate-academy.github.io/style-guides/htmlcss.html)
