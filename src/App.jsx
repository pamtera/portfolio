import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import WorkDetail from './pages/WorkDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work/:slug" element={<WorkDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
