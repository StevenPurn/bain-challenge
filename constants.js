// Maps to companies_between_size query
const sizes = ['1-10', '11-50', '51-200', '201-500', '501-1,000',
                '1,001-5,000', '5,001-10,000', '10,001+'];

// Maps to type query
const types = [`N/A`,
               'Aerospace and Defense',
               'Business & Legal Services',
               'Data/Technology',
               'Education',
               'Energy',
               'Environment & Weather',
               'Finance & Investment',
               'Food & Agriculture',
               'Geospatial/Mapping',
               'Governance',
               'Healthcare',
               'Housing/Real Estate',
               'Insurance',
               'Lifestyle & Consumer',
               'Media',
               'Research & Consulting',
               'Scientific Research',
               'Transportation'];

// Maps to locate query
const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
                'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
                'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
                'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
                'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN',
                'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

// find_after & find_before are only validated as numbers
const inputToProperty = {
  locate: 'state',
  find_companies_between_size: 'full_time_employees',
  find_type: 'company_category',
  find_after: 'year_founded',
  find_before: 'year_founded',
};

module.exports = {
  inputToProperty,
  states,
  types,
  sizes,
};
