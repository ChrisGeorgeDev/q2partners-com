export const GTM_ID = "GTM-NGVK3CP";

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
