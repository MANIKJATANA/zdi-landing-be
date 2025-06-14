export function mapFooter(section: any) {
  return {
    name: section.brand?.name,
    tagline: section.brand?.tagline,
    copyright: section.brand?.copyright,
  };
}
