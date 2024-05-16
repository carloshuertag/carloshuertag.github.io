export default interface SkillItem {
  index: number;
  title: string;
  skills: {
    index: number;
    name: string;
    href: string;
    years?: number;
  }[];
}
