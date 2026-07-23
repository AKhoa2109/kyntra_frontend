/// <reference types="vite/client" />

declare module "@/*" {
  const value: any;
  export default value;
}
declare module "*.css";
declare module "*.png" {
  const src: string;
  export default src;
}
