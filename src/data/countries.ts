export const COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
    "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
    "Canary Islands", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad",
    "Chile", "China, People's Republic of", "Colombia", "Comoros", "Congo",
    "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
    "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France",
    "French Guiana", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
    "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea Republic",
    "Guinea-Bissau", "Guinea-Equatorial", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China",
    "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Korea, Republic Of", "Korea, The D.P.R. of", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Mariana Islands, Commonwealth", "Marshall Islands",
    "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia",
    "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauru, Republic Of", "Nepal", "Netherlands", "Nevis",
    "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "North Macedonia",
    "Niue", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion, Island Of",
    "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia, Republic of", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia, Federal Republic of", "Somaliland, Republic of", "South Africa", "South Sudan",
    "Spain", "Sri Lanka", "St. Barthelemy", "St. Eustatius", "St. Kitts", "St. Lucia",
    "St. Maarten", "St. Vincent", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tahiti", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom - Great Britain",
    "United Kingdom - Northern Ireland", "United States Of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)",
    "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"
];

export const COUNTRY_REGIONS: Record<string, string> = {
    // Africa
    "Algeria": "Africa", "Angola": "Africa", "Benin": "Africa", "Botswana": "Africa", "Burkina Faso": "Africa", "Burundi": "Africa",
    "Cameroon": "Africa", "Cape Verde": "Africa", "Central African Republic": "Africa", "Chad": "Africa", "Comoros": "Africa", "Congo": "Africa",
    "Congo, The Democratic Republic of": "Africa", "Cote d'Ivoire": "Africa", "Djibouti": "Africa", "Egypt": "Africa", "Eritrea": "Africa", "Eswatini": "Africa",
    "Ethiopia": "Africa", "Gabon": "Africa", "Gambia": "Africa", "Ghana": "Africa", "Guinea Republic": "Africa", "Guinea-Bissau": "Africa",
    "Guinea-Equatorial": "Africa", "Kenya": "Africa", "Lesotho": "Africa", "Liberia": "Africa", "Libya": "Africa", "Madagascar": "Africa",
    "Malawi": "Africa", "Mali": "Africa", "Mauritania": "Africa", "Mauritius": "Africa", "Mayotte": "Africa", "Morocco": "Africa",
    "Mozambique": "Africa", "Namibia": "Africa", "Niger": "Africa", "Nigeria": "Africa", "Reunion, Island Of": "Africa", "Rwanda": "Africa",
    "Saint Helena": "Africa", "Sao Tome and Principe": "Africa", "Senegal": "Africa", "Seychelles": "Africa", "Sierra Leone": "Africa",
    "Somalia, Federal Republic of": "Africa", "Somaliland, Republic of": "Africa", "South Africa": "Africa", "South Sudan": "Africa",
    "Sudan": "Africa", "Tanzania": "Africa", "Togo": "Africa", "Tunisia": "Africa", "Uganda": "Africa", "Zambia": "Africa", "Zimbabwe": "Africa",

    // Asia
    "Afghanistan": "Asia", "Armenia": "Asia", "Azerbaijan": "Asia", "Bangladesh": "Asia", "Bhutan": "Asia", "Brunei": "Asia",
    "Cambodia": "Asia", "China, People's Republic of": "Asia", "Hong Kong SAR China": "Asia", "India": "Asia", "Indonesia": "Asia", "Japan": "Asia",
    "Kazakhstan": "Asia", "Korea, Republic Of": "Asia", "Korea, The D.P.R. of": "Asia", "Kyrgyzstan": "Asia", "Lao People's Democratic Republic": "Asia",
    "Macau SAR China": "Asia", "Malaysia": "Asia", "Maldives": "Asia", "Mongolia": "Asia", "Myanmar": "Asia", "Nepal": "Asia", "Pakistan": "Asia",
    "Philippines": "Asia", "Singapore": "Asia", "South Korea": "Asia", "Sri Lanka": "Asia", "Taiwan": "Asia", "Tajikistan": "Asia",
    "Thailand": "Asia", "Timor-Leste": "Asia", "Turkmenistan": "Asia", "Uzbekistan": "Asia", "Vietnam": "Asia",

    // Europe
    "Albania": "Europe", "Andorra": "Europe", "Austria": "Europe", "Belarus": "Europe", "Belgium": "Europe", "Bosnia and Herzegovina": "Europe",
    "Bulgaria": "Europe", "Canary Islands": "Europe", "Croatia": "Europe", "Cyprus": "Europe", "Czech Republic": "Europe", "Denmark": "Europe",
    "Estonia": "Europe", "Faroe Islands": "Europe", "Finland": "Europe", "France": "Europe", "Germany": "Europe", "Gibraltar": "Europe",
    "Greece": "Europe", "Guernsey": "Europe", "Hungary": "Europe", "Iceland": "Europe", "Ireland": "Europe", "Italy": "Europe",
    "Jersey": "Europe", "Kosovo": "Europe", "Latvia": "Europe", "Liechtenstein": "Europe", "Lithuania": "Europe", "Luxembourg": "Europe",
    "Malta": "Europe", "Moldova, Republic Of": "Europe", "Monaco": "Europe", "Montenegro": "Europe", "Netherlands": "Europe", "Norway": "Europe",
    "Poland": "Europe", "Portugal": "Europe", "Romania": "Europe", "Russian Federation": "Europe", "San Marino": "Europe", "Serbia, Republic of": "Europe",
    "Slovakia": "Europe", "Slovenia": "Europe", "Spain": "Europe", "Sweden": "Europe", "Switzerland": "Europe", "Turkey": "Europe",
    "Ukraine": "Europe", "United Kingdom - Great Britain": "Europe", "United Kingdom - Northern Ireland": "Europe", "Vatican City State": "Europe", "North Macedonia": "Europe",

    // Middle East
    "Bahrain": "Middle East", "Iran (Islamic Republic of)": "Middle East", "Iraq": "Middle East", "Israel": "Middle East", "Jordan": "Middle East",
    "Kuwait": "Middle East", "Lebanon": "Middle East", "Oman": "Middle East", "Qatar": "Middle East", "Saudi Arabia": "Middle East",
    "Syria": "Middle East", "United Arab Emirates": "Middle East", "Yemen": "Middle East",

    // North America
    "Anguilla": "North America", "Antigua": "North America", "Aruba": "North America", "Bahamas": "North America", "Barbados": "North America",
    "Belize": "North America", "Bermuda": "North America", "Bonaire": "North America", "Canada": "North America", "Cayman Islands": "North America",
    "Costa Rica": "North America", "Cuba": "North America", "Curacao": "North America", "Dominica": "North America", "Dominican Republic": "North America",
    "El Salvador": "North America", "Greenland": "North America", "Grenada": "North America", "Guadeloupe": "North America", "Guam": "North America",
    "Guatemala": "North America", "Haiti": "North America", "Honduras": "North America", "Jamaica": "North America", "Martinique": "North America",
    "Mexico": "North America", "Montserrat": "North America", "Nevis": "North America", "Nicaragua": "North America", "Panama": "North America",
    "Puerto Rico": "North America", "St. Barthelemy": "North America", "St. Eustatius": "North America", "St. Kitts": "North America",
    "St. Lucia": "North America", "St. Maarten": "North America", "St. Vincent": "North America", "Trinidad and Tobago": "North America",
    "Turks and Caicos Islands": "North America", "United States Of America": "North America", "Virgin Islands (British)": "North America", "Virgin Islands (US)": "North America",

    // South America
    "Argentina": "South America", "Bolivia": "South America", "Brazil": "South America", "Chile": "South America", "Colombia": "South America",
    "Ecuador": "South America", "Falkland Islands": "South America", "French Guiana": "South America", "Guyana": "South America", "Paraguay": "South America",
    "Peru": "South America", "Suriname": "South America", "Uruguay": "South America", "Venezuela": "South America",

    // Oceania
    "American Samoa": "Oceania", "Australia": "Oceania", "Cook Islands": "Oceania", "Fiji": "Oceania", "Kiribati": "Oceania",
    "Mariana Islands, Commonwealth": "Oceania", "Marshall Islands": "Oceania", "Micronesia": "Oceania", "Nauru, Republic Of": "Oceania",
    "New Caledonia": "Oceania", "New Zealand": "Oceania", "Niue": "Oceania", "Palau": "Oceania", "Papua New Guinea": "Oceania",
    "Samoa": "Oceania", "Solomon Islands": "Oceania", "Tahiti": "Oceania", "Tonga": "Oceania", "Tuvalu": "Oceania", "Vanuatu": "Oceania", "Wallis and Futuna": "Oceania"
};
