import { QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer() {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer>
        <hr />
        <ul>
          {Object.entries(links).map(([text, link]) => {
            const fontclass = "fa-brands fa-" + text.toLowerCase()
            return (
            <li>
              <a href={link}><i class={fontclass}></i> {text}</a>
            </li>
          )})}
          <li>|&nbsp;&nbsp;&nbsp;<a href="/privacy"><i class="fa-solid fa-lock"></i> Privacy</a></li>
          <li>|&nbsp;&nbsp;&nbsp;<a href="/notes/about"><i class="fa-solid fa-address-card"></i> About</a></li>
        </ul>
        <p>
        <i class="fa-regular fa-copyright"></i> David C. Buchan 2002&ndash;{year}. Created with <a href="https://obsidian.md">Obsidian</a> and <a href="https://quartz.jzhao.xyz/">Quartz</a>. <a rel="me" href="https://aus.social/@dcbuchan"></a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
