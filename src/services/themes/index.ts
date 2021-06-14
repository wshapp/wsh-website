import black from "./black";
import main from "./main";

const complete = (theme) => {
  return { ...main, ...theme };
};

const themes = { black: complete(black) };

export default themes;
