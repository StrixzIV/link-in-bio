import './styles/App.css'

import { CgWebsite } from 'react-icons/cg'
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai'

import Socials from './components/Socials'


function App() {

  return (
    <div className='App'>

      <header>
        <img src='./assets/jirayu.jpg' alt='Jirayu Kaewsing' />
        <h1>@strixziv_</h1>
      </header>

      <Socials />

    </div>
  )
}

export default App
