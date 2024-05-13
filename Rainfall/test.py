import requests

rainfall_url = "https://api.data.gov.sg/v1/environment/rainfall"
humidity_url = "https://api.data.gov.sg/v1/environment/relative-humidity"
winddir_url = "https://api.data.gov.sg/v1/environment/wind_direction"
windspe_url = "https://api.data.gov.sg/v1/environment/wind_speed"
response = requests.get(rainfall_url)
data = response.json()

print(data)
