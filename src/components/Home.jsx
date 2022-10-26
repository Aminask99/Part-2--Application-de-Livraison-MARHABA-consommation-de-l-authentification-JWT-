import React, { Component } from 'react'

 class Home extends Component {
  render() {
    return (
      <div>
       <h1>wello componnent 1</h1>


     


    <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
    <div className="row justify-content-between gy-5">
      <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
        <h2 data-aos="fade-up">Enjoy Your Healthy<br/>Delicious Food</h2>
        <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
          <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
        <img src="assets/img/hero-img.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
      </div>
    </div>
    </div>
    </section>

    <main id="main">
            
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">
            
            <div className="section-header">
                <h2>About Us</h2>
                <p>Learn More <span>About Us</span></p>
            </div>
            
            <div className="row gy-4">
                <div className="col-lg-7 position-relative about-img"
                style={{ backgroundImage: `url(assets/img/about.jpg)`}} data-aos="fade-up" data-aos-delay="150">
                <div className="call-us position-absolute">
                    <h4>Book a Table</h4>
                    <p>+1 5589 55488 55</p>
                </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
            
                    <div className="position-relative mt-4">
                    <img src="assets/img/about-2.jpg" className="img-fluid" alt=""/>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                    </div>
                </div>
                </div>
            </div>
            
            </div>
            </section>
            
            <section id="why-us" className="why-us section-bg">
            <div className="container" data-aos="fade-up">
            
            <div className="row gy-4">
            
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                    <h3>Why Choose Yummy?</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div className="text-center">
                    <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                    </div>
                </div>
                </div>
            
                <div className="col-lg-8 d-flex align-items-center">
                <div className="row gy-4">
            
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data"></i>
                        <h4>Corporis voluptates officia eiusmod</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    </div>
            
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    </div>
            
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes"></i>
                        <h4>Labore consequatur incidid dolore</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                    </div>
            
                </div>
                </div>
            
            </div>
            
            </div>
            </section>
            
            
            <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="zoom-out">
            
            <div className="row gy-4">
            
                <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Clients</p>
                </div>
                </div>
            
                <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Projects</p>
                </div>
                </div>
            
                <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Hours Of Support</p>
                </div>
                </div>
            
                <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Workers</p>
                </div>
                </div>
            
            </div>
            
            </div>
            </section>
            
            
            <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">
            
            <div className="section-header">
                <h2>Our Menu</h2>
                <p>Check Our <span>Yummy Menu</span></p>
            </div>
            
            <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
            
                <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                    <h4>Starters</h4>
                </a>
                </li>
            
                <li className="nav-item"/>
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                    <h4>Breakfast</h4>
                </a>
            
                <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                    <h4>Lunch</h4>
                </a>
                </li>
            
                <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Dinner</h4>
                </a>
                </li>
            
            </ul>
            
            <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
            
                <div className="tab-pane fade active show" id="menu-starters">
            
                <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Starters</h3>
                </div>
            
                <div className="row gy-5">
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $5.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $14.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $8.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $9.95
                    </p>
                    </div>
            
                </div>
                </div>
            
                <div className="tab-pane fade" id="menu-breakfast">
            
                <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Breakfast</h3>
                </div>
            
                <div className="row gy-5">
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $5.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $14.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $8.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $9.95
                    </p>
                    </div>
            
                </div>
                </div>
            
                <div className="tab-pane fade" id="menu-lunch">
            
                <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Lunch</h3>
                </div>
            
                <div className="row gy-5">
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $5.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $14.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $8.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $9.95
                    </p>
                    </div>
            
                </div>
                </div>
            
                <div className="tab-pane fade" id="menu-dinner">
            
                <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Dinner</h3>
                </div>
            
                <div className="row gy-5">
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $5.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $14.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $8.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $12.95
                    </p>
                    </div>
            
                    <div className="col-lg-4 menu-item">
                    <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">
                        $9.95
                    </p>
                    </div>
            
                </div>
                </div>
            
            </div>
            
            </div>
            </section>
            
            <section id="events" className="events">
            <div className="container-fluid" data-aos="fade-up">
            
            <div className="section-header">
                <h2>Events</h2>
                <p>Share <span>Your Moments</span> In Our Restaurant</p>
            </div>
            
            <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">
            
                <div className="swiper-slide event-item d-flex flex-column justify-content-end"  style={{ backgroundImage: `url(assets/img/events-1.jpg)`}}>
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">$99</div>
                    <p className="description">
                    Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                </div>
            
                <div className="swiper-slide event-item d-flex flex-column justify-content-end"   style={{ backgroundImage: `url(assets/img/events-2.jpg)`}} >
                    <h3>Private Parties</h3>
                    <div className="price align-self-start">$289</div>
                    <p className="description">
                    In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                </div>
            
                <div className="swiper-slide event-item d-flex flex-column justify-content-end"    style={{ backgroundImage: `url(assets/img/events-3.jpg)`}} >
                    <h3>Birthday Parties</h3>
                    <div className="price align-self-start">$499</div>
                    <p className="description">
                    Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                </div>
            
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
            </div>
            </section>
            
            <section id="chefs" className="chefs section-bg">
            <div className="container" data-aos="fade-up">
            
            <div className="section-header">
                <h2>Chefs</h2>
                <p>Our <span>Proffesional</span> Chefs</p>
            </div>
            
            <div className="row gy-4">
            
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="chef-member">
                    <div className="member-img">
                    <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                    </div>
                </div>
                </div>
            
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="chef-member">
                    <div className="member-img">
                    <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                    </div>
                </div>
                </div>
            
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="chef-member">
                    <div className="member-img">
                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                </div>
                </div>
            
            </div>
            
            </div>
            </section>
            <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
            
            <div className="section-header">
                <h2>Book A Table</h2>
                <p>Book <span>Your Stay</span> With Us</p>
            </div>
            
            
            
            </div>
            </section>
            
            </main>

   
       
      </div>
    )
  }
}

export default Home;