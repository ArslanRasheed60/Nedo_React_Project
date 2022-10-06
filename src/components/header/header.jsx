import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import $ from "jquery";

//images
import logo_white from "../../assets/img/logo-white.png";

const Header = () => {
  const [fix, setFix] = useState(false);
  const [click, setClick] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const handleCollapse = () => {};

  useEffect(() => {
    $(window).on("resize", function () {
      if ($(window).width() <= 1199) {
        $(".collapse.navbar-collapse").removeClass("collapse");
      } else {
        $(".navbar-collapse").addClass("collapse");
      }
    });

    $(".mobile-menu a").on("click", function () {
      $(".main-menu-wrap").addClass("open");
      $(".collapse.navbar-collapse").removeClass("collapse");
    });

    $(".mobile_menu a").on("click", function () {
      $(this).parent().toggleClass("open");
      $(".main-menu-wrap").toggleClass("open");
    });

    $(".menu-close").on("click", function () {
      $(".main-menu-wrap").removeClass("open");
    });
    $(".mobile-top-bar").on("click", function () {
      $(".header-top").addClass("open");
    });
    $(".close-header-top button").on("click", function () {
      $(".header-top").removeClass("open");
    });
    var $offcanvasNav = $(".navbar-nav"),
      $offcanvasNavSubMenu = $offcanvasNav.find(".dropdown-menu");
    $offcanvasNavSubMenu
      .parent()
      .prepend(
        '<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>'
      );
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.siblings("ul").slideUp("slow");
        } else {
          $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("class").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('dropdown-menu')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <header className={fix ? "header-wrap sticky" : "header-wrap style1"}>
        <div className="container ">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="index.html">
              <img src={logo_white} alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse main-menu-wrap"
              id="navbarSupportedContent"
            >
              <div className="menu-close d-lg-none">
                <a href={"javascript:void(0)"}>
                  {" "}
                  <i className="ri-close-line"></i>
                </a>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to={"/home"} className="nav-link active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Explore
                    <i className="ri-add-line"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink to="/exploreauction" className="nav-link">
                        Explore Auction
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Pages
                    <i className="ri-add-line"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink to="/authorprofile" className="nav-link">
                        Author Profile
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item d-lg-none">
                  <NavLink to="/" className="btn style1">
                    Connect Wallet
                  </NavLink>
                </li>
              </ul>
              <div className="others-options  md-none">
                <button className="searchbtn">
                  <i className="ri-search-line"></i>
                </button>
              </div>
              <div className="others-options  md-none">
                <div className="header-btn">
                  <NavLink to="/" className="btn style1">
                    Connect Wallet
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
          <div className="mobile-bar-wrap">
            <button className="searchbtn d-lg-none">
              <i className="ri-search-line"></i>
            </button>
            <div className="mobile-menu d-lg-none">
              <a href={"javascript:void(0)"}>
                <i className="ri-menu-line"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="search-area">
        <div class="container">
          <form action="#">
            <div class="form-group">
              <input type="search" placeholder="Search Here" autofocus />
            </div>
          </form>
          <button type="button" class="close-searchbox">
            <i class="ri-close-line"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
