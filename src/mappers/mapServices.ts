export function mapServices(section: any) {
  return {
    sectionTitle: section.sectionTitle,
    services: section.services?.map((service: any) => ({
      icon: service.icon,
      title: service.title,
      description: service.description,
    })) || [],
  };
}
