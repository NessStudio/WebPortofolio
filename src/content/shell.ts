/** Style bingkai tiap tema (diambil dari desain awal). */
export const SHELL = {
  "light": {
    "root": "position: relative; width: 1440px; height: 900px; overflow: hidden; background: linear-gradient(160deg, rgb(234, 243, 255) 0%, rgb(246, 238, 255) 45%, rgb(255, 243, 248) 100%); font-family: \"Space Grotesk\", sans-serif; color: rgb(20, 18, 43);",
    "frame": "position: absolute; inset: 20px; box-sizing: border-box; background: rgb(255, 255, 255); border-radius: 56px; padding: 20px; box-shadow: rgba(40, 60, 160, 0.2) 0px 30px 80px;",
    "panel": "position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 0px 0px 40px 40px; background: linear-gradient(155deg, rgb(255, 61, 154) 0%, rgb(255, 94, 126) 55%, rgb(255, 138, 92) 100%);"
  },
  "dark": {
    "root": "position: relative; width: 1440px; height: 900px; overflow: hidden; background: linear-gradient(160deg, #0E0D1E 0%, #18102E 45%, #1F0E24 100%); font-family: \"Space Grotesk\", sans-serif; color: rgb(20, 18, 43)",
    "frame": "position: absolute; inset: 20px; box-sizing: border-box; background: rgb(17, 15, 34); border-radius: 56px; padding: 20px; box-shadow: rgba(0, 0, 0, 0.55) 0px 30px 80px 0px",
    "panel": "position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 0px 0px 40px 40px; background: linear-gradient(155deg, rgb(255, 61, 154) 0%, rgb(255, 94, 126) 55%, rgb(255, 138, 92) 100%)"
  }
} as const;
