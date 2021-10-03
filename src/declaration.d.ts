// Allow typescript to import scss
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
