import {h, app} from 'hyperapp'
import Header from './Header.js'
import TopImg from './TopImg.js'
import OurStory from './OurStory.js'
import SpecialMenu from './SpecialMenu.js'
import RandomQuote from './RandomQuote.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions} />
      <TopImg state={state} actions={actions} />
      <OurStory state={state} actions={actions} />
      <SpecialMenu state={state} actions={actions} />
      <RandomQuote state={state} actions={actions} />
    </div>
  )
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>


/*

TO DO:

Change images in the SpecialMenu

Do something about the nav menu links so that all of the chosen links serve a purpose

Come up with a logo for the top left of the page. Currently placeholder text

Make the full menu link transition like all the other links

*/
