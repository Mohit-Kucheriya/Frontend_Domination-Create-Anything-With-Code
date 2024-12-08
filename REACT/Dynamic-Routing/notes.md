1. React Router - Its main purpose is to provide routing functionality to React applications i.e. to navigate between different pages.

2. To achieve this, we need to install the react-router-dom package.

3. To apply routing, we need to wrap our application with the Router component and that though in the main.jsx file.

4. We need to import the BrowserRouter from react-router-dom.

5. Previously we were using the anchor tag to navigate between different pages, but it's refresh the page.

6. So, now we are using the Link tag i.e. <Link to="/about">About</Link> to navigate between different pages.

7. Routes is a component that we need to wrap our routes with it.
   syntax:

```javascript
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/user" element={<User />}></Route>
</Routes>
```

8. Route is component that is responsible for rendering the component based on the path.
