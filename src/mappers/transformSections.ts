import {
  mapHero,
  mapWhyChooseUs,
  mapServices,
  mapStats,
  mapProcess,
  mapCTA,
  mapFooter,
  mapFooterLinks
} from './index';

export const transformSections = (sections: any[]) => {
  const transformed: any = {
    footer: { sections: [] } // Prepare structure for footer.sections
  };

  for (const section of sections) {
    switch (section.__component) {
      case 'sections.hero':
        transformed.hero = mapHero(section);
        break;
      case 'sections.why-choose-us':
        transformed.whyChooseUs = mapWhyChooseUs(section);
        break;
      case 'sections.services':
        transformed.services = mapServices(section);
        break;
      case 'sections.stats':
        transformed.stats = mapStats(section);
        break;
      case 'sections.process':
        transformed.process = mapProcess(section);
        break;
      case 'sections.cta-section':
        transformed.cta = mapCTA(section);
        break;
      case 'sections.footer':
        transformed.footer = {
          ...transformed.footer,
          brand: mapFooter(section)
        };
        break;
      case 'sections.footer-link-proto':
        transformed.footer.sections.push(mapFooterLinks(section));
        break;
      default:
        console.warn('Unknown component:', section.__component);
    }
  }

  return transformed;
};
