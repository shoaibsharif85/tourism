import React from 'react'
import './App.css'
import Background from './assets/Background.png'
import nap1 from './assets/nap1.jpg'
import nap2 from './assets/nap2.jpg'
import nap3 from './assets/nap3.jpg'
import nap4 from './assets/nap4.jpg'
import nap5 from './assets/nap5.jpg'
import t1 from './assets/t1.jpg'
import t2 from './assets/t2.jpg'
import t3 from './assets/t3.jpg'
import c1 from './assets/c1.png'
import h1 from './assets/h1.png'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header/>
      <section class="home">
        <div class="home-text">
          <h5>lets</h5>
          <h1>Planing Your <br /> Own trevel</h1>
          <p>Lorem ipsum do Recusandae, Exercitationem soluta sequi vel,<br />
            rerum doloribus labor corrupti dolor voluptas?
          </p>
          <a href="" class="btn"> Books a trip</a>
        </div>
      </section>
      <section class="feature">
        <div class="feature-content">
          <div class="row">
            <div class="row-img">
              <img src={nap1} alt="" />
            </div>
            <h4>ski tours</h4>
          </div>
          <div class="row">
            <div class="row-img">
              <img src={nap2} alt="" />
            </div>
            <h4>ski tours</h4>
          </div>
          <div class="row">
            <div class="row-img">
              <img src={nap3} alt="" />
            </div>
            <h4>ski tours</h4>
          </div>
          <div class="row">
            <div class="row-img">
              <img src={nap4} alt="" />
            </div>
            <h4>ski tours</h4>
          </div>
          <div class="row">
            <div class="row-img">
              <img src={nap5} alt="" />

            </div>
            <h4>ski tours</h4>
          </div>
        </div>
      </section>
      {/* <!-- holyday section design --> */}
      <section class="holiday">
        <div class="holiday-img">
<img src={h1} alt="" />
        </div>
        <div class="holiday-text">
          <h5>east nusa tengga</h5>
          <h2>How you enjoy your holiday</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus,
            quos eligendi tempora doloribus quidem illum laudantium accusantium,Lorem
            ipsum dolor sit amet consectetur adipisicing elit.<br />
            fuga accusamus numquam deserunt repudiandae?
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
      </section>
      <section className="tour">
        <div class="center-text">
          <h2>Papular Tours</h2>
        </div>
        <div class="tour-content">
          <div class="box">
           <img src={t1} alt="" />
              <h6>East Java</h6>
              <h4>Mount Bromo</h4>
          </div>
          </div>
        <div class="tour-content">
          <div class="box">
           <img src={t1} alt="" />
              <h6>East Java</h6>
              <h4>Mount Bromo</h4>
          </div>
          </div>
            <div class="tour-content">
              <div class="box">
              <img src={t2} alt="" />
                  <h6>East Java</h6>
                  <h4>Mount Bromo</h4>
                  
              </div>
            
          <div class="tour-content">
            <div class="box">
            <img src={t3} alt="" />
                <h6>East Java</h6>
                <h4>Mount Bromo</h4>
            </div>
          </div>
              <div class="center-btn">
                <a href="#" class="btn">Tours</a>
              </div>
            </div>

          </section>
          {/* <!-- culture section desigm --> */}
                     <section class="culture">
                        <div class="culture-text">
                            <h5>INDONASHION CULTURE</h5>
                            <h2>Our culture is very friendly to people</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum corrupti sapiente ut obcaecati <br/>
                            
                                Alias et inventore animi possimus aliquid repellat enim molestiae. Expedita iste ab rem ea! Iste?</p>
                                <a href="" class="btn">Read More</a>
                        </div>
                        <div class="culture-img">
                            <img src={c1} alt="" />
                        </div>
                     </section>
                     {/* <!-- newsletter section design --> */}
                     <section class="newsletter">
                        <div class="newsletter-content">
                            <div class="newsletter-text">
                                <h2>Ready To Explour</h2>
                                <p>Let's go on vacacion, make your day </p>
                            </div>
                             
                            <form action="">
                                <input type="email" placeholder="  Enter your email....."/>
                               <required/>
                                <input type="submit" value="Get started" class="btn"/>
                            </form>
                        </div>
                     </section>
                     {/* <!-- footer section design --> */}
                     <section class="footer">
                        <div class="footer-box">
                            <h3>Services</h3>
                            <a href="#">Email marketing</a>
                            <a href="#">Campaigns</a>
                            <a href="#">Branding</a>
                            <a href="#">Offline</a>
                        </div>
                        <div class="footer-box">
                            <h3>About</h3>
                            <a href="#">Our story</a>
                            <a href="#">Benifit</a>
                            <a href="#">Team</a>
                            <a href="#">Careers</a>
                        </div>
                        <div class="footer-box">
                            <h3>Help</h3>
                            <a href="#">FAQ</a>
                            <a href="#">Contact us</a>
                        </div>
                        <div class="h-right">
                            <a href="#">Follow Us</a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                        </div>
                     </section>
          <script src="js/script.js"></script>
        </>
        )
}

        export default App
