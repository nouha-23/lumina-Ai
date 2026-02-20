
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'blue' | 'slate' | 'dark';
  children?: React.ReactNode;
}

export interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  showArrow?: boolean;
}

export interface StatItemProps {
  value: string;
  label: string;
  description: string;
}
