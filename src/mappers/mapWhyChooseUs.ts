export function mapWhyChooseUs(section: any) {
  return {
    sectionTitle: section.sectionTitle,
    features: section.features?.map((feature: any) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    })) || [],
  };
}
