import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div class="footer-top">
        <div class="footer-item">
          <div class="logo_title">
            <img src="./img/logo2.png" alt="" />
          </div>
          <p class="footer_discription">
            {' '}
            Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
            Porro mollitia necessitat ,<br /> voluptas suscipit perspiciatis!
            Non nesci <br />
            harum vel ad cupiditate!
          </p>
        </div>
        <div class="footer-item">
          <h2 class="title">featuerd</h2>
          <ul class="discribtion">
            <li>
              <a href="#">miln </a>
            </li>
            <li>
              <a href="#">watch </a>
            </li>
            <li>
              <a href="#">boys</a>
            </li>
            <li>
              <a href="#">girls</a>
            </li>
            <li>
              <a href="#">jsakldajklj</a>
            </li>
            <li>
              <a href="#">shoes </a>
            </li>
            <li>
              <a href="#">boots </a>
            </li>
            <li>
              <a href="#">cloths</a>
            </li>
          </ul>
        </div>
        <div class="footer-item">
          <h2 class="title">featuerd</h2>
          <div class="footer-content">
            <h4>address</h4>
            <p>123 staret namle city us </p>
            <h4>phone</h4>
            <p>(123) 456-7890</p>
            <h4>email</h4>
            <p>mail#eample.com</p>
          </div>
        </div>
        <div class="footer-item">
          <h2 class="title">instagram</h2>
          <div class="footer-instagram-continer">
            <div class="footer-img-continer">
              <img src="./img/insta/1.jpg" alt="" />
            </div>
            <div class="footer-img-continer">
              <img src="./img/insta/2.jpg" alt="" />
            </div>
            <div class="footer-img-continer">
              <img src="./img/insta/3.jpg" alt="" />
            </div>
            <div class="footer-img-continer">
              <img src="./img/insta/4.jpg" alt="" />
            </div>
            <div class="footer-img-continer">
              <img src="./img/insta/5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-botom-item">
          <div class="footer-brand-logo">
            <img src="./img/payment.png" alt="" />
          </div>
        </div>
        <div class="footer-botom-item">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="footer-botom-item">
          <ul class="footer_icon">
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
