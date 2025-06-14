export function mapFooterLinks(section: any) {
  return {
    title: section.title,
    links: section.links?.map((link: any) => ({
      label: link.label,
      href: link.href,
    })) || [],
  };
}
