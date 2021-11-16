import React from "react";
import './Home.css'
import { useEffect } from "react";


const Carosouel = ()=>{

    useEffect(() => {
        // (function ($) {
        //     "use strict";
            
        //     // Back to top button
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() > 200) {
        //             $('.back-to-top').fadeIn('slow');
        //         } else {
        //             $('.back-to-top').fadeOut('slow');
        //         }
        //     });
        //     $('.back-to-top').click(function () {
        //         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        //         return false;
        //     });
            
            
        //     // Sticky Navbar
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() > 0) {
        //             $('.navbar').addClass('nav-sticky');
        //         } else {
        //             $('.navbar').removeClass('nav-sticky');
        //         }
        //     });
            
            
        //     // Dropdown on mouse hover
        //     $(document).ready(function () {
        //         function toggleNavbarMethod() {
        //             if ($(window).width() > 992) {
        //                 $('.navbar .dropdown').on('mouseover', function () {
        //                     $('.dropdown-toggle', this).trigger('click');
        //                 }).on('mouseout', function () {
        //                     $('.dropdown-toggle', this).trigger('click').blur();
        //                 });
        //             } else {
        //                 $('.navbar .dropdown').off('mouseover').off('mouseout');
        //             }
        //         }
        //         toggleNavbarMethod();
        //         $(window).resize(toggleNavbarMethod);
        //     });
        
            
        //     // Main carousel
        //     $(".carousel .owl-carousel").owlCarousel({
        //         autoplay: true,
        //         animateOut: 'fadeOut',
        //         animateIn: 'fadeIn',
        //         items: 1,
        //         smartSpeed: 300,
        //         dots: false,
        //         loop: true,
        //         nav : false
        //     });
            
        //     // Modal Video
        //     $(document).ready(function () {
        //         var $videoSrc;
        //         $('.btn-play').click(function () {
        //             $videoSrc = $(this).data("src");
        //         });
        //         console.log($videoSrc);
        
        //         $('#videoModal').on('shown.bs.modal', function (e) {
        //             $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        //         })
        
        //         $('#videoModal').on('hide.bs.modal', function (e) {
        //             $("#video").attr('src', $videoSrc);
        //         })
        //     });
            
            
        //     // Date and time picker
        //     $('#date').datetimepicker({
        //         format: 'L'
        //     });
        //     $('#time').datetimepicker({
        //         format: 'LT'
        //     });
        
        
        //     // Testimonials carousel
        //     $(".testimonials-carousel").owlCarousel({
        //         center: true,
        //         autoplay: true,
        //         dots: true,
        //         loop: true,
        //         responsive: {
        //             0:{
        //                 items:1
        //             },
        //             576:{
        //                 items:1
        //             },
        //             768:{
        //                 items:2
        //             },
        //             992:{
        //                 items:3
        //             }
        //         }
        //     });
            
            
        //     // Related post carousel
        //     $(".related-slider").owlCarousel({
        //         autoplay: true,
        //         dots: false,
        //         loop: true,
        //         nav : true,
        //         navText : [
        //             '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        //             '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        //         ],
        //         responsive: {
        //             0:{
        //                 items:1
        //             },
        //             576:{
        //                 items:1
        //             },
        //             768:{
        //                 items:2
        //             }
        //         }
        //     });
            
        // })(jQuery);
        
        
    }, [])

    return(
        <>
           <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-1.jpg" alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>Best <span>Quality</span> Ingredients</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                </p>
                <div className="carousel-btn">
                  <a className="btn custom-btn" href>View Menu</a>
                  <a className="btn custom-btn" href>Book Table</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-2.jpg" alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>World’s <span>Best</span> Chef</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                </p>
                <div className="carousel-btn">
                  <a className="btn custom-btn" href>View Menu</a>
                  <a className="btn custom-btn" href>Book Table</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-3.jpg" alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>Fastest Order <span>Delivery</span></h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                </p>
                <div className="carousel-btn">
                  <a className="btn custom-btn" href>View Menu</a>
                  <a className="btn custom-btn" href>Book Table</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
        </>
    )
}
export default Carosouel;