import { CiUsb, CiShirt, CiHeart } from "react-icons/ci";
import { GiEmeraldNecklace } from "react-icons/gi";
import { colors } from "../../styles/colors";

const categoryIcons = {
  "electronics": CiUsb,
  "jewelery": GiEmeraldNecklace,
  "men's clothing": CiShirt,
  "women's clothing": CiHeart,
}

const categoryColors = {
  "electronics": colors.system.sucess,
  "jewelery": colors.system.error,
  "men's clothing": colors.system.warning,
  "women's clothing": colors.system.url,
}

export const handleCategories = (categories) => {
  return categories.map((category) => {
    return {
      name: category,
      Icon: categoryIcons[`${category}`],
      color: categoryColors[`${category}`],
    }
  })
}