export const environment = {
  production: true,
  apiUrl: (typeof window !== 'undefined' && window.env && window.env.apiUrl) 
             ? window.env.apiUrl
             : 'http://ftm-crud-api-qa.brazilsouth.azurecontainer.io/api/Employee' // Valor por defecto
};