import ReactGA from "react-ga";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

export const logPageView = (url: string) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};

export const logEvent = (
  category = "",
  action = "",
  label = "",
  value?: number
) => {
  if (category && action) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
