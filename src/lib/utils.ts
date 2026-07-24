import type { Lang, Content } from "./types";
import { content as fi } from "../content/fi";
import { content as en } from "../content/en";

const contentMap: Record<Lang, Content> = { fi, en };

export function getContent(lang: Lang): Content {
  return contentMap[lang];
}
