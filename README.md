# sb_39-08-12_ReactFormsExercise
 
## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

Exercises to give additional practice working with React Forms and testing a React application. 

Every component required smoke and snapshot tests and tests to verify business logic. Tests need to enter data on the form, submit the form and use the buttons on the form or newly created components.

The assignment consisted of two parts -- a Color Box Maker and a Todo application. Both applications had very similar components 
- `___List` component that renders the form as well as the box or todo component,
- `New___Form` component with the labels, inputs, and 'Add' button to add a new box or todo.
- `Box` or `Todo` component which renders the object -- either a color filled box or a todo item -- with the values entered on the form. An `X` button to delete the box or todo item must appear with object.


## Additional Details

**Enhancements**
- `Date.now()`, the number of milliseconds since January 1, 1970 was used as a key generator. `uuid` was mentioned in the videos and an example was provided, but the key it returns is much longer and complicated. I imagine there is a reason for using `uuid` and just because `Date.now()` works does not necessarily mean it is a correct use. 
- Not sure if it counts as an enhancement, but both parts of the assignment are rendered in `App.js`.

**Difficulties**
- Improper handling of `key={id}` -- NOTHING gets coded on the componet for the key, it just needs to get passed in as a prop! 
- Getting better with the arrow functions and the implicit returns. 
- A good portion of the code was created from scratch, even though both of these applications were very similar. 
- Testing required going back to change some code by adding `data-testid` to the `ColorBox` and `Todo` components -- these were the lowest level components. `data-testid` was added as a means of checking whether it was on the page. The ColorBox did not have text and some method was needed to test whether a box was created on the page.

