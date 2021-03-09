interface IFormattedRoute {
  name: string
  link: string
}

const formatLink = (link: string) => {
  const result = link.trim().replaceAll(' ', '-')
  return result
}

const formatName = (link: string) => {
  const result = link.replace(/\w\S*/g, (word) =>
    word.replace(/^\w/, (character) => character.toUpperCase())
  )

  console.log(result)
  return result
}

const formatRoutes = (links: string[]): IFormattedRoute[] => {
  let formattedLinks: IFormattedRoute[] = []
  for (let element of links) {
    const name = formatName(element)
    const link = formatLink(element)

    formattedLinks.push({ name, link })
  }

  return formattedLinks
}

export default formatRoutes
