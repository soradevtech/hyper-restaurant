import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .2) 0, #000 100%), url("https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png")'
    }}>
      <div class="container">
        <h1>"Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart."</h1>
        <span class="author">- Wolfgang Puck -</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>





/*
REFERENCES:
https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png
*/
