# **Answer to the all questions:-**
## Answer No-1
 In my poinion, there is a difference detween them. **getElementById** selects a single element using its unique id, returning the element or null if not found.
 **getElementsByClassName** targets all elements with the same class name, returning a live HTMLCollection.
 **querySelector** and **querySelectorAll** work with any CSS selector—the first one returns only the first match, while the second returns a static NodeList of all matches.
## Answer No-2
**DOM-Document Object Model.** I can create new element with **createElement()**, customize it (text, attributes, etc.), and then insert with methods like **appendChild()** or **prepend()**.
## Answer No-3
 **Event bubbling** = event starts at the target element → moves upward **(child → parent → document)**. In my opinion, this is how it works. the key is to move from smaller elements to larger elements.
## Answer No-4
 **Event Delegation** = using one parent listener to manage events on many child elements.
It’s possible because of event bubbling.
## Answer No-5
 I think so. The difference detween them is. **preventDefault()** → stops default browser action (like navigation, form submit).
**stopPropagation()** → stops event flow (bubbling/capturing) to parent elements.
