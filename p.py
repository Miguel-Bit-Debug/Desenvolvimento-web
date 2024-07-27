import requests

response = requests.get('https://viacep.com.br/ws/01001000/json/')
print(response.json())
