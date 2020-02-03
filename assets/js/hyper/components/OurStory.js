import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking Is The Art Of Adjustment</h2>
            <p>Lorem ipsum dolor amet etsy palo santo hashtag, next level la croix retro cred man braid letterpress mustache street art unicorn before they sold out. Distillery coloring book pok pok tbh, fixie bushwick fashion axe. Flexitarian hot chicken green juice, chia tumblr artisan messenger bag salvia gluten-free four dollar toast gastropub yr. Unicorn tote bag banjo, yr direct trade chambray edison bulb franzen. Echo park jianbing palo santo meditation air plant chartreuse pork belly celiac.
            </p>
            <div class="quote"><strong>Thomas Eggsy</strong> <i>- Master Chef at Restaurant</i></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

