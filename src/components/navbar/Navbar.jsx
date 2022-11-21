import { Link } from "react-router-dom";
import LogButton from "./Logbutton";
import { animateScroll as scroll } from "react-scroll";

function Navbar(props){


  function barra() {
    // window.addEventListener('scroll');

  
  
      var vid = document.getElementById("myVideo"); 
  
      function playVid() { 
          vid.play(); 
      } 
  
      function pauseVid() { 
          vid.pause(); 
      } 
  
    
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      var selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    var navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      var position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        var section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      var header = select('#header')
      var offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 16
      }
  
      var elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Header fixed top on scroll
     */
    var selectHeader = select('#header')
    if (selectHeader) {
      var headerOffset = selectHeader.offsetTop
      var nextElement = selectHeader.nextElementSibling
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('fixed-top')
          nextElement.classList.add('scrolled-offset')
        } else {
          selectHeader.classList.remove('fixed-top')
          nextElement.classList.remove('scrolled-offset')
        }
      }
      window.addEventListener('load', headerFixed)
      onscroll(document, headerFixed)
    }
  
    /**
     * Back to top button
     */
    var backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        var navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          var navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }


      
    });

  }




    return(
      

        <div id="header" className="d-flex align-items-center " onLoad={barra}>
          

          
          <div className="container-fluid d-flex align-items-center justify-content-lg-between">
      

            <a href="#hero" className="logo me-auto me-lg-0"><img src={require("../../assets/img/logo/logo3.png")} alt="" className="img-fluid"/></a>
      
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link to="/" className="nav-link scrollto active" href="#hero">Inicio</Link></li>
                <li><Link to={"/acerca"} className="nav-link scrollto" href="#about">Acerca de</Link></li>
                <li><Link to={"/servicios"} className="nav-link scrollto">Servicios</Link></li>
                
                <li><Link to={"/equipo"} className="nav-link scrollto">Nuestro Equipo</Link></li>
                <li><Link to={"/contacto"}  className="nav-link scrollto">Contacto</Link></li>

                {/* <li className="dropdown"><span>Usuario</span> <i className="bi bi-chevron-down"></i> */}

                <li className="dropdown"><Link to={"/usuarios"}><span>Usuario</span> <i className="bi bi-chevron-down"></i></Link>
                  <ul>
                    <li><LogButton to={"/login"} logged={props.logged}/></li>
                    <li><Link >Iniciar Sesión</Link></li>
                    <li><Link href="#">Registro</Link></li>
                
                  </ul>
                </li>
       
      
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
            <div className="header-social-links d-flex align-items-center">
              <a href="https://www.facebook.com/performanceradio" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/performanceradio/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com/performanceradi" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC_ir-CuCJm7gMEeXdegjq2Q" className="youtube" target="_blank"><i className="bi bi-youtube"></i></a>
            </div>
      
          </div>
     
        </div>

      //   <nav class="navbar navbar-expand-lg bg-dark"> 
      //   <div class="container-fluid">
      //     <a class="navbar-brand" href="#">Navbar w/ text</a>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarText">
      //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li class="nav-item">
      //           <a class="nav-link active" aria-current="page" href="#">Home</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="#">Features</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="#">Pricing</a>
      //         </li>
      //       </ul>
      //       <span class="navbar-text">
      //         Navbar text with an inline element
      //       </span>
      //     </div>
      //   </div>
      // </nav>
    )
}

export default Navbar;