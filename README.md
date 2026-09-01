# React Learning

This repository contains my React learning journey and practice code.

## Topics

- Components
- Props
- State
- Events
- Conditional Rendering
- Lists & Keys
- Forms
- Hooks
- Context API
- React Router
- API Integration

## Tech Stack

- React
- Vite
- JavaScript

## 1. Components

### Definition

A **component** in React is an independent, reusable piece of UI that contains its own structure, logic, and behavior.

Components allow a large user interface to be divided into smaller, manageable pieces. Each component can be created once and reused multiple times wherever required.

In React, components are primarily written as **JavaScript functions that return JSX**.

### Basic Syntax

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

A component can then be rendered inside another component:

```jsx
function App() {
  return (
    <>
      <Welcome />
      <Welcome />
    </>
  );
}
```

The `Welcome` component is reusable, so the same component can be rendered multiple times.

---

## 2. Functional Components

Modern React primarily uses **functional components**.

A functional component is a JavaScript function that returns JSX.

```jsx
const Header = () => {
  return <header>My Website</header>;
};
```

It can also be written as:

```jsx
function Header() {
  return <header>My Website</header>;
}
```

Both forms create React components.

---

## 3. Component Naming

React components should normally use **PascalCase**.

```jsx
function UserProfile() {
  return <h2>User Profile</h2>;
}
```

Correct:

```jsx
<UserProfile />
```

Avoid naming components using lowercase:

```jsx
function userprofile() {}
```

Lowercase JSX tags are generally interpreted as HTML elements rather than custom React components.

---

## 4. Reusability of Components

One of the main advantages of components is **reusability**.

Instead of writing the same UI repeatedly:

```jsx
<button>Login</button>
<button>Login</button>
<button>Login</button>
```

We can create a reusable component:

```jsx
function Button() {
  return <button>Login</button>;
}
```

Then reuse it:

```jsx
<Button />
<Button />
<Button />
```

This makes applications easier to maintain and reduces duplicate code.

---

# 5. Props

### Definition

**Props (short for Properties)** are read-only values passed from a **parent component to a child component**.

Props allow components to receive external data and make reusable components dynamic.

The parent component provides the data, and the child component receives and uses it.

### Basic Example

```jsx
function User({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <User name="Divyansh" />;
}
```

Here:

* `App` is the **parent component**.
* `User` is the **child component**.
* `name="Divyansh"` is a prop.
* `name` is received by the `User` component.
* The child uses the prop to display dynamic content.

Output:

```text
Hello, Divyansh
```

---

# 6. Passing Multiple Props

A component can receive multiple props.

```jsx
function User({ name, age, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

function App() {
  return (
    <User
      name="Divyansh"
      age={20}
      role="Full Stack Developer"
    />
  );
}
```

Props can contain different JavaScript data types, such as:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions
* React elements/components

---

# 7. Props Are Read-Only

Props should **not be directly modified by the child component**.

For example:

```jsx
function User({ name }) {
  name = "John"; // Do not modify props
}
```

Props are considered **immutable/read-only inputs**.

If a component needs to change some data, that data should generally be managed using **state** in the appropriate component.

The parent can pass updated props to the child when the parent's state changes.

---

# 8. Destructuring Props

Props are commonly destructured directly in the function parameter.

Instead of:

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

We can use:

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

For multiple props:

```jsx
function User({ name, age, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{role}</p>
    </div>
  );
}
```

Destructuring makes the component cleaner and easier to read.

---

# 9. Passing Functions Through Props

Props can also be used to pass functions from a parent component to a child component.

```jsx
function Child({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <Child handleClick={handleClick} />;
}
```

Here, the parent passes the `handleClick` function to the child as a prop.

This allows the child to trigger behavior that is defined in the parent.

---



