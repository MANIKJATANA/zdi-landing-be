export function mapCTA(section: any) {
  return {
    title: section.title,
    description: section.description,
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
