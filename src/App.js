import './App.css';
import Header from './Component/Header';
import Story from './Component/Story'
import Posts from './Component/Posts';
import Footer from './Component/Footer';
import Profile from './Component/Profile';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import FileUpload from './Component/FileUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {

  const logIn = useSelector(state => state.loggedIn.posts)
  console.log(logIn)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/' element={<Story />} />
          <Route path='/upload' element={<FileUpload />} />
          <Route path='/signUp' exact element={<SignUp />} />
          <Route path='/logIn' exact element={logIn ? <Profile /> : <SignIn />} />
          {/* IMPORTANT */}
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
