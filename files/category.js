/* =====================================================
   category.js  -  used by every category page
   (files/art-literature.html ...) AND by files/explore.html.

   It reads the shared quiz list in ../quiz-data.js and draws the
   cards, so each page shows:
     - category page : ONLY the quizzes of that category
     - explore page  : EVERY quiz, grouped by category

   A quiz that exists in both lists is shown once (matched by id,
   then by title). Quizzes without an HTML file yet (empty href in
   quiz-data.js) are shown as "Coming Soon" and are not clickable,
   because no file name is guessed.

   It uses the SAME localStorage keys as index2.html, so hearts,
   login state and favourites are shared everywhere.
===================================================== */
"use strict";

(() => {
  const HOME_PAGE = "../index.html";   // the real home page (has Favourites / Filters / Sort by)

  const KEYS = {
    users: "quiznest_users",
    session: "quiznest_session",
    progress: (userId) => `quiznest_progress_${userId}`,
    categoryQuizzes: "quiznest_category_quizzes",
    ratings: "quiznest_ratings"            // same key the quiz player in index.html saves star ratings to
  };

  /* ---------- tiny helpers ---------- */
  const readJSON = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) { return fallback; }
  };
  const writeJSON = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (error) { return false; }
  };
  const escapeHtml = (text) =>
    String(text).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const normalise = (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  /* ---------- login state (same data as index2.html) ---------- */
  const getCurrentUser = () => {
    const session = readJSON(KEYS.session, null);
    if (!session || !session.userId) return null;
    const users = readJSON(KEYS.users, []);
    return (Array.isArray(users) ? users : []).find((u) => u.id === session.userId) || null;
  };

  const updateAuthUI = () => {
    const user = getCurrentUser();
    document.querySelectorAll("[data-auth]").forEach((el) => {
      el.hidden = (el.dataset.auth === "user") !== Boolean(user);
    });
    document.querySelectorAll("[data-user-name]").forEach((el) => {
      el.textContent = user ? user.name.split(" ")[0] : "";
    });
  };

  /* ---------- favourites (same storage format as index2.html) ---------- */
  const getProgress = (userId) => {
    const saved = readJSON(KEYS.progress(userId), null) || {};
    const isObject = saved.inProgress && typeof saved.inProgress === "object" && !Array.isArray(saved.inProgress);
    return {
      attempts: Array.isArray(saved.attempts) ? saved.attempts : [],
      favourites: Array.isArray(saved.favourites) ? saved.favourites : [],
      inProgress: isObject ? saved.inProgress : {}
    };
  };
  const currentFavourites = () => {
    const user = getCurrentUser();
    return getProgress(user ? user.id : "guest").favourites;
  };

  /* ---------- user ratings (saved by the quiz player in index.html) ---------- */
  const ratingInfo = (quiz) => {
    const all = readJSON(KEYS.ratings, {});
    const m = all && typeof all === "object" ? all[quiz.id] : null;
    const v = m && typeof m === "object"
      ? Object.values(m).filter((n) => Number.isInteger(n) && n >= 1 && n <= 5) : [];
    return v.length
      ? { avg: v.reduce((x, y) => x + y, 0) / v.length, count: v.length }
      : { avg: Number(quiz.rating) || 0, count: 0 };
  };

  /* ---------- build the full, de-duplicated quiz list ---------- */
  const buildCatalog = () => {
    const catalog = [];
    const seenIds = new Set();
    const seenTitles = new Set();

    const add = (quiz) => {
      const titleKey = normalise(quiz.title);
      if (seenIds.has(quiz.id) || seenTitles.has(titleKey)) return; // already listed
      seenIds.add(quiz.id);
      seenTitles.add(titleKey);
      catalog.push(quiz);
    };

    // 1. Quizzes from the home page: they play inside index2.html (#/quiz/<id>)
    QUIZZES.forEach((q) => add({
      id: q.id, title: q.title, author: q.author, rating: q.rating,
      category: q.category, image: q.image, difficulty: q.difficulty || "",
      href: `${HOME_PAGE}#/quiz/${q.id}`, source: "home"
    }));

    // 2. Quizzes that were already listed on the category pages
    CATEGORY_QUIZZES.forEach((q) => add({
      id: q.id, title: q.title, author: q.author, rating: Number(q.rating) || 0,
      category: q.category, image: q.image, difficulty: "",
      href: q.href ? (/^(https?:|\.\.\/|\/)/.test(q.href) ? q.href : `../${q.href}`) : "",
      source: "category"
    }));

    return catalog;
  };

  /* ---------- card HTML ---------- */
  const cardHTML = (quiz, favourite) => {
    const available = Boolean(quiz.href);
    const label = CATEGORY_LABELS[quiz.category] || quiz.category;
    const info = ratingInfo(quiz);
    const title = available
      ? `<a href="${escapeHtml(quiz.href)}">${escapeHtml(quiz.title)}</a>`
      : escapeHtml(quiz.title);
    return `
    <div class="quiz-card${available ? "" : " is-unavailable"}" data-quiz-id="${escapeHtml(quiz.id)}" data-category="${escapeHtml(quiz.category)}">
      <button type="button" class="fav-btn${favourite ? " is-active" : ""}" data-fav="${escapeHtml(quiz.id)}"
              aria-pressed="${favourite}" aria-label="${favourite ? "Remove from" : "Add to"} favourites: ${escapeHtml(quiz.title)}">
        <i class="${favourite ? "fa-solid" : "fa-regular"} fa-heart" aria-hidden="true"></i>
      </button>
      <img src="../${escapeHtml(quiz.image)}" alt="${escapeHtml(quiz.title)} quiz thumbnail">
      <div class="card-content">
        <h3>${title}</h3>
        <p>⭐ ${info.avg.toFixed(1)} (${info.count}) &nbsp;&nbsp; By ${escapeHtml(quiz.author)}</p>
        <p class="card-meta">
          <span class="tag">${escapeHtml(label)}</span>
          ${quiz.difficulty ? `<span class="tag tag-${quiz.difficulty.toLowerCase()}">${escapeHtml(quiz.difficulty)}</span>` : ""}
          ${available ? "" : `<span class="tag tag-soon">Coming Soon</span>`}
        </p>
        ${available
          ? `<a class="green-btn card-start" href="${escapeHtml(quiz.href)}">Start Quiz</a>`
          : `<span class="card-start card-soon" aria-disabled="true">Coming Soon</span>`}
      </div>
    </div>`;
  };

  /* ---------- favourites toggle (registers category quizzes so index2 can show them) ---------- */
  const toggleFavourite = (rawId, catalog) => {
    const id = /^\d+$/.test(rawId) ? Number(rawId) : rawId;
    const quiz = catalog.find((q) => q.id === id);
    if (!quiz) return;

    const user = getCurrentUser();
    const uid = user ? user.id : "guest";
    const progress = getProgress(uid);
    const wasFavourite = progress.favourites.includes(id);
    progress.favourites = wasFavourite
      ? progress.favourites.filter((f) => f !== id)
      : [...progress.favourites, id];
    writeJSON(KEYS.progress(uid), progress);

    // Category-page quizzes: remember their card details so the dashboard can draw them
    if (quiz.source === "category") {
      const registry = readJSON(KEYS.categoryQuizzes, {});
      const safe = registry && typeof registry === "object" && !Array.isArray(registry) ? registry : {};
      safe[quiz.id] = {
        title: quiz.title, author: quiz.author, rating: quiz.rating, category: quiz.category,
        image: quiz.image,
        comingSoon: !quiz.href,
        // index2.html opens this link from the project root, so make it root-relative
        // no quiz file yet -> the dashboard opens this quiz's category page instead
        href: quiz.href ? quiz.href.replace(/^\.\.\//, "") : `files/${quiz.category}.html`
      };
      writeJSON(KEYS.categoryQuizzes, safe);
    }
  };

  /* ---------- toasts (small, no alert()) ---------- */
  const toast = (message) => {
    let box = document.getElementById("toast-container");
    if (!box) {
      box = document.createElement("div");
      box.id = "toast-container";
      box.className = "toast-container";
      document.body.appendChild(box);
    }
    const el = document.createElement("div");
    el.className = "toast toast-success";
    el.setAttribute("role", "status");
    el.innerHTML = `<i class="fa-solid fa-circle-check" aria-hidden="true"></i><span class="toast-text"></span>`;
    el.querySelector(".toast-text").textContent = message;
    box.appendChild(el);
    setTimeout(() => { el.classList.add("is-leaving"); setTimeout(() => el.remove(), 250); }, 2500);
  };

  /* =====================================================
     PAGE LOGIC
  ===================================================== */
  const page = document.body.dataset.page || "category";
  const catalog = buildCatalog();
  const state = { query: "", category: "all" };

  const matches = (quiz) => {
    const q = state.query.trim().toLowerCase();
    if (state.category !== "all" && quiz.category !== state.category) return false;
    if (!q) return true;
    return [quiz.title, quiz.author, quiz.difficulty, CATEGORY_LABELS[quiz.category] || quiz.category]
      .join(" ").toLowerCase().includes(q);
  };

  /* ----- category page: ONLY this category's quizzes ----- */
  const renderCategoryPage = () => {
    const section = document.querySelector("section.recent[id]");
    const grid = section && section.querySelector(".quiz-grid");
    if (!grid) return;
    const slug = section.id;
    const favourites = currentFavourites();
    const list = catalog.filter((q) => q.category === slug && matches(q));

    grid.innerHTML = list.map((q) => cardHTML(q, favourites.includes(q.id))).join("");

    let empty = section.querySelector(".category-empty");
    if (!list.length) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "category-empty";
        section.appendChild(empty);
      }
      empty.textContent = state.query.trim() ? "No quizzes found. Try another search." : "No quizzes in this category yet.";
    } else if (empty) {
      empty.remove();
    }
  };

  /* ----- explore page: everything, grouped by category ----- */
  const renderExplorePage = () => {
    const root = document.getElementById("explore-root");
    const count = document.getElementById("explore-count");
    const noResults = document.getElementById("explore-empty");
    if (!root) return;
    const favourites = currentFavourites();
    const list = catalog.filter(matches);

    root.innerHTML = Object.keys(CATEGORY_LABELS).map((slug) => {
      const group = list.filter((q) => q.category === slug);
      if (!group.length) return "";
      return `
      <section class="recent explore-group" id="explore-${slug}">
        <h2>${escapeHtml(CATEGORY_LABELS[slug])} <span class="explore-count-pill">${group.length}</span></h2>
        <div class="quiz-grid popular-grid">
          ${group.map((q) => cardHTML(q, favourites.includes(q.id))).join("")}
        </div>
      </section>`;
    }).join("");

    if (count) count.textContent = `${list.length} quiz${list.length === 1 ? "" : "zes"} of ${catalog.length}`;
    if (noResults) noResults.hidden = list.length > 0;
  };

  const render = () => (page === "explore" ? renderExplorePage() : renderCategoryPage());

  /* ----- events ----- */
  document.addEventListener("click", (event) => {
    const logout = event.target.closest('[data-action="logout"]');
    if (logout) {
      try { localStorage.removeItem(KEYS.session); } catch (error) { /* ignore */ }
      return; // the link itself takes the user back to the home page
    }

    const favBtn = event.target.closest("[data-fav]");
    if (favBtn) {
      event.preventDefault();
      const id = favBtn.dataset.fav;
      const quiz = catalog.find((q) => String(q.id) === id);
      const wasFav = favBtn.classList.contains("is-active");
      toggleFavourite(id, catalog);
      if (quiz) toast(wasFav ? `Removed "${quiz.title}" from favourites.` : `Added "${quiz.title}" to favourites.`);
      render();
    }
  });

  // Header search: filters the cards on this page
  const searchInput = document.getElementById("search-input");
  const searchForm = document.querySelector(".search-bar");
  if (searchInput) {
    let timer;
    searchInput.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.query = searchInput.value; render(); }, 250);
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && searchInput.value) { searchInput.value = ""; state.query = ""; render(); }
    });
  }
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.query = searchInput ? searchInput.value : "";
      render();
    });
  }

  // Explore page: category dropdown + its own search box
  const categorySelect = document.getElementById("explore-category");
  if (categorySelect) {
    categorySelect.innerHTML = `<option value="all">All categories</option>` +
      Object.entries(CATEGORY_LABELS).map(([slug, label]) => `<option value="${slug}">${escapeHtml(label)}</option>`).join("");
    categorySelect.addEventListener("change", () => { state.category = categorySelect.value; render(); });
  }
  const exploreSearch = document.getElementById("explore-search");
  if (exploreSearch) {
    let timer;
    exploreSearch.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.query = exploreSearch.value; render(); }, 250);
    });
  }
  const resetBtn = document.getElementById("explore-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.query = ""; state.category = "all";
      if (exploreSearch) exploreSearch.value = "";
      if (searchInput) searchInput.value = "";
      if (categorySelect) categorySelect.value = "all";
      render();
    });
  }

  // Keep hearts in sync when coming back with the Back button or from another tab
  window.addEventListener("pageshow", (event) => { if (event.persisted) { updateAuthUI(); render(); } });
  window.addEventListener("storage", () => { updateAuthUI(); render(); });

  updateAuthUI();
  render();
})();
