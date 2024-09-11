import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/albert-sans";
import "@fontsource/yeseva-one";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FEFCBF",
      },
    },
  },
  fonts: {
    heading: "Yeseva One",
    body: "Albert Sans Variable",
  },
});

export default theme;
