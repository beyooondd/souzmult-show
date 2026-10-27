"use client";
import { useEffect } from "react";

export default function Behavior() {
  useEffect(() => {
    const $ = (id) => document.getElementById(id);

    // бегущая строка
    const t = ["Встреча героев «Союзмультфильм»", "Воздушные акробаты", "Цирковые номера", "Балет", "Песни из любимых мультфильмов"];
    let h = "";
    for (let i = 0; i < 8; i++) t.forEach((x) => { h += "<span>" + x + "</span><b>✦</b>"; });
    if ($("mq")) $("mq").innerHTML = h;

    // расписание
    const D = [
      ["25", "Пятница", ["11:00", "14:00", "18:00"]],
      ["27", "Воскресенье", ["11:00"], 1],
      ["28", "Понедельник", ["11:00", "14:00", "18:00"]],
      ["29", "Вторник", ["11:00", "14:00", "18:00"]],
      ["30", "Среда", ["11:00", "18:00"]]
    ];
    let o = "";
    D.forEach((d) => {
      const tm = (x) => x.replace(":", " : ");
      const sl = d[2].map((x) => d[3]
        ? '<div class="slot one"><b>' + tm(x) + '</b><div><span>Дворец Ирины Винер</span><small>1 час 20 минут · 0+ · от 1 500 ₽</small></div><a href="#">Выбрать места</a></div>'
        : '<div class="slot"><b>' + tm(x) + '</b><span>Дворец<br>Ирины Винер</span><small>От 1 500 ₽</small><a href="#">Выбрать места</a></div>'
      ).join("");
      o += '<div class="day' + (d[3] ? " hot" : "") + '"><div class="dd"><span class="n">' + d[0] + '</span><span class="m">дек</span><small>' + d[1] + '</small></div><div class="slots n' + d[2].length + '">' + sl + "</div></div>";
    });
    if ($("days")) $("days").innerHTML = o;

    // слайдер героев: стартовая позиция
    const sl = $("sl");
    const c = document.querySelector("#sl .ch");
    if (sl && c && window.innerWidth > 1100) sl.scrollLeft = c.offsetWidth * 0.82;

    // закрывать меню по клику на пункт
    const nav = $("nav");
    const links = [].slice.call(document.querySelectorAll("#nav a"));
    const onNavClick = () => { nav.classList.remove("open"); document.body.classList.remove("menu"); };
    links.forEach((a) => a.addEventListener("click", onNavClick));

    // подсветка пункта меню
    const io = new IntersectionObserver((entries) => {
      entries.forEach((x) => {
        if (x.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + x.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((a) => { const el = document.querySelector(a.getAttribute("href")); if (el) io.observe(el); });

    return () => {
      io.disconnect();
      links.forEach((a) => a.removeEventListener("click", onNavClick));
    };
  }, []);

  return null;
}
