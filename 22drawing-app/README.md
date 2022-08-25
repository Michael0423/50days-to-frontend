# Day 22 Points

## Know about Canvas controls

### Initinalization

```html
<!-- html -->
<canvas id='canvas' width='' height=''></canvas>
```

```javascript
// js
const canvas = docuemnt.getElementById('canvas');
const ctx = canvas.getContext('2d');
```

+ First step: use canvas tag in HTML and set the size.
+ Second step: get the canvas element then get the drawing context by ``getContext()``.
+ Final: drawing anything you want!

### Drawing

+ beginPath(): Begins a path, or resets the current path.
+ arc(x, y, r, sAngle, eAngle, counterclockwise):
    | **Parameters** | **Description** |
    | :---: | :-- |
    | x | The x-coordinate of the center of the circle |
    | y | The y-coordinate of the center of the circle |
    | r | The radius of the circle |
    | sAngle | The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle) |
    | eAngle | The ending angle, in radians |
+ fill(): Fills the current drawing (path)
+ moveTo(x, y):
    | **Parameters** | **Description** |
    | :---: | :-- |
    | x | The x-coordinate of where to move the path to|
    | y | The y-coordinate of where to move the path to |
+ lintTo(x, y):
    | **Parameters** | **Description** |
    | :---: | :-- |
    | x | The x-coordinate of where to create the line to |
    | y | The y-coordinate of where to create the line to |
+ stroke(): Actually draws the path you have defined
+ clearRect(x, y, width, height):
    | **Parameters** | **Description** |
    | :---: | :-- |
    | x | The x-coordinate of the upper-left corner of the rectangle to clear |
    | y | The y-coordinate of the upper-left corner of the rectangle to clear |
    | width | The width of the rectangle to clear, in pixels |
    | height | The height of the rectangle to clear, in pixels |

## Reference

+ [w3Schools](https://www.w3schools.com/tags/ref_canvas.asp)
+ [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)