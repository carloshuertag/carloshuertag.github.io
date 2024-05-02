import EducationItem from "../../interfaces/EducationItem";
import EducationCard from "./EducationCard";

const items: EducationItem[] = [
  {
    index: 1,
    school: "Escuela Superior de Cómputo - Instituto Politécnico Nacional",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Computer Systems Engineering",
    startYear: 2019,
    endYear: 2024,
    gpa: 9.35,
    city: "Mexico City",
    extra: [
      {
        name: "Academic Excellence",
        href: "https://www.facebook.com/photo/?fbid=1472519846259071&set=pcb.1472520059592383",
      },
      {
        name: "Member of the Algorithms Study Club",
        href: "https://escom-ipn.acm.org/blog/",
      },
    ],
    imageSource: "/escom.png",
  },
  {
    index: 2,
    school:
      "Escuela Técnica Superior de Ingenieros de Sistemas Informáticos - Universidad Politécnica de Madrid",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Software, Data Science and Artificial Intelligence",
    startYear: 2023,
    endYear: 2023,
    gpa: 8,
    city: "Madrid",
    extra: [
      {
        name: "Exchange Program",
        href: "https://drive.google.com/file/d/1Y7YDpuZJUGKc_2d3q0q5u_Q5IC1ScfiC/view?usp=sharing",
      },
    ],
    imageSource: "/etsisi.jpg",
  },
  {
    index: 3,
    school:
      'Centro de Estudios Científicos y Tecnológicos No. 9 "Juan de Dios Bátiz" - Instituto Politécnico Nacional',
    degree: "Technician",
    fieldOfStudy: "Programming",
    startYear: 2016,
    endYear: 2019,
    gpa: 8.67,
    city: "Mexico City",
    extra: [],
    imageSource: "/cecyt9.png",
  },
];

const Education = () => {
  return (
    <div className='grid page left active anchor' id='education'>
      {items.map((item) => (
        <EducationCard education={item} key={item.index} />
      ))}
    </div>
  );
};

export default Education;
