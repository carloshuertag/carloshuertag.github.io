export default interface EducationItem {
  index: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
  gpa: number;
  city: string;
  extra: { name: string; href: string }[];
  imageSource: string;
}
