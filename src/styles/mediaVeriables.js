export const size = {
  mobile: 390,
  tablet: 768,
  tablet_big: 1024,
  desktop_small: 1200,
  desktop: 1440,
};

export const device = {
  mobileOnly: `(max-width: ${size.mobile - 0.02}px)`,
  mobile: `(min-width: ${size.mobile}px)`,
  mobileTablet: `(min-width: ${size.mobile}px) and (max-width: ${
    size.tablet - 0.02
  }px)`,
  tabletBefore: `(max-width: ${size.tablet - 0.02}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletOnly: `(min-width: ${size.tablet}px) and (max-width: ${
    size.desktop - 0.02
  }px)`,
  tabletBig: `(min-width: ${size.tablet_big}px)`,
  desktopSmall: `(min-width: ${size.desktop_small}px)`,
  desktopBefore: `(max-width: ${size.desktop - 0.02}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  retina: `(min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx)`,
};
