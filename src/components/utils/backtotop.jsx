import React, { Component, useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

const BackToTop = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function moveTop() {
    $(".back-to-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        100
      );
      return false;
    });

    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 600) {
        $(".back-to-top").fadeIn();
        $(".back-to-top").addClass("open");
      } else {
        $(".back-to-top").fadeOut();
        $(".back-to-top").removeClass("open");
      }
    });
  }

  moveTop();

  return (
    <div>
      {top && (
        <button className="back-to-top bounce" onClick={scrollUP}>
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
