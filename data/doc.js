import data from './2019-07to10.json'

export default path => {
  const doc = data.documents.find(d => d.url.endsWith(path))

  if (!doc) {
    return
  }

  const internalLinks = data.internalLinks.filter(link => link.source === doc.id || link.target === doc.id)
  const externalLinks = data.externalLinks.filter(link => link.source === doc.id)

  const documentIds = new Set(internalLinks.map(link => link.source).concat(internalLinks.map(link => link.target)))

  return { 
    doc,
    documents: data.documents.filter(d => documentIds.has(d.id)),
    internalLinks,
    externalLinks
  }
}
