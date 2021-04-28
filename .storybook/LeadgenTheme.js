import { create } from "@storybook/theming"
import Logo from "/src/images/StoryBookLogo.svg"

export default create({
  base: "light",
  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: Logo,
})
