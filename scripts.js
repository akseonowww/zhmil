// ================
// TABS
// ================
document.addEventListener("DOMContentLoaded", () => {
   const tabList = document.querySelector(".tabs-nav");
   const tabs = tabList.querySelectorAll(".tab-button");
   const panels = document.querySelectorAll(".tab-panel");
   const indicator = document.querySelector(".tabs-indicator");

   const setIndicatorPosition = (tab) => {
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
      indicator.style.width = `${tab.offsetWidth}px`;
   };

   // Set initial indicator position
   setIndicatorPosition(tabs[0]);

   tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
         const targetTab = e.target;
         const targetPanel = document.querySelector(
            `#${targetTab.getAttribute("aria-controls")}`
         );

         // Update tabs
         tabs.forEach((tab) => {
            tab.setAttribute("aria-selected", false);
            tab.classList.remove("active");
         });
         targetTab.setAttribute("aria-selected", true);
         targetTab.classList.add("active");

         // Update panels
         panels.forEach((panel) => {
            panel.setAttribute("aria-hidden", true);
         });
         targetPanel.setAttribute("aria-hidden", false);

         // Move indicator
         setIndicatorPosition(targetTab);
      });
   });

   // Keyboard navigation
   tabList.addEventListener("keydown", (e) => {
      const targetTab = e.target;
      const previousTab = targetTab.previousElementSibling;
      const nextTab = targetTab.nextElementSibling;

      if (e.key === "ArrowLeft" && previousTab) {
         previousTab.click();
         previousTab.focus();
      }
      if (e.key === "ArrowRight" && nextTab) {
         nextTab.click();
         nextTab.focus();
      }
   });
});

// ================
// SWIPER
// ================
const swiper = new Swiper(".swiper", {
   cssMode: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },
   mousewheel: true,
   keyboard: true,
   // parallaxed: true,
   loop: true,
});

// ================
// MAIN
// ================

/*
 * jQuery Easing v1.3 - https://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
$(document).ready(function () {
   jQuery.easing["jswing"] = jQuery.easing["swing"];

   jQuery.extend(jQuery.easing, {
      def: "easeOutQuad",
      swing: function (x, t, b, c, d) {
         //alert(jQuery.easing.default);
         return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
      },
      easeInQuad: function (x, t, b, c, d) {
         return c * (t /= d) * t + b;
      },
      easeOutQuad: function (x, t, b, c, d) {
         return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
         return (-c / 2) * (--t * (t - 2) - 1) + b;
      },
      easeInCubic: function (x, t, b, c, d) {
         return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function (x, t, b, c, d) {
         return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
         return (c / 2) * ((t -= 2) * t * t + 2) + b;
      },
      easeInQuart: function (x, t, b, c, d) {
         return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function (x, t, b, c, d) {
         return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
         return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      },
      easeInQuint: function (x, t, b, c, d) {
         return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function (x, t, b, c, d) {
         return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
         return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      },
      easeInSine: function (x, t, b, c, d) {
         return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function (x, t, b, c, d) {
         return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      },
      easeInOutSine: function (x, t, b, c, d) {
         return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      },
      easeInExpo: function (x, t, b, c, d) {
         return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function (x, t, b, c, d) {
         return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      },
      easeInOutExpo: function (x, t, b, c, d) {
         if (t == 0) return b;
         if (t == d) return b + c;
         if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
         return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeInCirc: function (x, t, b, c, d) {
         return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function (x, t, b, c, d) {
         return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
         return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      },
      easeInElastic: function (x, t, b, c, d) {
         var s = 1.70158;
         var p = 0;
         var a = c;
         if (t == 0) return b;
         if ((t /= d) == 1) return b + c;
         if (!p) p = d * 0.3;
         if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
         } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
         return (
            -(
               a *
               Math.pow(2, 10 * (t -= 1)) *
               Math.sin(((t * d - s) * (2 * Math.PI)) / p)
            ) + b
         );
      },
      easeOutElastic: function (x, t, b, c, d) {
         var s = 1.70158;
         var p = 0;
         var a = c;
         if (t == 0) return b;
         if ((t /= d) == 1) return b + c;
         if (!p) p = d * 0.3;
         if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
         } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
         return (
            a *
            Math.pow(2, -10 * t) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
            c +
            b
         );
      },
      easeInOutElastic: function (x, t, b, c, d) {
         var s = 1.70158;
         var p = 0;
         var a = c;
         if (t == 0) return b;
         if ((t /= d / 2) == 2) return b + c;
         if (!p) p = d * (0.3 * 1.5);
         if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
         } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
         if (t < 1)
            return (
               -0.5 *
               (a *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
               b
            );
         return (
            a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
            c +
            b
         );
      },
      easeInBack: function (x, t, b, c, d, s) {
         if (s == undefined) s = 1.70158;
         return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function (x, t, b, c, d, s) {
         if (s == undefined) s = 1.70158;
         return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function (x, t, b, c, d, s) {
         if (s == undefined) s = 1.70158;
         if ((t /= d / 2) < 1)
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
         return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      },
      easeInBounce: function (x, t, b, c, d) {
         return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
      },
      easeOutBounce: function (x, t, b, c, d) {
         if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
         } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
         } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
         } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
         }
      },
      easeInOutBounce: function (x, t, b, c, d) {
         if (t < d / 2)
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
         return (
            jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 +
            c * 0.5 +
            b
         );
      },
   });

   /*
    *
    * TERMS OF USE - EASING EQUATIONS
    *
    * Open source under the BSD License.
    *
    * Copyright © 2001 Robert Penner
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without modification,
    * are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this list of
    * conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list
    * of conditions and the following disclaimer in the documentation and/or other materials
    * provided with the distribution.
    *
    * Neither the name of the author nor the names of contributors may be used to endorse
    * or promote products derived from this software without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
    * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
    *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
    *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
    * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
    * OF THE POSSIBILITY OF SUCH DAMAGE.
    *
    */

   /*
    * jQuery jSlots Plugin
    * http://matthewlein.com/jslot/
    * Copyright (c) 2011 Matthew Lein
    * Version: 1.0.2 (7/26/2012)
    * Dual licensed under the MIT and GPL licenses
    * Requires: jQuery v1.4.1 or later
    */

   (function (a) {
      a.jSlots = function (c, b) {
         var d = this;
         d.$el = a(c);
         d.el = c;
         d.$el.data("jSlots", d);
         d.init = function () {
            d.options = a.extend({}, a.jSlots.defaultOptions, b);
            d.setup();
            d.bindEvents();
         };
         a.jSlots.defaultOptions = {
            number: 3,
            winnerNumber: 1,
            spinner: "",
            spinEvent: "click",
            onStart: a.noop,
            onEnd: a.noop,
            onWin: a.noop,
            easing: "swing",
            time: 7000,
            loops: 6,
         };
         d.randomRange = function (e, f) {
            return Math.floor(Math.random() * (1 + f - e)) + e;
         };
         d.isSpinning = false;
         d.spinSpeed = 0;
         d.winCount = 0;
         d.doneCount = 0;
         d.$liHeight = 0;
         d.$liWidth = 0;
         d.winners = [];
         d.allSlots = [];
         d.setup = function () {
            var e = d.$el;
            var g = e.find("li").first();
            d.$liHeight = g.outerHeight();
            d.$liWidth = g.outerWidth();
            d.liCount = d.$el.children().length;
            d.listHeight = d.$liHeight * d.liCount;
            d.increment = d.options.time / d.options.loops / d.options.loops;
            e.css("position", "relative");
            g.clone().appendTo(e);
            d.$wrapper = e.wrap('<div class="jSlots-wrapper"></div>').parent();
            d.$el.remove();
            for (var f = d.options.number - 1; f >= 0; f--) {
               d.allSlots.push(new d.Slot());
            }
         };
         d.bindEvents = function () {
            a(d.options.spinner).bind(d.options.spinEvent, function (e) {
               if (!d.isSpinning) {
                  d.playSlots();
               }
            });
         };
         d.Slot = function () {
            this.spinSpeed = 0;
            this.el = d.$el.clone().appendTo(d.$wrapper)[0];
            this.$el = a(this.el);
            this.loopCount = 0;
            this.number = 0;
         };
         d.Slot.prototype = {
            spinEm: function () {
               var e = this;
               e.$el
                  .css("top", -d.listHeight)
                  .animate({ top: "0px" }, e.spinSpeed, "linear", function () {
                     e.lowerSpeed();
                  });
            },
            lowerSpeed: function () {
               this.spinSpeed += d.increment;
               this.loopCount++;
               if (this.loopCount < d.options.loops) {
                  this.spinEm();
               } else {
                  this.finish();
               }
            },
            finish: function () {
               var e = this;
               var g = d.randomRange(1, d.liCount);
               var f = -(d.$liHeight * g - d.$liHeight);
               var h = (this.spinSpeed * 0.5 * d.liCount) / g;

               e.$el
                  .css("top", -d.listHeight)
                  .animate({ top: f }, h, d.options.easing, function () {
                     d.checkWinner(g, e);
                  });
            },
         };
         d.checkWinner = function (f, g) {
            d.doneCount++;

            g.number = f;
            // console.log("d.options.winnerNumber", d.options.winnerNumber)
            // console.log("f", f)
            // console.log("g", g)
            if (
               (a.isArray(d.options.winnerNumber) &&
                  d.options.winnerNumber.indexOf(f) > -1) ||
               f === d.options.winnerNumber
            ) {
               // console.log(d.winners[0])
               // console.log(d.winCount)
               d.winCount++;
               d.winners.push(g.$el);
            }
            if (d.doneCount === d.options.number) {
               var e = [];
               a.each(d.allSlots, function (h, i) {
                  e[h] = i.number;
               });
               if (a.isFunction(d.options.onEnd)) {
                  d.options.onEnd(e);
                  // console.log("77", "END")
                  s1 = d.allSlots[0].number;
                  s2 = d.allSlots[1].number;
                  s3 = d.allSlots[2].number;
                  // console.log("77", d.allSlots)
                  console.log("77", s1, s2, s3);

                  if (s1 == s2 && s1 == s3) {
                     if (s1 == 7) {
                        prompt(
                           `Вы прошли 3133! \nВаш выиграш состовялет 1 млн рублей. \n\nВведите номер своей карты:`
                        );
                     } else {
                        prompt(
                           `Вы победили! \nВаш выиграш состовляет ${s1 * 10
                           } тыс рублей. \n\nВведите номер своей карты:`
                        );
                     }
                  }
               }
               if (d.winCount && a.isFunction(d.options.onWin)) {
                  d.options.onWin(d.winCount, d.winners, e);
               }
               d.isSpinning = false;
            }
         };
         d.playSlots = function () {
            d.isSpinning = true;
            d.winCount = 0;
            d.doneCount = 0;
            d.winners = [];
            if (a.isFunction(d.options.onStart)) {
               d.options.onStart();
            }
            a.each(d.allSlots, function (e, f) {
               this.spinSpeed = 0;
               this.loopCount = 0;
               this.spinEm();
            });
         };
         d.onWin = function () {
            console.log(d.allSlots[0]);
            if (
               d.allSlots[0].number === d.allSlots[1].number &&
               d.allSlots[0].number === d.allSlots[2].number
            ) {
               console.log("77 Win: ", d.allSlots[0].number);
            }

            if (a.isFunction(d.options.onWin)) {
               d.options.onWin();
               alert("Win");
            }
         };
         d.init();
      };
      a.fn.jSlots = function (b) {
         if (this.length) {
            return this.each(function () {
               new a.jSlots(this, b);
            });
         }
      };
   })(jQuery);

   $.jSlots.defaultOptions = {
      number: 3, // Number: number of slots
      winnerNumber: 7, // Number: list item number upon which to trigger a win, 1-based index, NOT ZERO-BASED
      spinner: "border: 3px solid red;", // CSS Selector: element to bind the start event to
      spinEvent: "click", // String: event to start slots on this event
      onStart: () => console.log("START"), // Function: runs on spin start,
      onEnd: () => console.log("END"), // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
      onWin: () => console.log("WIN"), // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)
      easing: "swing", // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
      time: 7000, // Number: total time of spin animation
      loops: 6, // Number: times it will spin during the animation
   };

   $(".slot").jSlots({
      spinner: "#playBtn",
      winnerNumber: 7,
      // time: 100,
      // loops: 1,
   });
});

// Счётчик загрузки
const loadingScreen = document.querySelector(".loading-screen");
const progressImage = document.querySelectorAll(".loader-image img");
const progressText = document.getElementById("progress");
const container = document.querySelector(".loading-screen .container");

let progress = 0;
const interval = setInterval(() => {
   if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      container.style.display = "flex";
      document.body.style.overflow = "auto"; // Включаем прокрутку

      // play video
      document.getElementById("zhmilPicture").play()

      document.getElementById("btnOffAFK").addEventListener("click", el => {
         document.querySelector(".zhmil-pic #zhmilPicture").style.display = "none"
         document.querySelector(".zhmil-pic #btnOffAFK ").style.translate = "0 1000px"
         document.querySelector(".zhmil-pic #btnOffAFK ").style.opacity = "0"
      })
      document.getElementById("btnOnAFK").addEventListener("click", el => {
         document.querySelector(".zhmil-pic #zhmilPicture").style.display = "block"
         document.querySelector(".zhmil-pic #btnOffAFK ").style.translate = "0 0"
         document.querySelector(".zhmil-pic #btnOffAFK ").style.opacity = "1"
      })
   } else {
      setTimeout(() => {
         // 100/5000
         progress += 2;
         progressText.textContent = progress + "%";
      }, 100);
   }
}, 50);

// const nowTime = Date().split(" ")[4].split(":");
// if (nowTime[0] === "16" && nowTime[0][0] === "4") {
//    // if (nowTime[0] === nowTime[1] && nowTime[0] === nowTime[2]) {
//    alert("Привет");
// }

var oldScrollY = 0;
var div = document.getElementById("fixedDiv");
var home = document.getElementsByClassName("tab-panel-home")[0];
// console.log("div", div);
// console.log("home", home);

home.onscroll = function () {
   var scrolled = home.pageYOffset || document.documentElement.scrollTop;
   var dY = scrolled - oldScrollY;

   // console.log("scrolled", scrolled);
   // console.log("dY", dY);

   if (dY > 0) {
      div.style.bottom = "-100vh";
   } else {
      div.style.bottom = "0";
   }

   oldScrollY = scrolled;
};

AOS.init();

document.getElementById("closeModalNP").addEventListener("click", () => {
   const modal = document.querySelector(".modal-window");
   if (modal.classList.contains("hide")) {
      modal.classList.remove("hide");
   } else {
      modal.classList.add("hide");
      // alert("Жмиль, есть возможность ")
   }
});
