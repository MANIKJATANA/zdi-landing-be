export function mapStats(section: any) {
  return {
    sectionTitle: section.sectionTitle,
    stats: section.stats?.map((stat: any) => ({
    icon: stat.icon,    
      label: stat.label,
      number: stat.number,
      description: stat.description,
    })) || [],
  };
}
