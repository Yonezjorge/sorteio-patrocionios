"use client"

import { useScreenSize } from "@/context/screenSizeContext";
import { useEffect, useState } from "react";
import style from '../../app/style/presentation.module.css'
import { FaWhatsapp } from 'react-icons/fa'
export default function Presentation() {
  const { screenY, screenX } = useScreenSize();
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeigth, setInnerHeigth] = useState();
  const [changeSide, setChangeSide] = useState(false);
  const [startAnimatiomCircles, setStartAnimationCircles] = useState(false);
  const [showCircles, setShowCircles] = useState(true);
  const totalCircles = [
    { total: "1", size: "20px" },
    { total: "1", size: "23px" },
    { total: "1", size: "27px" },
    { total: "1", size: "18px" },
    { total: "1", size: "25px" },
    { total: "1", size: "22px" },
    { total: "1", size: "27px" },
    { total: "1", size: "16px" },
    { total: "1", size: "20px" },
  ];

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeigth(window.innerHeigth);
  }, [screenX, screenY]);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    async function waitAnimationCircles() {
      await new Promise((resolve) => setTimeout(resolve, 1));
    }

    if (!startAnimatiomCircles) {
      waitAnimationCircles();
      setStartAnimationCircles(true);
    }
  }, []);

  useEffect(() => {
    async function changeSideFunction() {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setChangeSide(!changeSide);
    }

    if (startAnimatiomCircles) {
      animateCircles();
      changeSideFunction();
    }

    function animateCircles() {
      let delayTime = 0.401;
      const circles = document.querySelectorAll(".circle_animation");
      circles.forEach((text, index) => {
        text.style.transition = "10s";
        text.style.transitionDelay = delayTime + "s";

        text.style.opacity = "1";
        text.style.transform = `translate(${getRandomInt(
          1,
          innerWidth - (innerWidth < 500 ? 150 : 555)
        )}px, ${getRandomInt(1, screenY - (innerWidth < 500 ? 350 : 555))}px)`;
        // if (index < 4) {
        //   delayTime += delayTime;
        // }
      });

      let delayTimeTwo = 0.401;
      const circlesTwo = document.querySelectorAll(".circle_animationTwo");
      circlesTwo.forEach((text, index) => {
        text.style.transition = "10s";
        text.style.transitionDelay = delayTimeTwo + "s";
        text.style.opacity = "1";
        text.style.transform = `translate(${getRandomInt(
          1,
          -innerWidth - (innerWidth < 500 ? 250 : 150)
        )}px, ${getRandomInt(-screenY + 335, 1)}px)`;
        // if (index < 4) {
        //   delayTimeTwo += delayTimeTwo;
        // }
      });
    }
  }, [changeSide, startAnimatiomCircles, showCircles]);
  return (
    <div className={`${style.bg_presentation} md:h-[35rem] h-[28rem] flex justify-center items-center relative  overflow-hidden`}>
      <div className='m-auto max-w-[730px] flex justify-center gap-9 items-center flex-col z-50 '>
        <h1 className='shadowDefault text-white 2xl:text-4xl md:text-3xl text-xl   font-bold text-center'>
          Comprar Conta <span className='text-yellowDefault'>no Instagram nunca foi tão fácil.</span> Compre contas no Instagram do Nicho que você precisa. Seguidores Reais e Ativos.
        </h1>
        <a href="https://api.whatsapp.com/send?phone=5581998141853" target="_blank  relative ">
          <button className='bgDefaultButton  w-52 py-2 rounded-2xl text-white flex items-center justify-center gap-2 font-bold text-xl'>Saiba mais <FaWhatsapp className="text-white text-2xl" /></button>
        </a>
      </div>
      <div className={` absolute w-full`}>
        {showCircles &&
          totalCircles.map((circle, index) => {
            return (
              <span
                key={index + "circles"}
                className={`circles circle_animation`}
                style={{
                  width: circle.size,
                  height: circle.size,
                  transform: `translate(${getRandomInt(
                    1,
                    innerWidth - 100
                  )}px, ${getRandomInt(innerHeigth - 100, 1)}px)`,
                }}
              ></span>
            );
          })}
        {showCircles &&
          totalCircles.map((circle, index) => {
            return (
              <span
                key={index + "circlesTwo"}
                className={`circlesTwo circle_animationTwo`}
                style={{
                  width: circle.size,
                  height: circle.size,
                  transform: `translate(${getRandomInt(
                    1,
                    -innerWidth - 100
                  )}px, ${getRandomInt(-innerHeigth - 100, 1)}px)`,
                }}
              ></span>
            );
          })}
      </div>
    </div>
  )
}