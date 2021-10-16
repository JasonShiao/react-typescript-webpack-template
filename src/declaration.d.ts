// Allow typescript to import scss
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
// Allow typescript to import images
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
