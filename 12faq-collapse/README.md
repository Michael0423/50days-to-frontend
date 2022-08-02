# Day 12 Points

## Know about Element Object

+ [document.createElement](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/createElement)
+ [element.append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
+ [element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  + Common methods: .add(...classList)、.remove(...classList)、.toggle(class)
  
## element.append vs Node.appendChild

+ Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
+ Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
+ Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.