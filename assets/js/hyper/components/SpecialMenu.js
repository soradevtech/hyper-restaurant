import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" class="texturebg">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious Flavour of Autumn</h2>
        <div class="row boxes">
          <div class="col-md-4">
            <div class="box">
              <div class="box-img"><div class="price-circle">$25</div></div>

              <span class="title">Super BBQ Grill No Smoke</span>
              <p class="details">Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffe or tea
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="box">
              <div class="box-img"><div class="price-circle">$42</div></div>

              <span class="title">Queen of Autumn</span>
              <p class="details">Warm chicken wings, portobello mushrooms, fresh mozzarella, coffe or tea
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="box">
              <div class="box-img"><div class="price-circle">$30</div></div>

              <span class="title">Royal Liver Fried</span>
              <p class="details">Grilled beef steak, roasted red potatoes with rosemary, mushroom sauce, wine
              </p>
            </div>
          </div>
        </div>
          <a href="#" class="link">View Full Menu</a>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
