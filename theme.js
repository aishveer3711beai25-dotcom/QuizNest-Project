/* =====================================================
   theme.js - QuizNest Light / Dark theme (shared by every page)

   - Light is the default for first-time visitors.
   - The choice is saved in localStorage ("quiznest-theme").
   - This file is loaded in <head> BEFORE style.css so the
     data-theme attribute is set before the first paint
     (no flash of the wrong theme).
   - It also adds the toggle button to the existing navbar
     (.header-actions) on every page.
===================================================== */
(function () {
  "use strict";

  var KEY = "quiznest-theme";
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY) === "dark" ? "dark" : "light"; }
    catch (e) { return "light"; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  // 1) Apply immediately (runs while <head> is still being parsed)
  apply(read());

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function sync() {
    var dark = current() === "dark";
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", dark ? "true" : "false");
      var label = dark ? "Switch to light mode" : "Switch to dark mode";
      buttons[i].setAttribute("aria-label", label);
      buttons[i].setAttribute("title", label);
    }
  }

  function toggle() {
    var next = current() === "dark" ? "light" : "dark";
    root.classList.add("theme-anim");
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked: still works for this page */ }
    sync();
    window.setTimeout(function () { root.classList.remove("theme-anim"); }, 350);
  }

  function makeButton(floating) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "theme-toggle" + (floating ? " theme-toggle--float" : "");
    b.innerHTML = '<i class="fa-solid fa-moon icon-moon" aria-hidden="true"></i>' +
                  '<i class="fa-solid fa-sun icon-sun" aria-hidden="true"></i>';
    b.addEventListener("click", toggle);
    return b;
  }

  // 2) Put the toggle in the navbar (and a floating one where there is no navbar)
  function ensure() {
    if (!document.body) return;

    var actions = document.querySelector(".header-actions");
    if (actions && !actions.querySelector(".theme-toggle")) {
      var menu = actions.querySelector(".desktop-menu");
      actions.insertBefore(makeButton(false), menu || null);
    }
    document.body.classList.toggle("has-header-toggle", !!document.querySelector(".header-actions .theme-toggle"));

    if (!document.querySelector(".theme-toggle--float")) {
      document.body.appendChild(makeButton(true));
    }
    sync();
  }

  function start() {
    ensure();
    // Some pages draw their header with JavaScript after load: add the toggle when it appears
    if (window.MutationObserver) {
      new MutationObserver(function () {
        if (document.querySelector(".header-actions") && !document.querySelector(".header-actions .theme-toggle")) ensure();
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  // Back/forward cache + other tabs stay in sync
  window.addEventListener("pageshow", function () { apply(read()); sync(); });
  window.addEventListener("storage", function (e) {
    if (e.key === KEY) { apply(read()); sync(); }
  });

  window.QuizNestTheme = { get: current, set: function (t) { apply(t === "dark" ? "dark" : "light"); try { localStorage.setItem(KEY, current()); } catch (e) {} sync(); }, toggle: toggle };
})();
