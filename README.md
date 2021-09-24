# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

Screenshots of the desktop and mobile version of the website can be find in the Screenshot folder.

### Links

- Solution URL: https://github.com/GMSTER22/sunnyside-project/
- Live Site URL: https://gmster22.github.io/sunnyside-project/

## My process

I built the website from a desktop first perspective. Started by setting my work environment first, meaning git, sass folder and files, gathered all the information needed by looking at the design. Used my own judgement with the help of the chrome developer console to play around with the different dimensions to determine the sizes for my typography and the layout. Built it from top to bottom by focusing on the typography first in a way that would make it easy when I have to make it responsive.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript (for the hambuger)
- Sass
- Flexbox
- Desktop-first workflow
- Media queries to make it responsive on the following breakpoints (23.5em, 36em, 48em, 62em, 75em)

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css (I add to remember how to style the pseudo after element on hover, and use filter in order to apply an hover effect to my social media icons in the footer)

&:hover::after{ background-color: $color-yellow; }

filter: invert(28%) sepia(6%) saturate(3740%) hue-rotate(116deg) brightness(92%) contrast(87%);
```

```css (used the power of sass mixins to write media queries easier)
@mixin respond($breakpoint) {
    @if ($breakpoint == extra-small-device) {
        @media (max-width: 23.5em) {@content};
    }
    @if ($breakpoint == small-device) {
        @media (max-width: 36em) {@content};
    }
    @if ($breakpoint == medium-device) {
        @media (max-width: 48em) {@content};
    }
    @if ($breakpoint == large-device) {
        @media (max-width: 62em) {@content};
    }
    @if ($breakpoint == extra-large-device) {
        @media (max-width: 75em) {@content};
    }
} 
```

```js 
'I found out that selecting an element on the windows using getElementByClassName I couldn\'t target the style of that element in javascript, I could only do it with querySelector'
```

### Continued development

I want to have a deeper understanding of javascript to be able to use it with more ease.

### Useful resources

- MDN, Florin Pop youtube channel

## Author

- Email - [gaeln92@yahoo.fr]
- Frontend Mentor - [@GMSTER22](https://www.frontendmentor.io/profile/@GMSTER22)
- Twitter - [@YoungGael92](https://www.twitter.com/@YoungGael92)

## Acknowledgments

Thanks to Frontend Mentor for the great work they do.