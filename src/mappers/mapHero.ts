export function mapHero(section: any) {
  return {
    tagline: section.tagline,
    title: section.title,
    subtitle: section.subtitle,
    primaryCTA: {
      text: section.primaryCTA?.text,
      action: section.primaryCTA?.action,
    },
    secondaryCTA: {
      text: section.secondaryCTA?.text,
      action: section.secondaryCTA?.action,
    },
  };
}
