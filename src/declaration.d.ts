declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
};
