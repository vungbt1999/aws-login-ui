import { CSSProperties, FC } from 'react';
import EyeSlash from './eye-slash';
import Eye from './eye';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName = 'eye-slash' | 'eye';

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  'eye-slash': (props: IconProps) => {
    return <EyeSlash {...props} />;
  },
  eye: (props: IconProps) => {
    return <Eye {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
