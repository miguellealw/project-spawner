# Notes

## CLI API
```
  project-spawner <name-of-project>
```

## Commands

**Command:** `project-spawner <name-of-project>`

**Output**
```
============ Small Project Creator ============  
  Choose Setup:
    Simple Setup <
    Medium Setup 
    Customize Setup
```

### This will appear if 'Customize Setup' is selected
```
  HTML:
    Vanilla <
    Pug
    Haml
    
  CSS:
    Vanilla <
    SCSS
    SASS
    LESS
    Stylus

  CSS Framework:
    Yes <
    No
```

### This will appear if 'Yes' is selected
```
  Choose CSS Framework:
    Bootstrap v4 <
    Bulma
    Foundation
    Semantic UI
    Spectre

```


## Alternative
**Command:** `spc create <name-of-project> --pug --scss`


## Features for the Future
Setup Backend
```
============ Small Project Creator ============ 
  Backend:
    No Backend <
    Laravel (Laravel needs to be Installed)
    ASP.NET
    Express
```