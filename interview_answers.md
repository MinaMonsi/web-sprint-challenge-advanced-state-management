# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context API was created to solve a specific problem in react. It solves the problem of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   A reducer is a function that recieves the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState.
   Actions are the events that occur in the app based on our user input and trigger updates in the state.  
   The store is created by passing in a reducer, and has a method called getState that returns the current state value.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   Redux-thunk allows us to write action creators that return a function instead of an action. Thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   I have enjoyed the redux concepts that we have covered. If I had to choose a system for managing state, I would choose context. I found it such a great way to manage state and not worry about prop drilling.
