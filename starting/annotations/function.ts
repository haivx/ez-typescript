const add = (a: number, b: number): number => {
  return a + b;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwNewErr = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWheather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
};

const logWheather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
