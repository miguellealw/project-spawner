# Notes

## CLI API
```
  project-spawner <name-of-project>
```

## Commands

**Command:** `project-spawner <name-of-project>`

**Output**
```shell
============ Small Project Creator ============  
  Choose Setup:
    Simple Setup <
    Medium Setup 
    Customize Setup
```

## Simple Setup
simply creates a project with a simple folder stuructre

## Medium Setup
### This will appear if **Medium Setup** is selected
```shell
  CSS:
    CSS <
    SCSS
    SASS
```

### If SCSS or SASS is selected
```shell
  Would you like a folder structure for your SCSS/SASS (Y / n): 
```

## Customize Setup
### This will appear if **Customize Setup** is selected
```shell
  HTML:
    HTML <
    Pug
    Haml
    
  CSS:
    CSS <
    SCSS
    SASS
    LESS
    Stylus

  CSS Framework? (Y / n):
```

### This will appear if 'Y' is selected
```shell
  CSS Framework:
    Bootstrap v4 <
    Bulma
    Foundation
    Semantic UI
    Spectre

```

### Give user option to select eslint
```shell
  Would you like to use eslint in this project? (Y / n):
```
### If 'Y' is selected
```shell
  Eslint Config:
    Custom <
    Standard
    Airbnb

```


## Alternative
**Command:** `ps create <name-of-project> --pug --scss --folder n --css-framework bulma`


## Features for the Future
Setup Backend
```bash
============ Small Project Creator ============ 
  Backend:
    No Backend <
    Express
    Koa
    Hapi
    ASP.NET
    Laravel (Laravel needs to be Installed)
```

## Install Preset Setups

`project-spawner preset <name-of-project>`
```bash
Select a Preset Setup:
  > Preset Name
    Preset Name 2
    Preset Name 3
```