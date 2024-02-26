var THEMEMASCOT={};!function(e){"use strict";var t=e(document),a=e(document.body),i=e(window),n=e("html"),o=e("body"),l=(e("#wrapper"),e("#header"),e("#footer"),e("section")),r=e(".gallery-isotope"),s=".portfolio-filter a",d=e(".portfolio-filter a:eq(0)");e(".portfolio-slider");THEMEMASCOT.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return THEMEMASCOT.isMobile.Android()||THEMEMASCOT.isMobile.BlackBerry()||THEMEMASCOT.isMobile.iOS()||THEMEMASCOT.isMobile.Opera()||THEMEMASCOT.isMobile.Windows()}},THEMEMASCOT.isRTL={check:function(){return"rtl"===e("html").attr("dir")}},THEMEMASCOT.urlParameter={get:function(e){var t,a,i=decodeURIComponent(window.location.search.substring(1)).split("&");for(a=0;a<i.length;a++)if((t=i[a].split("="))[0]===e)return void 0===t[1]||t[1]}},THEMEMASCOT.bmiCalculator={magic:function(e){var t="",a="";return e?(e<15&&(a="very severely underweight"),e>=15&&e<16&&(a="severely underweight"),e>=16&&e<18.5&&(a="underweight"),e>=18.5&&e<25&&(a="normal"),e>=25&&e<30&&(a="overweight"),e>=30&&e<35&&(a="moderately obese"),e>=35&&e<=40&&(a="severely obese"),e>40&&(a="very severely obese"),t="Your BMI is <span>"+e+"</span><br />You are <span>"+a+"</span>."):t="You broke it!",t},calculateStandard:function(e){var t=e.find('input[name="bmi_standard_weight_lbs"]').val(),a=e.find('input[name="bmi_standard_height_ft"]').val(),i=e.find('input[name="bmi_standard_height_in"]').val(),n=(e.find('input[name="bmi_standard_age"]').val(),e.find('radio[name="bmi_standard_gender"]').val(),12*parseInt(a,10)+parseInt(i,10)),o=parseFloat(t)/(n*n)*703,l=THEMEMASCOT.bmiCalculator.magic(o);e.find("#bmi_standard_calculator_form_result").html(l).fadeIn("slow")},calculateMetric:function(e){var t=e.find('input[name="bmi_metric_weight_kg"]').val(),a=e.find('input[name="bmi_metric_height_cm"]').val(),i=(e.find('input[name="bmi_standard_age"]').val(),e.find('radio[name="bmi_standard_gender"]').val(),parseFloat(t)),n=.01*parseFloat(a),o=i/(n*n),l=THEMEMASCOT.bmiCalculator.magic(o);e.find("#bmi_metric_calculator_form_result").html(l).fadeIn("slow")},init:function(){var t=e("#form_bmi_standard_calculator");t.on("submit",(function(e){return e.preventDefault(),THEMEMASCOT.bmiCalculator.calculateStandard(t),!1}));var a=e("#form_bmi_metric_calculator");a.on("submit",(function(e){return e.preventDefault(),THEMEMASCOT.bmiCalculator.calculateMetric(a),!1}))}},THEMEMASCOT.initialize={init:function(){THEMEMASCOT.bmiCalculator.init(),THEMEMASCOT.initialize.TM_fixedFooter(),THEMEMASCOT.initialize.TM_datePicker(),THEMEMASCOT.initialize.TM_ddslick(),THEMEMASCOT.initialize.TM_sliderRange(),THEMEMASCOT.initialize.TM_platformDetect(),THEMEMASCOT.initialize.TM_onLoadPopupPromoBox(),THEMEMASCOT.initialize.TM_customDataAttributes(),THEMEMASCOT.initialize.TM_parallaxBgInit(),THEMEMASCOT.initialize.TM_resizeFullscreen(),THEMEMASCOT.initialize.TM_prettyPhoto_lightbox(),THEMEMASCOT.initialize.TM_nivolightbox(),THEMEMASCOT.initialize.TM_fitVids(),THEMEMASCOT.initialize.TM_equalHeightDivs()},TM_fixedFooter:function(){var t=e(".fixed-footer");t.length>0&&e("body.has-fixed-footer .main-content").css("margin-bottom",t.height())},TM_datePicker:function(){e(".date-picker").datepicker(),e(".time-picker").timepicker(),e(".datetime-picker").datetimepicker()},TM_ddslick:function(){var t=e("select.ddslick");t.length>0&&t.each((function(){var t=e(this).attr("name"),a=e(this).attr("id");e("#"+a).ddslick({width:"100%",imagePosition:"left",onSelected:function(i){e("#"+a+" .dd-selected-value").prop("name",t)}})}))},TM_sliderRange:function(){var t=e(".slider-range");t.length>0&&t.each((function(){var t=e(this).attr("id"),a=e(this).data("target");e("#"+a).slider({range:"max",min:2001,max:2016,value:2010,slide:function(a,i){e("#"+t).val(i.value)}}),e("#"+t).val(e("#"+a).slider("value"))}))},TM_loadBSParentModal:function(){e.ajax({url:"ajax-load/bootstrap-parent-modal.html",success:function(e){o.append(e)},dataType:"html"})},TM_demoSwitcher:function(){e("#style-switcher").length},TM_preLoaderClickDisable:function(){var t=e("#preloader");t.children("#disable-preloader").on("click",(function(e){return t.fadeOut(),!1}))},TM_preLoaderOnLoad:function(){var t=e("#preloader");t.length>0&&t.delay(200).fadeOut("slow")},TM_platformDetect:function(){THEMEMASCOT.isMobile.any()?n.addClass("mobile"):n.addClass("no-mobile")},TM_onLoadPopupPromoBox:function(){var t=e(".on-pageload-popup-promobox");t.length>0&&t.each((function(){var t=e(this),a=t.data("target"),i=t.data("timeout"),n=t.data("delay");if(n=n?Number(n)+2500:2500,t.hasClass("cookie-enabled")){var o=e.cookie(a);if(o&&"enabled"===o)return!0}else e.removeCookie(a);setTimeout((function(){e.magnificPopup.open({items:{src:a},type:"inline",mainClass:"mfp-no-margins mfp-fade",closeBtnInside:!1,fixedContentPos:!0,removalDelay:500,callbacks:{afterClose:function(){t.hasClass("cookie-enabled")&&e.cookie(a,"enabled")}}},0)}),Number(n));if(""!==i)setTimeout((function(){e.magnificPopup.close()}),Number(n)+Number(i))}))},TM_hashForwarding:function(){if(window.location.hash){var t=e(window.location.hash).offset().top;e("html, body").animate({scrollTop:t})}},TM_customDataAttributes:function(){e("[data-bg-color]").each((function(){e(this).css("cssText","background: "+e(this).data("bg-color")+" !important;")})),e("[data-bg-img]").each((function(){e(this).css("background-image","url("+e(this).data("bg-img")+")")})),e("[data-text-color]").each((function(){e(this).css("color",e(this).data("text-color"))})),e("[data-font-size]").each((function(){e(this).css("font-size",e(this).data("font-size"))})),e("[data-height]").each((function(){e(this).css("height",e(this).data("height"))})),e("[data-width]").each((function(){e(this).css("width",e(this).data("width"))})),e("[data-border]").each((function(){e(this).css("border",e(this).data("border"))})),e("[data-margin-top]").each((function(){e(this).css("margin-top",e(this).data("margin-top"))})),e("[data-margin-right]").each((function(){e(this).css("margin-right",e(this).data("margin-right"))})),e("[data-margin-bottom]").each((function(){e(this).css("margin-bottom",e(this).data("margin-bottom"))})),e("[data-margin-left]").each((function(){e(this).css("margin-left",e(this).data("margin-left"))}))},TM_parallaxBgInit:function(){!THEMEMASCOT.isMobile.any()&&i.width()>=800?e(".parallax").each((function(){var t=void 0===e(this).data("parallax-ratio")?"0.5":e(this).data("parallax-ratio");e(this).parallax("50%",t)})):e(".parallax").addClass("mobile-parallax")},TM_resizeFullscreen:function(){var t=i.height();e(".fullscreen, .revslider-fullscreen").height(t)},TM_magnificPopup_lightbox:function(){var t=e(".image-popup-lightbox");t.length>0&&t.magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-fade",image:{verticalFit:!0}});var a=e(".image-popup-vertical-fit");a.length>0&&a.magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0}});var n=e(".image-popup-fit-width");n.length>0&&n.magnificPopup({type:"image",closeOnContentClick:!0,image:{verticalFit:!1}});var o=e(".image-popup-no-margins");o.length>0&&o.magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}});var l=e(".popup-gallery");l.length>0&&l.magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")+"<small>by Marsel Van Oosten</small>"}}});var r=e(".zoom-gallery");r.length>0&&r.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(e){return e.el.attr("title")+' &middot; <a class="image-source-link" href="'+e.el.attr("data-source")+'" target="_blank">image source</a>'}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}});var s=e(".popup-youtube, .popup-vimeo, .popup-gmaps");s.length>0&&s.magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});var d=e(".popup-with-zoom-anim");d.length>0&&d.magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"});var c=e(".popup-with-move-anim");c.length>0&&c.magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-slide-bottom"});var u=e(".ajaxload-popup");u.length>0&&u.magnificPopup({type:"ajax",alignTop:!0,overflowY:"scroll",callbacks:{parseAjax:function(e){THEMEMASCOT.initialize.TM_datePicker(),THEMEMASCOT.initialize.TM_sliderRange(),THEMEMASCOT.initialize.TM_ddslick()}}});var h=e(".form-ajax-load");h.length>0&&h.magnificPopup({type:"ajax"});var m=e(".popup-with-form");m.length>0&&m.magnificPopup({type:"inline",preloader:!1,focus:"#name",mainClass:"mfp-no-margins mfp-fade",closeBtnInside:!1,fixedContentPos:!0,callbacks:{beforeOpen:function(){i.width()<700?this.st.focus=!1:this.st.focus="#name"}}});var f=e('[data-lightbox="ajax"]');f.length>0&&f.magnificPopup({type:"ajax",closeBtnInside:!1,callbacks:{ajaxContentAdded:function(e){},open:function(){},close:function(){}}});var p=e('[data-lightbox="image"]');p.length>0&&p.magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0}});var g=e('[data-lightbox="gallery"]');g.length>0&&g.each((function(){e(this).magnificPopup({delegate:'a[data-lightbox="gallery-item"]',type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})}));var T=e('[data-lightbox="iframe"]');T.length>0&&T.magnificPopup({disableOn:600,type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1});var v=e('[data-lightbox="inline"]');v.length>0&&v.magnificPopup({type:"inline",mainClass:"mfp-no-margins mfp-zoom-in",closeBtnInside:!1,fixedContentPos:!0})},TM_prettyPhoto_lightbox:function(){var t=e("a[data-rel^='prettyPhoto']");t.length>0&&t.prettyPhoto({hook:"data-rel",animation_speed:"normal",theme:"light_square",slideshow:3e3,autoplay_slideshow:!1,social_tools:!1})},TM_nivolightbox:function(){var t=e("a[data-lightbox-gallery]");t.length>0&&t.nivoLightbox({effect:"fadeScale",afterShowLightbox:function(){var t=e(".nivo-lightbox-content > iframe");if(t.length>0){var a=t.attr("src");t.attr("src",a+"?autoplay=1")}}})},TM_wow:function(){new WOW({mobile:!1}).init()},TM_fitVids:function(){},TM_YTPlayer:function(){var t=e(".player");t.length>0&&t.mb_YTPlayer()},TM_equalHeightDivs:function(){var t=e(".equal-height");t.length>0&&(t.children("div").css("min-height","auto"),t.equalHeights());var a=e(".equal-height-inner");a.length>0&&(a.children("div").css("min-height","auto"),a.children("div").children("div").css("min-height","auto"),a.equalHeights(),a.children("div").each((function(){e(this).children("div").css("min-height",e(this).css("min-height"))})));var i=e(".equal-height-pricing-table");i.length>0&&(i.children("div").css("min-height","auto"),i.children("div").children("div").css("min-height","auto"),i.equalHeights(),i.children("div").each((function(){e(this).children("div").css("min-height",e(this).css("min-height"))})))}},THEMEMASCOT.header={init:function(){setTimeout((function(){THEMEMASCOT.header.TM_fullscreenMenu(),THEMEMASCOT.header.TM_sidePanelReveal(),THEMEMASCOT.header.TM_scroolToTopOnClick(),THEMEMASCOT.header.TM_scrollToFixed(),THEMEMASCOT.header.TM_topnavAnimate(),THEMEMASCOT.header.TM_scrolltoTarget(),THEMEMASCOT.header.TM_navLocalScorll(),THEMEMASCOT.header.TM_menuCollapseOnClick(),THEMEMASCOT.header.TM_homeParallaxFadeEffect(),THEMEMASCOT.header.TM_topsearch_toggle()}),0)},TM_fullscreenMenu:function(){var t=e(".menu-full-page .fullpage-nav-toggle");t.length>0&&t.menufullpage()},TM_sidePanelReveal:function(){e(".side-panel-trigger").on("click",(function(e){return o.toggleClass("side-panel-open"),THEMEMASCOT.isMobile.any()&&o.toggleClass("overflow-hidden"),!1})),e(".has-side-panel .body-overlay").on("click",(function(e){return o.toggleClass("side-panel-open"),!1})),e(".side-panel-nav .nav .tree-toggler").on("click",(function(t){e(this).parent().children("ul.tree").toggle(300)}))},TM_scroolToTop:function(){i.scrollTop()>600?e(".scrollToTop").fadeIn():e(".scrollToTop").fadeOut()},TM_scroolToTopOnClick:function(){a.on("click",".scrollToTop",(function(t){return e("html, body").animate({scrollTop:0},800),!1}))},TM_menuCollapseOnClick:function(){t.on("click",".onepage-nav a",(function(t){e(".showhide").trigger("click")}))},TM_activateMenuItemOnReach:function(){var t=e(".onepage-nav"),a=i.scrollTop()+2,n=t.outerHeight();l.each((function(){var i=e(this).offset().top-n-80,o=i+e(this).outerHeight();a>=i&&a<=o&&(t.find("a").parent().removeClass("current").removeClass("active"),l.removeClass("current").removeClass("active"),t.find('a[href="#'+e(this).attr("id")+'"]').parent().addClass("current").addClass("active"))}))},TM_scrolltoTarget:function(){e(".smooth-scroll-to-target, .fullscreen-onepage-nav a").on("click",(function(t){t.preventDefault();var a=e(this),i=e(".header .header-nav"),n=0;n=i[0]?i.outerHeight(!0):0,o.hasClass("vertical-nav")&&(n=0);var l=e(a.attr("href")).offset().top-n;e("html, body").stop().animate({scrollTop:l},1500,"easeInOutExpo")}))},TM_navLocalScorll:function(){var t=e("#menuzord .menuzord-menu, #menuzord-left #menuzord-right .menuzord-menu");t.length>0&&t.localScroll({target:"body",duration:800,offset:-60,easing:"easeInOutExpo"});var a=e("#menuzord-side-panel .menuzord-menu, #menuzord-verticalnav .menuzord-menu, #fullpage-nav");a.length>0&&a.localScroll({target:"body",duration:800,offset:0,easing:"easeInOutExpo"})},TM_scrollToFixed:function(){e(".navbar-scrolltofixed").scrollToFixed(),e(".scrolltofixed").scrollToFixed({marginTop:e(".header .header-nav").outerHeight(!0)+10,limit:function(){return e("#footer").offset().top-e(this).outerHeight(!0)}}),e("#sidebar").scrollToFixed({marginTop:e(".header .header-nav").outerHeight()+20,limit:function(){return e("#footer").offset().top-e("#sidebar").outerHeight()-20}})},TM_menuzord:function(){var t=e("#menuzord");t.length>0&&t.menuzord({align:"left",effect:"slide",animation:"none",indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});var a=e("#menuzord-right");a.length>0&&a.menuzord({align:"right",effect:"slide",animation:"none",indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});var i=e("#menuzord-left");i.length>0&&i.menuzord({align:"left",effect:"slide",animation:"none",indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});var n=e("#menuzord-side-panel");n.length>0&&n.menuzord({align:"right",effect:"slide",animation:"none",indicatorFirstLevel:"",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});var o=e("#menuzord-verticalnav");o.length>0&&o.menuzord({align:"right",effect:"slide",animation:"none",indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"})},TM_topnavAnimate:function(){i.scrollTop()>50?e(".navbar-sticky-animated").removeClass("animated-active"):e(".navbar-sticky-animated").addClass("animated-active"),i.scrollTop()>50?e(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").removeClass("add-padding"):e(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").addClass("add-padding")},TM_homeParallaxFadeEffect:function(){if(i.width()>=1200){var t=i.scrollTop();e(".content-fade-effect .home-content .home-text").css("padding-top",.061*t+"%").css("opacity",1-.0012*t)}},TM_topsearch_toggle:function(){a.on("click","#top-search-toggle",(function(t){return t.preventDefault(),e(".search-form-wrapper.toggle").toggleClass("active"),!1}))}},THEMEMASCOT.widget={init:function(){setTimeout((function(){THEMEMASCOT.widget.TM_shopClickEvents(),THEMEMASCOT.widget.TM_fcCalender(),THEMEMASCOT.widget.TM_verticalTimeline(),THEMEMASCOT.widget.TM_verticalMasonryTimeline(),THEMEMASCOT.widget.TM_masonryIsotop(),THEMEMASCOT.widget.TM_pieChart(),THEMEMASCOT.widget.TM_progressBar(),THEMEMASCOT.widget.TM_funfact(),THEMEMASCOT.widget.TM_instagramFeed(),THEMEMASCOT.widget.TM_jflickrfeed(),THEMEMASCOT.widget.TM_accordion_toggles(),THEMEMASCOT.widget.TM_tooltip()}),0)},TM_shopClickEvents:function(){a.on("click",".quantity .plus",(function(t){var a=parseInt(e(this).parent().children(".qty").val(),10);return isNaN(a)||e(this).parent().children(".qty").val(a+1),!1})),a.on("click",".quantity .minus",(function(t){var a=parseInt(e(this).parent().children(".qty").val(),10);return!isNaN(a)&&a>0&&e(this).parent().children(".qty").val(a-1),!1})),a.on("click","#checkbox-ship-to-different-address",(function(t){e("#checkout-shipping-address").toggle(this.checked)}))},TM_fcCalender:function(){if("undefined"!=typeof calendarEvents){var t=e("#full-event-calendar");t.length>0&&t.fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},defaultDate:"2018-01-12",selectable:!0,selectHelper:!0,select:function(t,a){var i,n=prompt("Event Title:");n&&(i={title:n,start:t,end:a},e("#calendar").fullCalendar("renderEvent",i,!0)),e("#calendar").fullCalendar("unselect")},editable:!0,eventLimit:!0,events:calendarEvents})}},TM_verticalTimeline:function(){var t=e(".cd-timeline-block");function a(t,a){t.each((function(){e(this).offset().top<=i.scrollTop()+i.height()*a&&e(this).find(".cd-timeline-img").hasClass("is-hidden")&&e(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")}))}t.length>0&&(!function(t,a){t.each((function(){e(this).offset().top>i.scrollTop()+i.height()*a&&e(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")}))}(t,.8),i.on("scroll",(function(){window.requestAnimationFrame?window.requestAnimationFrame((function(){a(t,.8)})):setTimeout((function(){a(t,.8)}),100)})))},TM_verticalMasonryTimeline:function(){var t=e(".vertical-masonry-timeline");function a(){t.children(".each-masonry-item").each((function(t,a){var i=e(this),n=e(this).prev(),o=parseInt(i.css("top"),10)-parseInt(n.css("top"),10),l=0;o&&o<=87&&(l=87-o,i.find(".timeline-post-format").animate({top:l},300)),0===e(this).position().left?(e(this).removeClass("item-right"),e(this).addClass("item-left")):(e(this).removeClass("item-left"),e(this).addClass("item-right"))}))}t.length>0&&t.isotope({itemSelector:".each-masonry-item",sortBy:"original-order",layoutMode:"masonry",resizable:!1}),t.length>0&&(a(),i.resize((function(){a()})))},TM_masonryIsotop:function(){r.length>0&&r.imagesLoaded((function(){r.hasClass("masonry")?r.isotope({itemSelector:".gallery-item",layoutMode:"masonry",masonry:{columnWidth:".gallery-item-sizer"},filter:"*"}):r.isotope({itemSelector:".gallery-item",layoutMode:"fitRows",filter:"*"})})),a.on("click",s,(function(t){e(s).removeClass("active"),e(this).addClass("active");var a=e(this).data("filter");return r.hasClass("masonry")?r.isotope({itemSelector:".gallery-item",layoutMode:"masonry",masonry:{columnWidth:".gallery-item-sizer"},filter:a}):r.isotope({itemSelector:".gallery-item",layoutMode:"fitRows",filter:a}),!1})),THEMEMASCOT.slider.TM_flexslider()},TM_portfolioFlexSliderGalleryPopUpInit:function(){var t=r.find(".slides");t.length>0&&t.each((function(){for(var t=e(this).find("li > a"),a=[],i=0;i<t.length;i++)a.push({src:e(t[i]).attr("href"),title:e(t[i]).attr("title")});e(this).parent().parent().parent().find(".icons-holder").magnificPopup({items:a,type:"image",gallery:{enabled:!0}})}))},TM_isotopeGridRearrange:function(){r.hasClass("masonry")?r.isotope({itemSelector:".gallery-item",layoutMode:"masonry"}):r.isotope({itemSelector:".gallery-item",layoutMode:"fitRows"})},TM_isotopeGridShuffle:function(){r.isotope("shuffle")},TM_countDownTimer:function(){var t=e("#clock-count-down"),a=t.data("endingdate");t.length>0&&t.countdown(a,(function(t){e(this).html(t.strftime('<ul class="countdown-timer"><li>%D <span>Days</span></li><li>%H <span>Hours</span></li><li>%M <span>Minutes</span></li><li>%S <span>Seconds</span></li></ul>'))}))},TM_pieChart:function(){var t=e(".piechart");t.length>0&&(t.appear(),a.on("appear",".piechart",(function(){var t=e(this);if(!t.hasClass("appeared")){var a=t.data("barcolor"),i=t.data("trackcolor"),n=t.data("linewidth"),o=t.data("boxwidth");t.css("width",o),t.easyPieChart({animate:3e3,barColor:a,trackColor:i,easing:"easeOutBounce",lineWidth:n,size:o,lineCap:"square",scaleColor:!1,onStep:function(t,a,i){e(this.el).find("span").text(Math.round(i))}}),t.addClass("appeared")}})))},TM_progressBar:function(){var t=e(".progress-bar");t.length>0&&(t.appear(),a.on("appear",".progress-bar",(function(){var t=e(this);if(!t.hasClass("appeared")){var a=t.data("percent"),i=void 0===t.data("unit")?"%":t.data("unit"),n=t.data("barcolor");t.append('<span class="percent">'+a+i+"</span>").css("background-color",n).css("width",a+"%").addClass("appeared")}})))},TM_funfact:function(){var t=e(".animate-number");t.length>0&&(t.appear(),a.on("appear",".animate-number",(function(){t.each((function(){var t=e(this);t.hasClass("appeared")||t.animateNumbers(t.attr("data-value"),!0,parseInt(t.attr("data-animation-duration"),10)).addClass("appeared")}))})))},TM_instagramFeed:function(){var t=e(".instagram-feed");t.length>0&&t.each((function(){var t=e(this);new Instafeed({target:t.attr("id"),get:"user",userId:t.data("userid"),accessToken:t.data("accesstoken"),resolution:t.data("resolution"),limit:t.data("limit"),template:'<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="link-out" target="_blank"><i class="fa fa-link"></i></a></figure></div>',after:function(){}}).run()}));var a=e(".instagram-feed-carousel");a.length>0&&a.each((function(){var t=e(this);new Instafeed({target:t.attr("id"),get:"user",userId:t.data("userid"),accessToken:t.data("accesstoken"),resolution:t.data("resolution"),limit:t.data("limit"),template:'<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="link-out" target="_blank"><i class="fa fa-link"></i></a></figure></div>',after:function(){t.owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:4e3,loop:!0,margin:15,dots:!0,nav:!1,responsive:{0:{items:2},768:{items:4},1e3:{items:5}}})}}).run()}))},TM_jflickrfeed:function(){var t=e(".flickr-widget .flickr-feed, .jflickrfeed");t.length>0&&t.each((function(){var t=e(this);t.jflickrfeed({limit:9,qstrings:{id:t.data("userid")},itemTemplate:'<a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}">  </a>'})}))},TM_accordion_toggles:function(){var t=e(".panel-group .collapse");t.on("show.bs.collapse",(function(t){e(this).closest(".panel-group").find("[href='#"+e(this).attr("id")+"']").addClass("active")})),t.on("hide.bs.collapse",(function(t){e(this).closest(".panel-group").find("[href='#"+e(this).attr("id")+"']").removeClass("active")}))},TM_tooltip:function(){var t=e('[data-toggle="tooltip"]');t.length>0&&t.tooltip()},TM_twittie:function(){var t=e(".twitter-feed"),a=e(".twitter-feed-carousel");t.length>0&&t.twittie({username:t.data("username"),dateFormat:"%b. %d, %Y",template:'{{tweet}} <div class="date">{{date}}</div>',count:void 0===t.data("count")?4:t.data("count"),loadingText:"Loading!"}),a.length>0&&a.twittie({username:a.data("username"),dateFormat:"%b. %d, %Y",template:'{{tweet}} <div class="date">{{date}}</div>',count:void 0===a.data("count")?4:a.data("count"),loadingText:"Loading!"},(function(){a.find("ul").owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:2e3,loop:!0,items:1,dots:!0,nav:!1})}))}},THEMEMASCOT.slider={init:function(){setTimeout((function(){THEMEMASCOT.slider.TM_typedAnimation(),THEMEMASCOT.slider.TM_flexslider(),THEMEMASCOT.slider.TM_owlCarousel(),THEMEMASCOT.slider.TM_maximageSlider(),THEMEMASCOT.slider.TM_bxslider(),THEMEMASCOT.slider.TM_beforeAfterSlider()}),0)},TM_typedAnimation:function(){var t=e(".typed-text-carousel");t.length>0&&t.each((function(){var t=e(this).find("span:first-child").text(),a=e(this).find("span:nth-child(2)").text(),i=e(this).find("span:nth-child(3)").text(),n="";e(this);a.trim()&&i.trim()||(n=[t]),!i.trim()&&a.length&&(n=[t,a]),t.length&&a.length&&i.length&&(n=[t,a,i]);var o=e(this).data("speed"),l=e(this).data("back_delay"),r=e(this).data("loop");e(this).typed({strings:n,typeSpeed:o,backSpeed:0,backDelay:l,cursorChar:"|",loop:r,contentType:"text",loopCount:!1})}))},TM_flexslider:function(){var t=e(".flexslider-wrapper").find(".flexslider");t.length>0&&(THEMEMASCOT.widget.TM_portfolioFlexSliderGalleryPopUpInit(),t.each((function(){var t=e(this),a=void 0===t.parent().data("direction")?"horizontal":t.parent().data("direction"),i=void 0===t.parent().data("controlnav")||t.parent().data("controlnav"),n=void 0===t.parent().data("directionnav")||t.parent().data("directionnav");t.flexslider({rtl:THEMEMASCOT.isRTL.check(),selector:".slides > li",animation:"slide",easing:"swing",direction:a,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,pauseOnHover:!1,controlNav:i,directionNav:n,start:function(e){imagesLoaded(r,(function(){setTimeout((function(){d.trigger("click")}),500)})),THEMEMASCOT.initialize.TM_magnificPopup_lightbox(),THEMEMASCOT.initialize.TM_prettyPhoto_lightbox(),THEMEMASCOT.initialize.TM_nivolightbox()},after:function(){}})})))},TM_owlCarousel:function(){var t=e(".owl-carousel-1col, .text-carousel, .image-carousel, .fullwidth-carousel");t.length>0&&(t.hasClass("owl-carousel")||t.addClass("owl-carousel owl-theme"),t.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:1,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']})})));var a=e(".owl-carousel-2col");a.length>0&&(a.hasClass("owl-carousel")||a.addClass("owl-carousel owl-theme"),a.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:2,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},480:{items:1,center:!1},600:{items:1,center:!1},750:{items:2,center:!1},960:{items:2},1170:{items:2},1300:{items:2}}})})));var i=e(".owl-carousel-3col");i.length>0&&(i.hasClass("owl-carousel")||i.addClass("owl-carousel owl-theme"),i.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:3,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},480:{items:1,center:!1},600:{items:1,center:!1},750:{items:2,center:!1},960:{items:2},1170:{items:3},1300:{items:3}}})})));var n=e(".owl-carousel-4col");n.length>0&&(n.hasClass("owl-carousel")||n.addClass("owl-carousel owl-theme"),n.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:4,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!0},480:{items:1,center:!1},600:{items:3,center:!1},750:{items:3,center:!1},960:{items:3},1170:{items:4},1300:{items:4}}})})));var o=e(".owl-carousel-5col");o.length>0&&(o.hasClass("owl-carousel")||o.addClass("owl-carousel owl-theme"),o.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:5,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},480:{items:1,center:!1},600:{items:2,center:!1},750:{items:3,center:!1},960:{items:4},1170:{items:5},1300:{items:5}}})})));var l=e(".owl-carousel-6col");l.length>0&&(l.hasClass("owl-carousel")||l.addClass("owl-carousel owl-theme"),l.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:6,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},480:{items:1,center:!1},600:{items:2,center:!1},750:{items:3,center:!1},960:{items:4},1170:{items:6},1300:{items:6}}})})));var r=e(".owl-carousel-7col");r.length>0&&(r.hasClass("owl-carousel")||r.addClass("owl-carousel owl-theme"),r.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:7,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},600:{items:2,center:!1},750:{items:3,center:!1},960:{items:4},1170:{items:7},1300:{items:7}}})})));var s=e(".owl-carousel-8col");s.length>0&&(s.hasClass("owl-carousel")||s.addClass("owl-carousel owl-theme"),s.each((function(){var t=void 0!==e(this).data("dots")&&e(this).data("dots"),a=void 0!==e(this).data("nav")&&e(this).data("nav"),i=void 0===e(this).data("duration")?4e3:e(this).data("duration");e(this).owlCarousel({rtl:THEMEMASCOT.isRTL.check(),autoplay:!0,autoplayTimeout:i,loop:!0,items:8,margin:15,dots:t,nav:a,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsive:{0:{items:1,center:!1},600:{items:2,center:!1},750:{items:3,center:!1},960:{items:5},1170:{items:8},1300:{items:8}}})})))},TM_maximageSlider:function(){var t=e("#maximage");t.length>0&&t.each((function(){e(this).maximage({cycleOptions:{fx:"fade",speed:1500,prev:".img-prev",next:".img-next"}})}))},TM_bxslider:function(){var t=e(".bxslider");t.length>0&&t.each((function(){var t=e(this);t.bxSlider({mode:"vertical",minSlides:void 0===t.data("minslides")?2:t.data("minslides"),slideMargin:20,pager:!1,prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>'})}))},TM_beforeAfterSlider:function(){var t=e(".twentytwenty-container");t.length>0&&t.each((function(){var t=e(this),a=void 0===t.data("offset-percent")?.5:t.data("offset-percent"),i=void 0===t.data("orientation")?"horizontal":t.data("orientation"),n=void 0===t.data("before-label")?"Before":t.data("before-label"),o=void 0===t.data("after-label")?"After":t.data("after-label"),l=void 0===t.data("no-overlay")||t.data("no-overlay");t.twentytwenty({default_offset_pct:a,orientation:i,before_label:n,after_label:o,no_overlay:l})}))}},THEMEMASCOT.documentOnReady={init:function(){THEMEMASCOT.initialize.init(),THEMEMASCOT.header.init(),THEMEMASCOT.slider.init(),THEMEMASCOT.widget.init(),THEMEMASCOT.windowOnscroll.init()}},THEMEMASCOT.windowOnLoad={init:function(){setTimeout((function(){THEMEMASCOT.initialize.TM_wow(),THEMEMASCOT.widget.TM_twittie(),THEMEMASCOT.initialize.TM_magnificPopup_lightbox(),THEMEMASCOT.initialize.TM_preLoaderOnLoad(),THEMEMASCOT.initialize.TM_hashForwarding(),THEMEMASCOT.initialize.TM_parallaxBgInit()}),0);i.trigger("scroll"),i.trigger("resize")}},THEMEMASCOT.windowOnscroll={init:function(){i.on("scroll",(function(){THEMEMASCOT.header.TM_scroolToTop(),THEMEMASCOT.header.TM_activateMenuItemOnReach(),THEMEMASCOT.header.TM_topnavAnimate()}))}},THEMEMASCOT.windowOnResize={init:function(){setTimeout((function(){THEMEMASCOT.initialize.TM_equalHeightDivs(),THEMEMASCOT.initialize.TM_resizeFullscreen()}),400)}},THEMEMASCOT.header.TM_menuzord(),t.ready(THEMEMASCOT.documentOnReady.init),i.on("load",THEMEMASCOT.windowOnLoad.init),i.on("resize",THEMEMASCOT.windowOnResize.init),THEMEMASCOT.initialize.TM_preLoaderClickDisable()}(jQuery);