import { BrowserRouter, Route, Routes } from "react-router-dom"
import BooksList from "./components/books/books-list";
import BooksListGenre from "./components/books/books-list-genre";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<BooksList/>}/>
          <Route path='/genre' element={<BooksListGenre/>}/>
          <Route path='/autor' element={<BooksList/>}/>
          <Route path='*' element={<h2>Page Not Found</h2>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
