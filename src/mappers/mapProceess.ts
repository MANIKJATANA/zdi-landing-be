export function mapProcess(section: any) {
  return {
    sectionTitle: section.sectionTitle,
    steps: section.steps?.map((step: any) => ({
      number: step.number,
      title: step.title,
      description: step.description,
    })) || [],
  };
}
