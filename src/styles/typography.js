import Typography from "typography";

const typography = new Typography({
  title: "reyna",
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Nunito Sans",
      styles: ["400", "700"]
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Nunito Sans", "Arial", "sans-serif"],
  bodyFontFamily: ["Roboto", "serif"],
  headerColor: "hsl(0, 0%, 0%, 1)",
  bodyColor: "hsl(0, 0%, 0%, 0.7)",
  headerWeight: "700",
  bodyWeight: "normal"
});

export default typography;
