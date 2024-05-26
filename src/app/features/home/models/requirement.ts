export interface Requirement {
  title: string;
  description: string;
  children?: Requirement[];
  link?: string;
  checked?: boolean;
}
