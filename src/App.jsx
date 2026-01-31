
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import DormDetail from './pages/DormDetail'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/detail" element={<DormDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App