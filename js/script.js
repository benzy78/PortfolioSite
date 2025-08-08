document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerNav = document.querySelector(".header__nav");

  menuToggle.addEventListener("click", function () {
    // toggle 'active' class on the nav
    const isActive = headerNav.classList.toggle("active");

    // 要素の表示・非表示制御
    const groups = headerNav.querySelectorAll(".header__group, .header__back");
    groups.forEach(el => {
      if (isActive) {
        el.style.display = "block";
        // トランジションを効かせるため、少し遅らせてクラス付与
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 10);
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(-10px)";
        // アニメーションが終わった後に非表示に
        setTimeout(() => {
          el.style.display = "none";
        }, 300);
      }
    });
  });


  // 最上部のアニメーション
  $(document).ready(function () {
    const $keyvisual = $('.fadein');
    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop(); // 現在のスクロール位置
      const windowHeight = $(window).height(); // ウィンドウの高さ
      const offsetTop = $keyvisual.offset().top; // 要素の位置
      // 要素が画面内に入ったらvisibleクラスを追加
      if (scrollTop + windowHeight > offsetTop) {
        $keyvisual.addClass('show');
      }
    });
    // 初期表示でチェック（最初から表示される場合に対応）
    $(window).trigger('scroll');
  });

  // 各セクションのアニメーション
  $(document).ready(function() {
    // スクロール時に処理を実行
    $(".maincontents").on("scroll", function() {
      $(".scroll-fadein").each(function() {
        // 要素の位置を取得
        const elementTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        // 要素が画面内に入ったらクラスを追加
        if (elementTop < windowBottom - 50) { // 50pxのマージンを持たせる
          $(this).addClass("show");
        }
      });
    });
  });
  

});
