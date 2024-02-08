const apiUrl = 'https://disease.sh/v3/covid-19';
    
    // Function to fetch countries and populate the dropdown
    async function fetchCountries() {
      try {
        const response = await fetch(`${apiUrl}/countries`, {
          method: 'GET',
        });
        const countries = await response.json();

        // Populate the dropdown with country names
        const countryDropdown = document.getElementById('country');
        countries.forEach(country => {
          const option = document.createElement('option');
          option.value = country.country;
          option.textContent = country.country;
          countryDropdown.appendChild(option);
        });
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }

    // Function to get COVID-19 statistics for a selected country
    async function getStats() {
      const selectedCountry = document.getElementById('country').value;

      try {
        const response = await fetch(`${apiUrl}/countries/${selectedCountry}`, {
          method: 'GET',
        });
        const data = await response.json();

        // Display statistics
        const statsResult = document.getElementById('statsResult');
        statsResult.innerHTML = `<p><strong>${selectedCountry} Statistics:</strong></p>
                                 <p>Cases: ${data.cases}</p>
                                 <p>Deaths: ${data.deaths}</p>
                                 <p>Recovered: ${data.recovered}</p>`;
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    }

    // Fetch countries when the page loads
    fetchCountries();