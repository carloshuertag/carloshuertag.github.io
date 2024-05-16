import { useEffect } from "react";
import ExperienceItem from "../../../interfaces/ExperienceItem";
import CarouselItem from "../Carouseltem";
import "./ExperienceCarousel.css";
import ExperienceData from "../../../data/experience.json";

const experienceCarousel: ExperienceItem[] = ExperienceData;
const carouselGhostItems = experienceCarousel
  .slice(-2)
  .map((experienceItem) => (
    <div
      className='carousel__parallax-card-wrapper opacity'
      key={experienceItem.index}
    >
      <div className='carousel__parallax-content'>
        <CarouselItem experience={experienceItem} />
      </div>
    </div>
  ));

const Experience = () => {
  useEffect(() => {
    const carouselWrapper: HTMLElement | null = document.querySelector(
      ".carousel__parallax-wrapper"
    );
    let containerWidth: number = carouselWrapper?.offsetWidth ?? 0;
    let childPositions: number[] = [];

    const updateContainerWidth = () => {
      containerWidth = carouselWrapper?.offsetWidth ?? 0;
      if (carouselWrapper)
        [
          ...carouselWrapper.querySelectorAll(".carousel__parallax-content"),
        ].forEach((child) => {
          (child as HTMLElement).style.minWidth = String(
            containerWidth / 2
          ).concat("px");
        });
    };

    const updateChildPositions = () => {
      if (carouselWrapper)
        childPositions = Array.from(
          carouselWrapper.querySelectorAll(".carousel__parallax-card-wrapper")
        ).map((child) => (child as HTMLElement).offsetLeft);
    };

    const updateChildWidths = () => {
      const scrollPosition = carouselWrapper?.scrollLeft ?? 0;
      if (carouselWrapper)
        for (let i = 0; i < carouselWrapper.children.length; i++) {
          const child = carouselWrapper.children[i] as HTMLElement;
          const proximity = Math.abs(childPositions[i] - scrollPosition);
          const scale = Math.min(
            Math.max(0, 1 - proximity / containerWidth),
            1
          );
          const desiredWidth = 15 + scale * 35;
          child.style.minWidth = `${String(desiredWidth)}%`;
        }
    };

    const init = () => {
      updateContainerWidth();
      updateChildPositions();
      updateChildWidths();
    };

    carouselWrapper?.addEventListener("scroll", () => {
      updateChildPositions();
      updateChildWidths();
    });
    window.addEventListener("resize", init);
    init();
  }, []);

  return (
    <div className='carousel__parallax-wrapper scroll' id='experience'>
      {experienceCarousel.map((experienceItem) => (
        <div
          className='carousel__parallax-card-wrapper'
          key={experienceItem.index}
        >
          <div className='carousel__parallax-content'>
            <CarouselItem experience={experienceItem} />
          </div>
        </div>
      ))}
      {carouselGhostItems}
    </div>
  );
};

export default Experience;
