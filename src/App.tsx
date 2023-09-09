import "./App.css";
import { Button, Card, Login, SearchBar, SignUp } from "./components";

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Card
        buttonText="Read more"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        imageUrl="https://images.unsplash.com/photo-1622831471617-4b3b0f5b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        date="July 5, 2021"
        readTime="5 min read"
      />
      <Login />
      <SearchBar />
      <SignUp />
    </>
  );
}

export default App;
