const langtoCountry = {
  en: 'gb',
  it: 'it',
  es: 'es',
  fr: 'fr',
  de: 'de',
  ja: 'jp',
};

export function getFlagUrl(langCode) {
  const countryCode = langtoCountry[langCode];

  if (!countryCode) return null;

  return `https://flagcdn.com/24x18/${countryCode}.png`;
}
