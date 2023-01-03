1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method

- append() can append several nodes and strings, whereas Node. appendChild() can only append one node.

2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

using .innerHTML could break the document while using append() or .createElement() allows for more manipulation without running the risk of any error. If doing a lot of additions would have to continually reset innerHTML, it will be less maintainable than just creating a new element and appending them. 

3. What happens if I create an element using `.createElement()` but don't use `.append()`?

Nothing will happen, it will be null. Have to append for it to be visable. 

4. How might you use a for loop in conjunction with the DOM methods for create elements?

I can create a boolean and string variables without manipulating the HTML